/// <reference types="vite/client" />
// 版本单一数据源 = vite.config.ts define 注入（读本仓 package.json version，杜绝发版漂移）
declare const __APP_VERSION__: string
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
