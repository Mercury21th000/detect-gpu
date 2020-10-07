// Vendor
import leven from 'leven';
import fetch from 'unfetch';

// Internal
import { getGPUVersion } from './internal/getGPUVersion';
import { getWebGLContext } from './internal/getWebGLContext';
import { deviceInfo, isSSR } from './internal/deviceInfo';
import { deobfuscateRenderer } from './internal/deobfuscateRenderer';

// Types
import type { IGetGPUTier, TModelEntry, TTierResult, TTierType } from './types';

const debug = false ? console.log : undefined;

const queryCache: { [k: string]: Promise<TModelEntry[] | undefined> } = {};

export const getGPUTier = async ({
  mobileTiers = [0, 15, 30, 60],
  desktopTiers = [0, 15, 30, 60],
  override: {
    renderer,
    isIpad = Boolean(deviceInfo?.isIpad),
    isMobile = Boolean(deviceInfo?.isMobile),
    screenSize = isSSR ? { height: 1080, width: 1920 } : window.screen,
    loadBenchmarks,
  } = {},
  glContext,
  failIfMajorPerformanceCaveat = true,
  benchmarksURL = '/benchmarks',
}: IGetGPUTier = {}): Promise<TTierResult> => {
  const MODEL_INDEX = 0;

  const queryBenchmarks = async (
    loadBenchmarks = async (
      file: string
    ): Promise<TModelEntry[] | undefined> => {
      try {
        const data = await fetch(`${benchmarksURL}/${file}`).then(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (response): Promise<any> => response.json()
        );

        // Remove version tag
        data.shift();

        return data;
      } catch (err) {
        console.error(err);
        return undefined;
      }
    },

    renderer: string
  ): Promise<[number, number, string, string | undefined] | []> => {
    debug?.('queryBenchmarks', { renderer });

    renderer = renderer
      .toLowerCase()
      // Strip off ANGLE() - for example:
      // 'ANGLE (NVIDIA TITAN Xp)' becomes 'NVIDIA TITAN Xp'':
      .replace(/angle \((.+)\)*$/, '$1')
      // Strip off [number]gb & strip off direct3d and after - for example:
      // 'Radeon (TM) RX 470 Series Direct3D11 vs_5_0 ps_5_0' becomes
      // 'Radeon (TM) RX 470 Series'
      .replace(/\s+([0-9]+gb|direct3d.+$)|\(r\)| \([^\)]+\)$/g, '');

    debug?.('queryBenchmarks - renderer cleaned to', { renderer });

    const types = isMobile
      ? ['adreno', 'apple', 'mali-t', 'mali', 'nvidia', 'powervr']
      : ['intel', 'amd', 'radeon', 'nvidia', 'geforce'];

    let type: string | undefined;

    for (let i = 0; i < types.length; i++) {
      const typesType = types[i];

      if (renderer.indexOf(typesType) > -1) {
        type = typesType;
        break;
      }
    }

    if (!type) {
      return [];
    }

    debug?.('queryBenchmarks - found type:', { type });

    const benchmarkFile = `${isMobile ? 'm' : 'd'}-${type}.json`;

    const benchmark: Promise<TModelEntry[] | undefined> = (queryCache[
      benchmarkFile
    ] = queryCache[benchmarkFile] || loadBenchmarks(benchmarkFile));

    const benchmarks = await benchmark;

    if (!benchmarks) {
      return [];
    }

    const version = getGPUVersion(renderer);

    const isApple = type === 'apple';

    let matched: TModelEntry[] = benchmarks.filter(
      ([, modelVersion]): boolean => modelVersion === version
    );

    debug?.(
      `found ${matched.length} matching entries using version '${version}':`,

      matched.map(([model]): string => model)
    );

    // If nothing matched, try comparing model names:
    if (!matched.length) {
      matched = benchmarks.filter(
        ([model]): boolean => model.indexOf(renderer) > -1
      );

      debug?.(
        `found ${matched.length} matching entries comparing model names`,
        {
          matched,
        }
      );
    }

    const count = matched.length;

    if (count === 0) {
      return [];
    }

    // eslint-disable-next-line prefer-const
    let [gpu, , , fpsesByPixelCount] =
      count > 1
        ? matched
            .map(
              (match): readonly [TModelEntry, number] =>
                [match, leven(renderer, match[MODEL_INDEX])] as const
            )
            .sort(([, a], [, b]): number => a - b)[0][MODEL_INDEX]
        : matched[0];

    debug?.(
      `${renderer} matched closest to ${gpu} with the following screen sizes`,
      JSON.stringify(fpsesByPixelCount)
    );

    let minDistance = Number.MAX_VALUE;
    let closest: [number, number, number, string];
    const { devicePixelRatio } = window;
    const pixelCount =
      screenSize.width *
      devicePixelRatio *
      (screenSize.height * devicePixelRatio);

    if (isApple) {
      fpsesByPixelCount = fpsesByPixelCount.filter(
        ([, , , device]): boolean =>
          device.indexOf(isIpad ? 'ipad' : 'iphone') > -1
      );
    }

    for (let i = 0; i < fpsesByPixelCount.length; i++) {
      const match = fpsesByPixelCount[i];
      const [width, height] = match;
      const entryPixelCount = width * height;
      const distance = Math.abs(pixelCount - entryPixelCount);

      if (distance < minDistance) {
        minDistance = distance;
        closest = match;
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [, , fps, device] = closest!;

    return [minDistance, fps, gpu, device];
  };

  const toResult = (
    tier: number,
    type: TTierType,
    fps?: number,
    gpu?: string,
    device?: string
  ): TTierResult => ({
    device,
    fps,
    gpu,
    isMobile,
    tier,
    type,
  });

  let renderers: string[];
  const fallback = toResult(1, 'FALLBACK');

  if (!renderer) {
    const gl =
      glContext ||
      getWebGLContext(deviceInfo?.isSafari12, failIfMajorPerformanceCaveat);

    if (!gl) {
      return toResult(0, 'WEBGL_UNSUPPORTED');
    }

    const debugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

    if (debugRendererInfo) {
      renderer = gl
        .getParameter(debugRendererInfo.UNMASKED_RENDERER_WEBGL)
        .toLowerCase();
    }

    if (!renderer) {
      return fallback;
    }

    renderers = deobfuscateRenderer(gl, renderer, isMobile);
  } else {
    renderers = [renderer];
  }

  const results = await Promise.all(
    renderers.map(
      (
        renderer: string
      ): Promise<[number, number, string, string | undefined] | []> =>
        queryBenchmarks(loadBenchmarks, renderer)
    )
  );

  const result =
    results.length === 1
      ? results[0]
      : results.sort(
          ([aDis = Number.MAX_VALUE], [bDis = Number.MAX_VALUE]): number =>
            aDis - bDis
        )[0];

  if (result.length === 0) {
    return fallback;
  }

  const [, fps, model, device] = result;

  if (fps === -1) {
    return toResult(0, 'BLACKLISTED', fps, model, device);
  }

  const tiers = isMobile ? mobileTiers : desktopTiers;
  let tier = 0;

  for (let i = 0; i < tiers.length; i++) {
    if (fps >= tiers[i]) {
      tier = i;
    }
  }

  return toResult(tier, 'BENCHMARK', fps, model, device);
};
