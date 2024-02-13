import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DsL7XQu-.mjs';
import * as serverEntrypointModule from '@astrojs/vercel/serverless/entrypoint';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DxoXy_0q.mjs');
const _page1 = () => import('./chunks/index_BX8LMwL7.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3ebaef1f-8f60-49e7-838b-88bedced8f4e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
