/**
 * Playground 组件注册表 —— 侧栏分类树 + 路由映射
 * demo 全部引用组件库内 demo/basic.vue（吃自己狗粮）
 *
 * 文案列全部入册（locales/registry-{zh,en}.ts），registry 为
 * computed 随站点词包翻转（useSiteI18n 模块单例，与顶部栏 lang 同源）；
 * 结构列（组序/条目序/demo 引用名/组件名/props 代码值）走生成册 registry-struct.ts，
 * 本文件零可见文案。
 */
import { computed, type Component } from 'vue'
import { siteLocale } from './useSiteI18n'
import { STRUCT } from './locales/registry-struct'
import { registryZh, type RegistryLocale } from './locales/registry-zh'
import { registryEn } from './locales/registry-en'

export interface RegistryItem {
  key: string
  title: string
  component: string
  desc: string
  demo: Component
  /** demo/basic.vue 的原始源码（复制按钮用） */
  source?: string
  props?: string[][]
  events?: string[][]
}

export interface RegistryGroup {
  name: string
  items: RegistryItem[]
}

// —— 批量引入 demo（102 组件 demo/basic.vue，占位 demo 见下方 cpDemo/tpDemo） ——
import btn from '../../aero-vue/src/components/button/demo/basic.vue'
import btnGroup from '../../aero-vue/src/components/button-group/demo/basic.vue'
import icon from '../../aero-vue/src/components/icon/demo/basic.vue'
import iconBtn from '../../aero-vue/src/components/icon-button/demo/basic.vue'
import link from '../../aero-vue/src/components/link/demo/basic.vue'
import typography from '../../aero-vue/src/components/typography/demo/basic.vue'
import divider from '../../aero-vue/src/components/divider/demo/basic.vue'
import space from '../../aero-vue/src/components/space/demo/basic.vue'
import scrollbar from '../../aero-vue/src/components/scrollbar/demo/basic.vue'
import grid from '../../aero-vue/src/components/grid/demo/basic.vue'
import layout from '../../aero-vue/src/components/layout/demo/basic.vue'
import themeSwitch from '../../aero-vue/src/components/theme-switch/demo/basic.vue'

import input from '../../aero-vue/src/components/input/demo/basic.vue'
import textarea from '../../aero-vue/src/components/textarea/demo/basic.vue'
import inputNumber from '../../aero-vue/src/components/input-number/demo/basic.vue'
import inputTag from '../../aero-vue/src/components/input-tag/demo/basic.vue'
import search from '../../aero-vue/src/components/search/demo/basic.vue'
import select from '../../aero-vue/src/components/select/demo/basic.vue'
import cascader from '../../aero-vue/src/components/cascader/demo/basic.vue'
import treeSelect from '../../aero-vue/src/components/tree-select/demo/basic.vue'
import datePicker from '../../aero-vue/src/components/date-picker/demo/basic.vue'
import timePicker from '../../aero-vue/src/components/time-picker/demo/basic.vue'
import checkbox from '../../aero-vue/src/components/checkbox/demo/basic.vue'
import radio from '../../aero-vue/src/components/radio/demo/basic.vue'
import switchD from '../../aero-vue/src/components/switch/demo/basic.vue'
import slider from '../../aero-vue/src/components/slider/demo/basic.vue'
import rate from '../../aero-vue/src/components/rate/demo/basic.vue'
import colorPicker from '../../aero-vue/src/components/color-picker/demo/basic.vue'
import upload from '../../aero-vue/src/components/upload/demo/basic.vue'
import transfer from '../../aero-vue/src/components/transfer/demo/basic.vue'
import autocomplete from '../../aero-vue/src/components/autocomplete/demo/basic.vue'
import mention from '../../aero-vue/src/components/mention/demo/basic.vue'
import otp from '../../aero-vue/src/components/otp/demo/basic.vue'
import form from '../../aero-vue/src/components/form/demo/basic.vue'

import table from '../../aero-vue/src/components/table/demo/basic.vue'
import tree from '../../aero-vue/src/components/tree/demo/basic.vue'
import timeline from '../../aero-vue/src/components/timeline/demo/basic.vue'
import tag from '../../aero-vue/src/components/tag/demo/basic.vue'
import badge from '../../aero-vue/src/components/badge/demo/basic.vue'
import avatar from '../../aero-vue/src/components/avatar/demo/basic.vue'
import cropper from '../../aero-vue/src/components/cropper/demo/basic.vue'
import avatarGroup from '../../aero-vue/src/components/avatar-group/demo/basic.vue'
import card from '../../aero-vue/src/components/card/demo/basic.vue'
import carousel from '../../aero-vue/src/components/carousel/demo/basic.vue'
import collapse from '../../aero-vue/src/components/collapse/demo/basic.vue'
import descriptions from '../../aero-vue/src/components/descriptions/demo/basic.vue'
import empty from '../../aero-vue/src/components/empty/demo/basic.vue'
import image from '../../aero-vue/src/components/image/demo/basic.vue'
import imageViewer from '../../aero-vue/src/components/image-viewer/demo/basic.vue'
import pagination from '../../aero-vue/src/components/pagination/demo/basic.vue'
import progress from '../../aero-vue/src/components/progress/demo/basic.vue'
import ringProgress from '../../aero-vue/src/components/ring-progress/demo/basic.vue'
import result from '../../aero-vue/src/components/result/demo/basic.vue'
import segmented from '../../aero-vue/src/components/segmented/demo/basic.vue'
import skeleton from '../../aero-vue/src/components/skeleton/demo/basic.vue'
import spinner from '../../aero-vue/src/components/spinner/demo/basic.vue'
import statistic from '../../aero-vue/src/components/statistic/demo/basic.vue'
import qrcode from '../../aero-vue/src/components/qrcode/demo/basic.vue'
import watermark from '../../aero-vue/src/components/watermark/demo/basic.vue'
import terminal from '../../aero-vue/src/components/terminal/demo/basic.vue'
import codeBlock from '../../aero-vue/src/components/code-block/demo/basic.vue'

import menu from '../../aero-vue/src/components/menu/demo/basic.vue'
import tabs from '../../aero-vue/src/components/tabs/demo/basic.vue'
import breadcrumb from '../../aero-vue/src/components/breadcrumb/demo/basic.vue'
import dropdown from '../../aero-vue/src/components/dropdown/demo/basic.vue'
import steps from '../../aero-vue/src/components/steps/demo/basic.vue'
import pageHeader from '../../aero-vue/src/components/page-header/demo/basic.vue'
import anchor from '../../aero-vue/src/components/anchor/demo/basic.vue'
import affix from '../../aero-vue/src/components/affix/demo/basic.vue'
import backTop from '../../aero-vue/src/components/back-top/demo/basic.vue'
import tour from '../../aero-vue/src/components/tour/demo/basic.vue'

import dialog from '../../aero-vue/src/components/dialog/demo/basic.vue'
import drawer from '../../aero-vue/src/components/drawer/demo/basic.vue'
import messageBox from '../../aero-vue/src/components/message-box/demo/basic.vue'
import notification from '../../aero-vue/src/components/notification/demo/basic.vue'
import alert from '../../aero-vue/src/components/alert/demo/basic.vue'
import loading from '../../aero-vue/src/components/loading/demo/basic.vue'
import popover from '../../aero-vue/src/components/popover/demo/basic.vue'
import popconfirm from '../../aero-vue/src/components/popconfirm/demo/basic.vue'
import tooltip from '../../aero-vue/src/components/tooltip/demo/basic.vue'
import toast from '../../aero-vue/src/components/toast/demo/basic.vue'
import chip from '../../aero-vue/src/components/chip/demo/basic.vue'
import announce from '../../aero-vue/src/components/announce/demo/basic.vue'

// K6/config-provider / theme-provider 改吃库内 demo（同源约定；
// 原 cpDemo/tpDemo 占位——cpDemo 空壳 badge 无文案，tpDemo 挂载即强制全局 violet——已删）
import configProvider from '../../aero-vue/src/components/config-provider/demo/basic.vue'
import themeProvider from '../../aero-vue/src/components/theme-provider/demo/basic.vue'

import motionPresets from '../../aero-vue/src/components/motion-presets/demo/basic.vue'
import dotField from '../../aero-vue/src/components/dot-field/demo/basic.vue'
import iridescentThreads from '../../aero-vue/src/components/iridescent-threads/demo/basic.vue'
import parallaxBox from '../../aero-vue/src/components/parallax-box/demo/basic.vue'
import marqueeDemo from '../../aero-vue/src/components/marquee/demo/basic.vue'
import partyFx from '../../aero-vue/src/components/party-fx/demo/basic.vue'

// —— 移动端组件 demo ——
import phoneDemo from '../../aero-vue/src/components/phone/demo/basic.vue'
import mCarDemo from '../../aero-vue/src/components/mobile-carousel/demo/basic.vue'
import mStatDemo from '../../aero-vue/src/components/mobile-stat-card/demo/basic.vue'
import mTabDemo from '../../aero-vue/src/components/mobile-tab-bar/demo/basic.vue'
import deckDemo from '../../aero-vue/src/components/swipe-deck/demo/basic.vue'
import actDemo from '../../aero-vue/src/components/action-buttons/demo/basic.vue'
import slideGoDemo from '../../aero-vue/src/components/slide-go/demo/basic.vue'
import sortDemo from '../../aero-vue/src/components/sort-list/demo/basic.vue'
import sheetDemo from '../../aero-vue/src/components/bottom-sheet/demo/basic.vue'
import knobDemo from '../../aero-vue/src/components/knob/demo/basic.vue'
import ptrDemo from '../../aero-vue/src/components/pull-to-refresh/demo/basic.vue'

// —— demo 源码文本（复制按钮用） ——
// 注意：不能用 import.meta.glob(query:'?raw')——Vite 5 中与普通 import 同一 .vue 文件
// 会互相污染（normal 产物被 raw 文本覆盖，实测 84 个 chunk 全变源码字符串）。
// 改用构建前脚本生成的纯文本字典（scripts/gen-demo-sources.mjs），与组件编译完全隔离。
import demoSources from './demo-sources.generated'

// key → demo 组件引用（与 STRUCT items 键序一一对应）
const DEMO: Record<string, Component> = {  button: btn,
  'button-group': btnGroup,
  'action-buttons': actDemo,
  icon,
  'icon-button': iconBtn,
  link,
  typography,
  divider,
  space,
  scrollbar,
  grid,
  layout,
  'theme-switch': themeSwitch,
  input,
  textarea,
  'input-number': inputNumber,
  'input-tag': inputTag,
  search,
  select,
  cascader,
  'tree-select': treeSelect,
  'date-picker': datePicker,
  'time-picker': timePicker,
  checkbox,
  radio,
  switch: switchD,
  slider,
  rate,
  'color-picker': colorPicker,
  upload,
  transfer,
  autocomplete,
  mention,
  otp,
  form,
  table,
  tree,
  timeline,
  tag,
  badge,
  avatar,
  'avatar-group': avatarGroup,
  cropper,
  card,
  carousel,
  collapse,
  descriptions,
  empty,
  image,
  'image-viewer': imageViewer,
  pagination,
  progress,
  'ring-progress': ringProgress,
  result,
  segmented,
  skeleton,
  spinner,
  statistic,
  qrcode,
  watermark,
  terminal,
  'code-block': codeBlock,
  menu,
  tabs,
  breadcrumb,
  dropdown,
  steps,
  'page-header': pageHeader,
  anchor,
  affix,
  'back-top': backTop,
  tour,
  dialog,
  drawer,
  'message-box': messageBox,
  notification,
  alert,
  loading,
  popover,
  popconfirm,
  tooltip,
  toast,
  chip,
  announce,
  'motion-presets': motionPresets,
  'dot-field': dotField,
  'iridescent-threads': iridescentThreads,
  'parallax-box': parallaxBox,
  marquee: marqueeDemo,
  'party-fx': partyFx,
  phone: phoneDemo,
  'mobile-carousel': mCarDemo,
  'mobile-stat-card': mStatDemo,
  'mobile-tab-bar': mTabDemo,
  'swipe-deck': deckDemo,
  'slide-go': slideGoDemo,
  'sort-list': sortDemo,
  'bottom-sheet': sheetDemo,
  knob: knobDemo,
  'pull-to-refresh': ptrDemo,
  'config-provider': configProvider,
  'theme-provider': themeProvider,
}

function build(locale: 'zh-cn' | 'en-us'): RegistryGroup[] {
  const L: RegistryLocale = locale === 'en-us' ? registryEn : registryZh
  return STRUCT.map((g, gi) => ({
    name: L.groups[gi] ?? '',
    items: g.items.map((it) => {
      const d = L.items[it.key]
      return {
        key: it.key,
        title: d?.title ?? it.key,
        component: it.component,
        desc: d?.desc ?? '',
        demo: DEMO[it.key],
        props: it.props?.map((p) => [p[0], p[1], p[2], d?.props?.[p[0]] ?? '']),
        events: it.events?.map((e) => [e[0], e[1], d?.events?.[e[0]] ?? '']),
      }
    }),
  }))
}

export const registry = computed<RegistryGroup[]>(() => {
  return build(siteLocale.locale)
})

// 源码获取器（同源约定：复制/查看均返回 demo 源文件全文，唯一变换 = import 重写 aero-vue）：
// - loadDemoUsage(key)：「复制此代码」用，返回完整 SFC（import 已重写 aero-vue）
// - loadDemoSource(key)：「查看此代码」用，返回同值完整 SFC
export function loadDemoUsage(key: string): string {
  return demoSources[key]?.usage ?? ''
}
export function loadDemoSource(key: string): string {
  return demoSources[key]?.source ?? ''
}

export default registry
