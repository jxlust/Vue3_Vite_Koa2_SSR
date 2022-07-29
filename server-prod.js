/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';
import Koa from 'koa';
import sendFile from 'koa-send';
import {render} from './dist/server/entry-server.js';

const __dirname = path.resolve();
const resolve = (p) => path.resolve(__dirname, p);

//同步读取文件
const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');
const manifest = fs.readFileSync(resolve('dist/client/ssr-manifest.json'),'utf-8');
const clientRoot = resolve('dist/client');

(async () => {
  const app = new Koa();

  app.use(async (ctx) => {
    // 请求的是静态资源 或者/favicon.ico
    if (ctx.path.startsWith('/assets')) {
      await sendFile(ctx, ctx.path, { root: clientRoot });
      return;
    }

    const [renderedHtml, state, preloadLinks] = await render(ctx, manifest);

    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--pinia-state-->', state)
      .replace('<!--app-html-->', renderedHtml);

    ctx.type = 'text/html';
    ctx.body = html;
  });

  app.listen(8080, () => console.log('started server on http://localhost:8080'));
})();
