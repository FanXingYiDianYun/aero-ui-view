import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const uiSrc = resolve(dirname, '../aero-vue/src')
// 单一数据源：版本真值 = 本仓 package.json version（杜绝发版再漂移）
const pkgVersion = JSON.parse(readFileSync(resolve(dirname, 'package.json'), 'utf8')).version as string

// 「复制源码」功能说明：不要用 import.meta.glob(query:'?raw') 读 demo/basic.vue ——
// Vite 5 中会与普通 import 互相污染（normal 产物被 raw 文本覆盖）。
// 改由 scripts/gen-demo-sources.mjs 构建前生成 src/demo-sources.generated.ts 字典。

export default defineConfig({
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(pkgVersion),
  },
  resolve: {
    alias: {
      'aero-vue': resolve(uiSrc, 'index.ts'),
      'aero-vue/styles': resolve(uiSrc, 'styles/tokens.scss'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 组件 SFC 依赖注入 token；tokens.scss 本身不再额外注入（避免模块循环）
        additionalData: `@use "${resolve(uiSrc, 'styles/tokens.scss').replace(/\\/g, '/')}" as *;`,
      },
    },
  },
  // O2：库内置 webfont（aero-vue/src/styles/fonts/*.woff2）位于演示站 root 之外，
  // dev server @fs 默认 403；放行库 styles 目录（仅 dev 期 dev 预览用，构建产物不受影响——
  // 库 build 侧 url() 已 base64 内联）
  server: {
    fs: {
      allow: [resolve(dirname, '../..')],
    },
  },
})
