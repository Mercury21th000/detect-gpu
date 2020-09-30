"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebGLUnmaskedRenderer = void 0;
exports.getWebGLUnmaskedRenderer = (gl) => {
    const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return glExtensionDebugRendererInfo
        ? gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
        : undefined;
};
//# sourceMappingURL=getWebGLUnmaskedRenderer.js.map