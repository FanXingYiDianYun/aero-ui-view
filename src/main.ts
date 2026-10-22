import { createApp } from 'vue'
import AeroUI from 'aero-vue'
import App from './App.vue'
import './style.scss'
import { applyNavBreakpoint } from './nav-breakpoint'

// 导航断点单一权威（matchMedia 驱动 html.pg-nav-mobile 根类，
// 侧栏隐藏与汉堡出现同源联动）——mount 前初始化，首帧即正确
applyNavBreakpoint()

createApp(App).use(AeroUI as any).mount('#app')
