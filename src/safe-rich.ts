/**
 * safeRich —— 站点副标题/说明段最小白名单富文本通道（共用）。
 *
 * XSS 论证（P2，写入 REPORT）：
 *  - 内容源 = 演示站词包（locales/zh-cn.ts · en-us.ts，git 管控、仅库内维护者写入），
 *    非用户输入、无网络输入面 → 白名单通道足矣，引 DOMPurify 属过度工程。
 *  - 机制 = 先整体转义（& < > 全部惰性化），再仅还原白名单四标签的尖括号形态；
 *    任何非白名单标签（script/style/iframe/a 等）与事件属性（on*）在此机制下不可能复活。
 *  - CJK 红线不受影响：词包在 locales/ 豁免目录内，标签为 ASCII。
 * 配额（W4 规则制）：每条副标题至多 1 个 <mark>（仅该组件最核心特性词）；
 * 按键/快捷键 → <kbd>；组件名/标识符/代码值/单位 → <code>；轻强调 → <em>。
 */
/** 白名单四标签（顺序无关；闭合标签同白名单） */
const ALLOWED = 'kbd|code|mark|em'

export function safeRich(src: string): string {
  if (!src) return ''
  // ① 惰性化：全量转义（词包值内的 & < > 一律先变实体）
  let s = src.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  // ② 仅还原白名单四标签的原始形态（非白名单标签的尖括号永远停留在 &lt;/&gt;，渲染为字面文本）
  s = s.replace(/&lt;(\/?)(kbd|code|mark|em)&gt;/g, (_m, close: string, tag: string) => `<${close}${tag}>`)
  return s
}
