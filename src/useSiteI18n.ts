/**
 * 演示站 i18n hook（站点词包）—— 模块级单例，所有消费方共享同一 locale 状态。
 * 与顶部栏 lang 状态同源（localStorage 'aero-pg-lang'）：
 * 切 EN 后整站可见英文（代码示例与 prop 值除外）。
 *
 * 分层：组件文案 = 库词包（aero-vue useLocale，ConfigProvider 注入）；
 *       站点文案 = 本册（siteZhCn/siteEnUs，useSiteI18n 消费）。
 * 规范红线：所有站点文案必须走字典键，禁止模板字符串拼接句子（带参走函数键）。
 */
import { computed, reactive, type ComputedRef, type Ref } from 'vue'
import type { LocaleName } from 'aero-vue'
import { siteZhCn, type SiteMessages } from './locales/zh-cn'
import { siteEnUs } from './locales/en-us'

const STORE = 'aero-pg-lang'
const DEFAULT: LocaleName = 'zh-cn'
const dict: Record<LocaleName, SiteMessages> = { 'zh-cn': siteZhCn, 'en-us': siteEnUs }

function readLang(): LocaleName {
  const v = localStorage.getItem(STORE)
  if (v === 'en-us') return 'en-us'
  // 缺省（或任何非法值）→ 落 zh-cn，并显式写回缺省值，保证后续读路径不再悬空。
  if (v !== 'zh-cn') localStorage.setItem(STORE, DEFAULT)
  return DEFAULT
}

// 模块级单例：App（AeroConfigProvider locale）/ PgNav / PgMobileMenu 共享，切语言整站翻转
export const siteLocale = reactive({ locale: readLang() })

export function useSiteI18n(): {
  locale: Ref<LocaleName>
  messages: ComputedRef<SiteMessages>
  t: ComputedRef<SiteMessages>
  toggle: () => void
  /** 语言下拉直接选（zh-cn/en-us），写存储 + 翻转站点 */
  setLang: (v: LocaleName) => void
  isEn: ComputedRef<boolean>
} {
  function toggle() {
    siteLocale.locale = siteLocale.locale === 'en-us' ? 'zh-cn' : 'en-us'
    localStorage.setItem(STORE, siteLocale.locale)
  }
  function setLang(v: LocaleName) {
    if (siteLocale.locale === v) return
    siteLocale.locale = v
    localStorage.setItem(STORE, v)
  }
  const locale = computed(() => siteLocale.locale)
  const messages = computed<SiteMessages>(() => dict[siteLocale.locale] ?? siteZhCn)
  return { locale, messages, t: messages, toggle, setLang, isEn: computed(() => siteLocale.locale === 'en-us') }
}
