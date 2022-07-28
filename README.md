## Vue3 + Vite + Koa2 + Ts + SSR

### vite 创建项目

```shell
pnpm create vite koa2-ssr-vue3 --template vue-ts
```

### 依赖安装

开发依赖：

```shell
#基本
pnpm i -D @vitejs/plugin-vue typescript vite vue-tsc @types/koa
#代码规范
pnpm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue  @typescript-eslint/eslint-plugin @typescript-eslint/parser
#提交规范
pnpm i -D lint-staged husky commitizen commitlint-config-cz cz-conventional-changelog cz-customizable @commitlint/cli @commitlint/config-conventional

```
依赖

```shell
pnpm i -S @koa/router @vue/server-renderer @vueuse/core koa koa-connect koa-send pinia vue vue-router
```

### 命令配置

```json
  "scripts": {
    "dev": "node server-dev.js",
    "serve": "node server-prod.js",
    "build": "pnpm build:client && pnpm build:server",
    "build:client": "vite build --ssrManifest --outDir dist/client",
    "build:server": "vite build --ssr src/entry-server --outDir dist/server",
    "preview": "vite preview",
    "eslint:comment": "使用 ESLint 检查并自动修复 src 目录下所有扩展名为 .js 和 .vue 的文件",
    "eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    "prettier:comment": "自动格式化当前目录下的所有文件",
    "prettier": "prettier --write",
    "commit:comment": "引导设置规范化的提交信息",
    "commit": "git-cz"
  }
```


>参考网站
>*https://github.com/jeddygong/vite-templates/tree/master/koa2-ssr-vite-vue3-ts-pinia*