#!/usr/bin/env node
// overflow-sweep —— 双视口程序化溢出审计（owner G 轮验收体系）
// 协议：桌面 1440×900 + 移动 390×844（DPR 3），本轮起所有 MCP 走查必须双视口
//
// 实现方式：直接驱动 CloakBrowser MCP 的浏览器实例（不另装 playwright-core）：
//   1. 本脚本输出「检测指令 JSON」（每个视口 × 每页要跑的 evaluate 体），
//      写 overflow-sweep plan（仓外归档区稳定路径）
//   2. 经 MCP browser_evaluate 逐页执行，结果回写 overflow-sweep-results.json
//   3. 本脚本 `--report <results.json>` 汇总：违规清单 + 归零判定（白名单除外）
// 收口条件：双视口全站归零（白名单除外）
//
// 用法：
//   node scripts/overflow-sweep.mjs              # 生成 plan（供 MCP 执行）
//   node scripts/overflow-sweep.mjs --report overflow-sweep-results.json  # 汇总判定

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
// T 轮拓扑：here = aero-ui-view/scripts → 上两级 = 主仓根（report/state 在根下）
const ROOT = join(here, '..', '..')

// 站点页面 key（playground hash 路由）—— 与 registry 101 组件一一对应
const KEYS = [
  'button', 'button-group', 'action-buttons', 'icon', 'icon-button', 'link', 'typography',
  'divider', 'space', 'scrollbar', 'grid', 'layout', 'theme-switch',
  'input', 'textarea', 'input-number', 'input-tag', 'search', 'select', 'cascader',
  'tree-select', 'date-picker', 'time-picker', 'checkbox', 'radio', 'switch', 'slider',
  'rate', 'color-picker', 'upload', 'transfer', 'autocomplete', 'mention', 'otp', 'form',
  'table', 'tree', 'timeline', 'tag', 'badge', 'avatar', 'avatar-group', 'cropper',
  'card', 'carousel', 'collapse', 'descriptions', 'empty', 'image', 'image-viewer',
  'pagination', 'progress', 'ring-progress', 'result', 'segmented', 'skeleton', 'spinner',
  'statistic', 'qrcode', 'watermark', 'terminal', 'code-block',
  'menu', 'tabs', 'breadcrumb', 'dropdown', 'steps', 'page-header', 'anchor', 'affix',
  'back-top', 'tour',
  'dialog', 'drawer', 'message-box', 'notification', 'alert', 'loading', 'popover',
  'popconfirm', 'tooltip', 'toast', 'announce', 'chip',
  'config-provider', 'theme-provider', 'motion-presets', 'dot-field', 'iridescent-threads',
  'parallax-box', 'marquee', 'party-fx',
  'phone', 'mobile-carousel', 'mobile-stat-card', 'mobile-tab-bar', 'swipe-deck',
  'slide-go', 'sort-list', 'bottom-sheet', 'knob', 'pull-to-refresh',
]

// 白名单：有意出界的元素/子系统（登记在册，非违例）
// - toast/notification：body portal，通知类全库最高层
// - announce track：跑马灯复制段被裁切（父 __in overflow:hidden），滚动出界是设计行为
// - code-block 代码行：pre overflow-x:auto 可横滚容器，长行超出视口属「有意」横滚，非布局崩溃
// - pg-api 表格：外层 .pg-api__scroll overflow-x:auto 有意横滚，内部 TABLE/THEAD/TR/TD 越界为正常滚动内容
// - aero-table 组件本体（table demo）：演示用宽表在 .aero-table__scroll{overflow-x:auto} 内有意横滚，
//   裸 table/tr/th 后代 rect 出视口属设计行为 → 祖先链豁免（见 EVAL_BODY closest 检查）
// - marquee/carousel/mcar 子系统：hidden viewport 内复制段/非当前 slide 被 translateX 推出，溢出即设计
const WHITELIST_CLASSES = [
  'aero-toasts', 'aero-noti-host', 'aero-toast', 'aero-noti',
  'aero-announce__track', 'aero-cw__line', 'aero-cw__lc',
  'tk-s', 'tk-k', 'tk-k2', 'tk-c', 'tk-f', 'tk-n', 'tk-p', 'tk-u', 'tk-ok', 'tk-v',
  'pg-api__scroll',
  // H6.2：跑马灯内层（track 的父级裁切容器）——其 scrollWidth>clientWidth 是复制段设计行为
  'aero-announce__in',
  // carousel：track flex 内非当前 slide 被 translateX 推出视口（overflow:hidden 裁切）
  'aero-carousel__track', 'aero-carousel__slide',
  'aero-carousel__ring', 'aero-carousel__en', 'aero-carousel__zh', 'aero-carousel__chip',
  // H6.2：跑马灯子系统——viewport overflow:hidden，复制段 track/item 溢出属设计行为
  'aero-mq__viewport', 'aero-mq__track', 'aero-mq__item',
  // H6.2：移动端轮播（phone/mobile-carousel demo 复用）——与 aero-carousel 同构，vp/slide/ring/en 有意溢出
  'aero-mcar__vp', 'aero-mcar__slide', 'aero-mcar__ring', 'aero-mcar__en', 'aero-mcar__zh', 'aero-mcar__chip',
  // H6.2：桌面 carousel 可视区容器（track 的 hidden 父级），内部溢出为裁切设计
  'aero-carousel__vp',
  // J5：menu demo 水平菜单（EN 长 label 有意横滚，overflow-x:auto 容器）——内部横滚非布局违规
  'menu-demo__h',
]

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, dpr: 1 },
  { name: 'mobile', width: 390, height: 844, dpr: 3 },
]

// —— evaluate 体（MCP browser_evaluate 直接执行；纯函数，无外部依赖）——
// L2 增强：cardIncl —— 白名单横滚子系统「根元素」是否被最近 demo 卡（.pg-stage，
// 实际 demo 容器类名）完整包含。内部 slide/ring 溢出由白名单覆盖（设计行为），
// 但根元素（.aero-mcar 等）越出 demo 卡片右缘 = 布局违规（L1 回归的机器盲区：
// 既有 rect 越视口检查在 .pg-main overflow:hidden/视口收窄时盲区、innerOut 只查
// 自身 scrollWidth，均抓不到「子系统根被 demo 卡裁切」）。
const CARD_ROOTS = ['.aero-carousel', '.aero-mcar', '.aero-mq']
const EVAL_BODY = `(function () {
  const W = window.innerWidth
  const dw = document.documentElement
  const scrollOverflow = dw.scrollWidth > W + 1
  const scroller = document.querySelector('.pg-main')
  const scrollerOverflow = scroller ? scroller.scrollWidth > scroller.clientWidth + 1 : false
  const wl = ${JSON.stringify(WHITELIST_CLASSES)}
  const all = [document.body, ...document.body.querySelectorAll('*')]
  const out = []
  // H6.2：hidden 容器内部溢出收集（独立于 rect-out-of-viewport 检测，见文末 innerOut 循环）
  const innerOut = []
  // H6.2：白名单类祖先豁免——侧栏链接等站点 chrome 元素用 text-overflow:ellipsis
  // 有意裁切长标题（设计行为），其内部溢出不计入组件层违规。仅豁免非 demo 的 chrome 类。
  const CHROME_EXEMPT = '.pg-side__link'
  for (const e of all) {
    const cs = getComputedStyle(e)
    if (cs.display === 'none' || cs.visibility === 'hidden') continue
    if (parseFloat(cs.opacity) === 0 && cs.position !== 'fixed') continue
    const r = e.getBoundingClientRect()
    if (r.width === 0 && r.height === 0) continue
    const cls = String(e.className)
    const rightOut = r.right > W + 1
    const leftOut = r.left < -1
    if (!rightOut && !leftOut) continue
    if (wl.some((c) => cls.includes(c))) continue
    if (e.closest('.aero-announce__track')) continue
  // H6.2：白名单类祖先豁免——API 表格裸标签（table/tr/th）位于 .pg-api__scroll 有意横滚容器内，
    // className 为空匹配不到字符串白名单，但祖先含白名单类即属设计行为，非布局违规。
    // 仅对「真滚动容器」类白名单做祖先链检查（toast/announce/carousel 的越界 rect 本身即违规，不豁免）。
    // H6.2：滚动/裁切子系统祖先链豁免——API 表格裸标签、组件库自带横滚表格（.aero-table overflow-x:auto）、
    // marquee/carousel/mcar 轨道等，className 匹配不到白名单字符串但位于有意滚动/裁切容器内，属设计行为。
    if (e.closest('.pg-api__scroll, .aero-carousel__track, .aero-mq__viewport, .aero-mcar__vp, .aero-table, .menu-demo__h')) continue
    // 可横滚容器内的子元素：pre 有 overflow-x:auto 且 scrollWidth>clientWidth → 有意横滚，非违规
    if (e.closest('pre[style*="overflow-x"], pre')) {
      const pre = e.closest('pre')
      if (pre && pre.scrollWidth > pre.clientWidth + 1 && getComputedStyle(pre).overflowX === 'auto') continue
    }
    out.push({
      tag: e.tagName.toLowerCase(),
      cls: cls.slice(0, 60),
      pos: cs.position,
      left: Math.round(r.left), right: Math.round(r.right),
      top: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height),
    })
    if (out.length >= 20) break
  }
  const seen = new Set()
  const uniq = out.filter((v) => {
    const k = v.tag + '|' + v.cls + '|' + v.left + '|' + v.right
    if (seen.has(k)) return false
    seen.add(k); return true
  })
  // H6.2：hidden/clip 容器内部溢出（白名单除外；有意横滚 pre 除外）
  for (const e of all) {
    const cs = getComputedStyle(e)
    if (cs.display === 'none' || cs.visibility === 'hidden') continue
    if (cs.overflowX !== 'hidden' && cs.overflowX !== 'clip') continue
    if (e.scrollWidth <= e.clientWidth + 1) continue
    const cls = String(e.className)
    if (wl.some((c) => cls.includes(c))) continue
    if (e.closest('.aero-announce__track')) continue
    // H6.2：白名单祖先链豁免——hidden 裁切容器若是真滚动子系统内部（API 表/carousel 轨道），
    // 其内容溢出属设计行为。仅对有意横滚类白名单豁免，toast/announce portal 不豁免。
    if (e.closest('.pg-api__scroll, .aero-carousel__track, .aero-mq__viewport, .aero-mcar__vp, .aero-table, .menu-demo__h')) continue
    // H6.2：chrome 元素（侧栏省略链接）豁免——ellipsis 裁切长标题是设计行为，非布局违规
    if (CHROME_EXEMPT && e.matches(CHROME_EXEMPT)) continue
    innerOut.push({ tag: e.tagName.toLowerCase(), cls: cls.slice(0, 60), sw: e.scrollWidth, cw: e.clientWidth })
    if (innerOut.length >= 10) break
  }
  const iSeen = new Set()
  const iUniq = innerOut.filter((v) => {
    const k = v.tag + '|' + v.cls + '|' + v.sw
    if (iSeen.has(k)) return false
    iSeen.add(k); return true
  })
  // L2：白名单横滚子系统根元素必须被最近 demo 卡（.pg-stage）完整包含——
  // 根越卡 = 违规（子系统内部滚动/裁切不受影响，检查只针对根元素本身）。
  const card = document.querySelector('.pg-stage')
  const cardIncl = []
  if (card) {
    const cr = card.getBoundingClientRect()
    const roots = ${JSON.stringify(CARD_ROOTS)}
    for (const s of roots) {
      const el = document.querySelector(s)
      if (!el) continue
      const r = el.getBoundingClientRect()
      const outR = Math.max(r.right - cr.right, 0)
      const outL = Math.max(cr.left - r.left, 0)
      if (outR > 2 || outL > 2) {
        cardIncl.push({ root: s, outR: Math.round(outR * 10) / 10, outL: Math.round(outL * 10) / 10, cardR: Math.round(cr.right) })
      }
    }
  }
  return { scrollOverflow, scrollerOverflow, out: uniq, innerOut: iUniq, cardIncl }
})()`

const argReport = process.argv.includes('--report')
const reportPath = argReport ? process.argv[process.argv.indexOf('--report') + 1] : null

if (argReport) {
  // —— 汇总模式：读 MCP 回写的结果 JSON，输出违规清单 + 归零判定 ——
  const isAbs = (s) => s.startsWith('/')
const raw = readFileSync(isAbs(reportPath) ? reportPath : join(ROOT, 'report', reportPath), 'utf8')
  const res = JSON.parse(raw)
  let total = 0
  const bad = []
  for (const v of VIEWPORTS) {
    const pages = res[v.name] ?? {}
    for (const [key, r] of Object.entries(pages)) {
      // H6.2：innerOut（hidden 容器内部溢出）计入违规总数
      // L2：cardIncl（白名单子系统根越出 demo 卡）计入违规总数
      const n = (r.scrollOverflow ? 1 : 0) + (r.scrollerOverflow ? 1 : 0) + (r.out?.length ?? 0) + (r.innerOut?.length ?? 0) + (r.cardIncl?.length ?? 0)
      if (n) {
        total += n
        bad.push(`  [${v.name}] #/${key} — scrollOverflow=${r.scrollOverflow} scrollerOverflow=${r.scrollerOverflow} 越界元素=${r.out?.length ?? 0} hidden内部溢出=${r.innerOut?.length ?? 0} 子系统根越demo卡=${r.cardIncl?.length ?? 0}`)
        for (const o of r.out ?? []) bad.push(`      ${o.tag}.${o.cls} pos=${o.pos} left=${o.left} right=${o.right}`)
        for (const o of r.innerOut ?? []) bad.push(`      ~${o.tag}.${o.cls} scrollWidth=${o.sw} > clientWidth=${o.cw}`)
        for (const o of r.cardIncl ?? []) bad.push(`      ⌖${o.root} 越demo卡右缘 ${o.outR}px（cardR=${o.cardR}）`)
      }
    }
  }
  console.log('=== overflow-sweep 双视口汇总（白名单除外）===')
  if (total === 0) {
    console.log('全绿：双视口全站零违规')
    process.exit(0)
  }
  console.log(`违规 ${total} 项：`)
  console.log(bad.join('\n'))
  process.exit(1)
}

// —— plan 生成模式 ——
const plan = {
  protocol: '双视口（桌面 1440×900 @dpr1 + 移动 390×844 @dpr3）',
  tool: 'CloakBrowser MCP：browser_resize 切视口 → 逐页 browser_navigate(#/key) + browser_evaluate(EVAL_BODY)',
  whitelistedClasses: WHITELIST_CLASSES,
  viewports: VIEWPORTS,
  keys: KEYS,
  evaluateBody: EVAL_BODY,
  instructions: [
    '1. 对每个视口：browser_resize({width, height})（dpr 由 MCP 视口 DPR 模拟；移动 390×844 设 DPR 3）',
    '2. 对 KEYS 每 key：browser_navigate(`${base}/#/${key}`) + waitFor 250ms + browser_evaluate(EVAL_BODY)',
    '3. 结果按 {desktop: {key: {...}}, mobile: {key: {...}}} 写回 overflow-sweep-results.json',
    '4. node scripts/overflow-sweep.mjs --report overflow-sweep-results.json 汇总判定归零',
  ],
}
const outDir = join(ROOT, 'report')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'overflow-sweep-plan.json'), JSON.stringify(plan, null, 2))
console.log(`plan 已生成：${join(outDir, 'overflow-sweep-plan.json')}`)
console.log(`页面数 ${KEYS.length} × 视口 ${VIEWPORTS.length} = ${KEYS.length * VIEWPORTS.length} 次 evaluate；白名单类 ${WHITELIST_CLASSES.length} 个（toast/notification portal）`)
