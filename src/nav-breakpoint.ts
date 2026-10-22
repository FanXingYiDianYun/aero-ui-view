/**
 * 导航断点单一权威——「侧栏可见 XOR 汉堡可用」两判据的共享常量。
 *
 * 已知：现状侧栏隐藏阈值（App.vue @media 960）与汉堡出现阈值
 * （PgNav.vue @media 768）两个独立数值不同源 → 768<w≤960 真空带侧栏已隐藏但汉堡
 * 未出现 = 无任何导航。
 *
 * 修复：断点收敛到本单一常量 NAV_BREAKPOINT=960；matchMedia 监听经
 * applyNavBreakpoint 驱动 html.pg-nav-mobile 根类（纯 CSS 方案：
 * - App.vue 侧栏隐藏/单列布局规则改挂 html.pg-nav-mobile（同源消费）
 * - PgNav.vue 汉堡出现规则改挂 html.pg-nav-mobile（同源消费）
 * 不变式 = 任意宽度「侧栏可见 XOR 汉堡可用」，两判据同源联动。
 *
 * 引擎限制（本引擎实测）：CSS @media 无法读 var()（var-in-media 整条被忽略，
 * 回退值也不参与求值），故单一权威落 JS 常量 + matchMedia 根类，而非 CSS 变量；
 * 改断点只改本常量一处，根类自动跟值。
 *
 * 硬约束（≤768 与 >1024 现状一个像素不变）：390→挂类、1440→不挂类，与既有
 * @media(768/960) 两端判定完全等价；只允许真空带 (768,960] 内长出汉堡。
 * 本 bug 纯宽度驱动，与 UA 无关（站点代码无 UA 判断）。
 */
export const NAV_BREAKPOINT = 960

export const NAV_MOBILE_CLASS = 'pg-nav-mobile'

let cleanup: (() => void) | null = null

export function applyNavBreakpoint(): void {
  if (cleanup) return // 幂等：路由/重挂载不重复挂监听
  const mq = window.matchMedia(`(max-width: ${NAV_BREAKPOINT}px)`)
  const apply = () => document.documentElement.classList.toggle(NAV_MOBILE_CLASS, mq.matches)
  apply()
  mq.addEventListener('change', apply)
  cleanup = () => {
    mq.removeEventListener('change', apply)
    cleanup = null
  }
}
