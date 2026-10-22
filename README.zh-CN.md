<div align="center">

<img src="assets/banner.svg" alt="Aero UI" width="720">

[English](https://github.com/FanXingYiDianYun/aero-ui-view/blob/main/README.md) | 简体中文

**Aero UI 组件库官方演示站** —— 102 个 Aero* 组件的在线预览、交互文档与 AI 安装指南

[在线演示](https://FanXingYiDianYun.github.io/aero-ui-view/) · [组件库 aero-vue](https://github.com/FanXingYiDianYun/aero-vue/blob/main/README.zh-CN.md) · [npm](https://www.npmjs.com/package/aero-vue)
</div>

---
## ✨ 组件预览

<img src="assets/button.gif" alt="AeroUI 组件交互演示" width="720">

## 🚀 快速使用

当前组件库版本 `1.0.0`。安装：

```bash
npm i aero-vue
```

```js
import 'aero-vue/styles'   // 与 lib README 同款写法（以 package.json exports 为准）
```

组件按需引入示例（与 lib README 快速上手节同源）：

```vue
<!-- App.vue -->
<script setup lang="ts">
import { AeroButton } from 'aero-vue'
</script>
<template>
  <AeroButton variant="primary">你好，平流层</AeroButton>
</template>
```

## 🧭 演示站包含

- 102 组件在线预览（暗色主题切换）
- AI Skill 安装指南（在线演示站 #/ai-guide 页）
- 组件搜索 / Props / Events 文档

## 🛠 本地开发

```bash
git clone https://github.com/FanXingYiDianYun/aero-ui-view
pnpm install
pnpm dev
```

## License

MIT
