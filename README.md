# Detect GPU

[![npm version](https://badge.fury.io/js/detect-gpu.svg)](https://badge.fury.io/js/detect-gpu)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/detect-gpu/dist/detect-gpu.umd.js?compression=gzip)](https://unpkg.com/detect-gpu)
[![install size](https://packagephobia.now.sh/badge?p=detect-gpu)](https://packagephobia.now.sh/result?p=detect-gpu)

Classify GPU's based on their benchmark score in order to provide an adaptive experience.

## Installation

By default we use the [UNPKG](https://unpkg.com) CDN to host the benchmark data. If you would like to serve the benchmark data yourself download the required benchmarking data from [benchmarks.tar.gz](https://github.com/TimvanScherpenzeel/detect-gpu/raw/master/benchmarks.tar.gz) and serve it from a public directory.

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
 $ npm install detect-gpu
```

## Usage

```ts
import { getGPUTier } from 'detect-gpu';

(async () => {
  const gpuTier = await getGPUTier({
    benchmarksURL?: string; // (Default, "https://unpkg.com/detect-gpu@${PKG_VERSION}/dist/benchmarks") Provide location of where to access benchmark data
    failIfMajorPerformanceCaveat?: boolean; // (Default, true) Fail to detect if the WebGL implementation determines the performance would be dramatically lower than the equivalent OpenGL
    glContext?: WebGLRenderingContext | WebGL2RenderingContext; // (Default, undefined) Optionally pass in a WebGL context to avoid creating a temporary one internally
    desktopTiers?: number[]; // (Default, [0, 15, 30, 60]) Framerate per tier
    mobileTiers?: number[]; // (Default, [0, 15, 30, 60]) Framerate per tier
    override?: { // (Default, false) Override specific functionality, useful for development
      renderer?: string; // Manually override reported GPU renderer string
      isIpad?: boolean; // Manually report device as being an iPad
      isMobile?: boolean; // Manually report device as being a mobile device
      screenSize?: { width: number; height: number }; // Manually adjust reported screenSize
      loadBenchmarks?: (file: string) => Promise<TModelEntry[] | undefined>; // Optionally modify method for loading benchmark data
    };
  })

  // Example output:
  // {
  //   "tier": 1,
  //   "isMobile": false,
  //   "type": "BENCHMARK",
  //   "fps": 21,
  //   "gpu": "intel iris graphics 6100"
  // }
})();
```

`detect-gpu` uses rendering benchmark scores (framerate, normalized by resolution) in order to determine what tier should be assigned to the user's GPU. If no `WebGLContext` can be created, the GPU is blocklisted or the GPU has reported to render on less than `15 fps` `tier: 0` is assigned. One should provide a fallback to a non-WebGL experience.

Based on the reported `fps` the GPU is then classified into either `tier: 1 (> 15 fps)`, `tier: 2 (> 30 fps)` or `tier: 3 (> 60 fps)`. The higher the tier the more graphically intensive workload you can offer to the user.

## Licence

My work is released under the [MIT license](https://raw.githubusercontent.com/TimvanScherpenzeel/detect-gpu/master/LICENSE).

`detect-gpu` uses both mobile and desktop benchmarking scores from [https://gfxbench.com](https://gfxbench.com).
