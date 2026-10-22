<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useTheme, AeroConfigProvider } from 'aero-vue'
import {
  AeroButton,
  AeroIcon,
  AeroThemeSwitch,
  AeroBadge,
  AeroToast,
  AeroAnnounce,
  AeroCodeBlock,
  AeroSearch,
  AeroTypography,
  type AeroSearchOption,
} from 'aero-vue'
import Sidebar from './Sidebar.vue'
import PgNav from './PgNav.vue'
import PgMobileMenu from './PgMobileMenu.vue'
import registry, { loadDemoUsage, loadDemoSource } from './registry'
import { useSiteI18n, siteLocale } from './useSiteI18n'
import { AI_GUIDE_URL } from './ai-guide-url'
import { safeRich } from './safe-rich'

const { state } = useTheme()
const query = ref('')
const route = ref(location.hash.slice(2) || 'button')
const copied = ref(false)
// 站点文案走 useSiteI18n（模块单例，与顶部栏 lang 同源 localStorage 'aero-pg-lang'）；
// 组件词包（AeroConfigProvider locale）同源翻转
const { t } = useSiteI18n()

/** 移动端堆叠菜单（≤960px 可见）：默认收起，点项后自动收起 */
const menuOpen = ref(false)
// 查看源码折叠面板（默认收起，展开内嵌完整 SFC）
const viewCodeOpen = ref(false)

// 顶部通知横幅：v-model:open 受控，关闭走 max-height 过渡；
// 不写 localStorage（会话级），刷新后重新出现，避免「关一次就永远消失」
const announceOpen = ref(true)

// one-liner 运行时插值 AI_GUIDE_URL 单源常量（词包 oneLiner 为插值函数，
// 渲染/复制均显示常量当前值——Release 改 ai-guide-url.ts 常量即全局换真值）
const oneLinerText = computed(() => t.value.aiGuidePage.oneLiner(AI_GUIDE_URL))

// 当前组件的 demo 源文件全文（复制此代码 / 查看此代码 同源，仅 import 重写为 aero-vue）
const demoUsage = computed(() => loadDemoUsage(current.value?.item.key ?? ''))
const demoFull = computed(() => loadDemoSource(current.value?.item.key ?? ''))

// —— 复制：写入 demo 源文件全文（import 已重写为 aero-vue，可直接粘贴使用） ——
async function copyUsage() {
  const key = current.value?.item.key ?? ''
  const src = loadDemoUsage(key)
  try {
    await navigator.clipboard.writeText(src)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = src
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  copied.value = true
  AeroToast.success(t.value.toast.demoCopied)
  setTimeout(() => (copied.value = false), 1600)
}

// 切换组件时收起「查看源码」面板
watch(route, () => { viewCodeOpen.value = false })

window.addEventListener('hashchange', () => {
  const k = location.hash.slice(2) || 'button'
  if (k !== route.value) {
    route.value = k
  }
})

function go(k: string) {
  // 同步更新响应式路由（立即重渲染），再异步改 hash（hashchange 守卫幂等）
  route.value = k
  if (location.hash !== `#/${k}`) {
    location.hash = `#/${k}`
  }
  // 切页滚回主区顶部：.pg-main 是 PC 端滚动容器
  requestAnimationFrame(() => {
    document.querySelector('.pg-main')?.scrollTo({ top: 0 })
  })
}

const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return registry.value
  // 侧栏空间受限：每组最多展示 1 条命中项——key 子串命中优先，
  // 无则取 title 子序列首个；无命中分组维持现状（items 空 → 下游 filter 滤掉）
  return registry.value
    .map((g) => {
      const keyHit = g.items.find((it) => it.key.includes(q))
      const titleHit = g.items.find((it) => !it.key.includes(q) && fuzzyHit(q, it.title))
      const top = keyHit ?? titleHit
      return { ...g, items: top ? [top] : [] }
    })
    .filter((g) => g.items.length)
})

const current = computed(() => {
  for (const g of registry.value) {
    const hit = g.items.find((i) => i.key === route.value)
    if (hit) return { group: g, item: hit }
  }
  return null
})

/* —— 移动端树形折叠菜单状态 —— */
/** 展开的组集合：默认展开当前路由所属组（树形导航直觉：进页即见自身位置） */
const openGroups = ref(new Set<string>(current.value ? [current.value.group.name] : []))
function toggleGroup(name: string) {
  const s = new Set(openGroups.value)
  s.has(name) ? s.delete(name) : s.add(name)
  openGroups.value = s
}
/** 切换路由时自动展开目标组 */
watch(route, () => {
  const g = current.value?.group.name
  if (g && !openGroups.value.has(g)) {
    openGroups.value = new Set([...openGroups.value, g])
  }
})

/* —— 副标题高亮擦条「滚入视口触发一次」——
   进入 ai-guide 路由或切 locale 重建 .pg-prose mark 后，先武装 .is-armed（条藏 0 宽），
   IntersectionObserver 滚入视口一次 → 挂 .is-erasing 播放 pg-mark-erase（0%→100% 擦入）→
   animationend 移除两个类回落默认终态（播放一次，不重播）。Typography 样本区/参照 .is-highlight 组件零命中。 */
let markOb: IntersectionObserver | null = null
function armProseMarks() {
  markOb?.disconnect()
  const roots = Array.from(document.querySelectorAll<HTMLElement>('.pg-prose'))
  const marks = roots.flatMap((r) => Array.from(r.querySelectorAll('mark')))
  if (!marks.length) return
  marks.forEach((m) => m.classList.add('is-armed'))
  markOb = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue
        const el = en.target as HTMLElement
        el.classList.add('is-erasing')
        el.addEventListener(
          'animationend',
          () => {
            el.classList.remove('is-armed', 'is-erasing')
          },
          { once: true },
        )
      }
    },
    { threshold: 0.4 },
  )
  marks.forEach((m) => markOb?.observe(m))
}
watch([route, siteLocale.locale], ([r, _loc]) => {
  if (r === 'ai-guide') nextTick(armProseMarks)
}, { immediate: true })

/* —— 顶部内联搜索命中高亮：输入词与侧栏条目做子序列命中（同 AeroSearch 判定），
   命中的条目以品牌主题色 <em class="pg-hl"> 包装渲染（样式见导航条内联 style），
   替代浏览器默认黄底；query 清空时侧栏回落纯文本渲染 —— */
function fuzzyHit(q: string, text: string): boolean {
  const st = text.toLowerCase()
  let ti = 0
  for (let qi = 0; qi < q.length; qi++) {
    const found = st.indexOf(q[qi], ti)
    if (found < 0) return false
    ti = found + 1
  }
  return true
}
const sideHits = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return null
  const m: Record<string, boolean> = {}
  for (const g of registry.value) {
    for (const it of g.items) {
      if (fuzzyHit(q, it.key) || fuzzyHit(q, it.title)) m[it.key] = true
    }
  }
  return m
})
/** 菜单内搜索候选：value=key，group=组名。分类经独立 group 字段承载 + group-by="group" 出组标题，
    不拼进 description（description 兼作组键会既驱动组标题又渲染为每项结果后的分类后缀）；
    group 字段不参与匹配（与 search 卡同一解耦约定），召回面零变化 */
const searchOptions = computed<AeroSearchOption[]>(() =>
  registry.value.flatMap((g) =>
    g.items.map((it) => ({ value: it.key, label: it.title, group: g.name })),
  ),
)
function onMenuPick(o: AeroSearchOption) {
  go(String(o.value))
  menuOpen.value = false
}

// 汉堡展开附带回顶——开抽屉前若真实滚动容器 scrollTop>0，平滑滚到 0
//（prefers-reduced-motion 直接跳转）；已在顶部行为不变。
// 移动端（≤960，.pg-main overflow-y:visible）真实滚动容器 =
// window/document.scrollingElement；桌面端 .pg-main 自身滚动——两容器都探一遍，
// 谁 scrollTop>0 谁归顶。1440 桌面无汉堡（pg-nav-mobile 未挂），零行为变化。
function toggleMenu(o: boolean) {
  if (o) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth'
    const se = document.scrollingElement
    if (se && se.scrollTop > 0) se.scrollTo({ top: 0, behavior })
    const pg = document.querySelector('.pg-main') as HTMLElement | null
    if (pg && pg.scrollTop > 0) pg.scrollTo({ top: 0, behavior })
  }
  menuOpen.value = o
}

</script>

<template>
  <div class="pg">
    <!-- 顶部通知横幅（AeroAnnounce，v-model:open 受控 + max-height 过渡不跳页；不再吸顶） -->
    <!-- actionHref 解除组件冻结——真实链接走组件 <a>（target=_blank + rel 防点击劫持）；
 槽内文字恢复词包原文（查看发布说明 / View release notes） -->
    <AeroAnnounce v-model:open="announceOpen" icon="sparkles" action-href="https://github.com/FanXingYiDianYun/aero-vue">
      <template #title>{{ t.announce.title }}</template>
      {{ t.announce.body }}
      <template #action>
        {{ t.announce.action }}
      </template>
    </AeroAnnounce>

    <!-- 顶部导航条：站点自留（不进组件库）；汉堡展开态收拢在 menuOpen -->
    <PgNav
      :query="query"
      :menu-open="menuOpen"
      @query="(v) => (query = v)"
      @go-home="go('button')"
      @menu-toggle="toggleMenu"
    />

    <!-- 移动端折叠菜单：树形结构 + AeroSearch 模糊召回（≤960px 可见） -->
    <transition name="pg-menu">
      <PgMobileMenu
        v-if="menuOpen"
        :groups="filteredGroups"
        :active="route"
        :open-groups="openGroups"
        :search-options="searchOptions"
        @group-toggle="toggleGroup"
        @go="(k) => { go(k); menuOpen = false }"
        @go-close="menuOpen = false"
        @search-pick="onMenuPick"
      />
    </transition>

    <div class="pg-body">
      <Sidebar :groups="filteredGroups" :active="route" :hits="sideHits" :query="query.trim()" @go="go" />
      <main class="pg-main">
        <div class="pg-main__in">
          <!-- R4b：AI 开发助手指南页（站点级页，渲染在 AeroConfigProvider 外；复用现有 pg-head/pg-desc/pg-api
               容器 + h3 + AeroCodeBlock copyable（自带复制反馈态），零新配色/零新图标/零新样式类。
               one-liner / 文案走站点词包 aiGuidePage 组（循 H7 判据：站点页非组件 demo 组）。 -->
          <template v-if="route === 'ai-guide'">
            <div class="pg-head">
              <div class="pg-head-row">
                <h1>{{ t.aiGuidePage.title }}</h1>
                <code class="pg-comp">aero-vue</code>
              </div>
              <p class="pg-desc">{{ t.aiGuidePage.intro }}</p>
            </div>

            <div class="pg-api pg-ai-block">
              <h3>{{ t.aiGuidePage.copyBlockLabel }}</h3>
              <p class="pg-ai-lead">{{ t.aiGuidePage.quickStartLead }}</p>
              <AeroConfigProvider :locale="siteLocale.locale">
                <AeroCodeBlock :code="oneLinerText" :copyable="true" lang="text" :title="t.aiGuidePage.copyBlockLabel" />
              </AeroConfigProvider>
            </div>

            <div class="pg-api pg-ai-block">
              <h3>{{ t.aiGuidePage.step1Title }}</h3>
              <p class="pg-ai-lead">{{ t.aiGuidePage.step1Desc }}</p>
              <AeroCodeBlock :code="t.aiGuidePage.step1Code1" :copyable="true" lang="bash" />
              <p class="pg-ai-lead">{{ t.aiGuidePage.step1Follow }}</p>
              <AeroCodeBlock :code="t.aiGuidePage.step1Code2" :copyable="true" lang="js" />

              <div class="pg-ai-step-gap">
                <h3 class="pg-ai-substep">{{ t.aiGuidePage.step2Title }}</h3>
                <p class="pg-ai-lead">{{ t.aiGuidePage.step2Desc }}</p>
                <AeroCodeBlock :code="t.aiGuidePage.step2Code" :copyable="true" lang="bash" />
                <p class="pg-ai-lead">{{ t.aiGuidePage.step2Follow }}</p>
              </div>
            </div>

            <div class="pg-api pg-ai-block">
              <h3>{{ t.aiGuidePage.boxSizingTitle }}</h3>
              <!-- 推荐全局重置代码块排版走库 AeroCodeBlock（同两通道安装惯例） -->
              <AeroCodeBlock :code="t.aiGuidePage.boxSizingCode" :copyable="true" lang="css" title="global reset" />
              <!-- W2 吃狗粮：box-sizing 段排版走库 AeroTypography（body 阶梯），
                   富文本值经 safeRich 白名单（mark）渲染，无 XSS 面（词包单一来源） -->
              <AeroTypography level="body">
                <span class="pg-ai-note pg-prose" v-html="safeRich(t.aiGuidePage.boxSizingBody)" />
              </AeroTypography>
            </div>
          </template>
          <template v-else-if="current">
          <!-- 标题区：对齐 demo comp-head（编号 + 标题 + en-tag） -->
          <div class="pg-head">
            <div class="pg-head-row">
              <h1>{{ current.item.title }}</h1>
              <code class="pg-comp">{{ current.item.component }}</code>
            </div>
            <!-- 副标题走最小富文本通道（词包值可含 kbd/code/mark/em，经 safeRich 白名单渲染；
                 内容源全为库内词包，无用户输入 XSS 面）；纯文本条目经 safeRich 原样输出不受影响 -->
            <p class="pg-desc pg-prose" v-html="safeRich(current.item.desc)" />
          </div>

          <!-- 演示舞台：复刻 demo .stage（虚线框 + stage-label + 内嵌工具钮） -->
          <div class="pg-stage">
            <span class="pg-stage-label">{{ t.codeView.stage }}</span>
            <div class="pg-stage-tools">
              <button
                class="pg-stage-copy"
                type="button"
                :aria-label="copied ? t.codeView.copied : t.codeView.copyCode"
                @click="copyUsage"
              >
                <AeroIcon :name="copied ? 'check' : 'copy'" :size="14" />
                <span>{{ copied ? t.codeView.copied : t.codeView.copyCode }}</span>
              </button>
              <button
                class="pg-stage-copy"
                type="button"
                :aria-label="t.codeView.viewCode"
                @click="viewCodeOpen = !viewCodeOpen"
              >
                <AeroIcon :name="viewCodeOpen ? 'chevron-up' : 'code'" :size="14" />
                <span>{{ t.codeView.viewCode }}</span>
              </button>
            </div>
            <AeroConfigProvider :locale="siteLocale.locale">
              <component :is="current.item.demo" :key="current.item.key" />
            </AeroConfigProvider>
          </div>

          <!-- 查看此代码：折叠面板内嵌完整 SFC 源码（非复制，直接展示内部构成）；
               折叠动效与 AeroCodeBlock 同源——grid-template-rows 0fr↔1fr 高度过渡
               + chevron 旋转 180° spring，展开态内嵌 CodeBlock 自身 bar（标题+语言+复制） -->
          <div v-if="demoFull" class="pg-codeview">
            <button
              class="pg-codeview__toggle"
              type="button"
              :aria-expanded="viewCodeOpen"
              @click="viewCodeOpen = !viewCodeOpen"
            >
              <AeroIcon name="chevron-down" :size="14" class="pg-codeview__chev" :class="{ 'is-open': viewCodeOpen }" />
              <span>{{ t.codeView.fullSource(current.item.component) }}</span>
            </button>
            <div class="pg-codeview__zone" :class="{ 'is-open': viewCodeOpen }">
              <div class="pg-codeview__zone-in">
                <AeroConfigProvider :locale="siteLocale.locale">
                  <AeroCodeBlock :code="demoFull" lang="vue" :line-numbers="true" :copyable="true" :title="current.item.component" flush />
                </AeroConfigProvider>
              </div>
            </div>
          </div>

          <div v-if="current.item.props" class="pg-api">
            <h3>Props</h3>
            <div class="pg-api__wrap">
              <div class="pg-api__scroll">
                <table>
                  <thead><tr><th>{{ t.api.name }}</th><th>{{ t.api.type }}</th><th>{{ t.api.default }}</th><th>{{ t.api.description }}</th></tr></thead>
                  <tbody>
                    <tr v-for="p in current.item.props" :key="p[0]">
                      <td><code>{{ p[0] }}</code></td>
                      <td><code>{{ p[1] }}</code></td>
                      <td><code>{{ p[2] }}</code></td>
                      <td>{{ p[3] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div v-if="current.item.events" class="pg-api">
            <h3>Events</h3>
            <div class="pg-api__wrap">
              <div class="pg-api__scroll">
                <table>
                  <thead><tr><th>{{ t.api.name }}</th><th>{{ t.api.payload }}</th><th>{{ t.api.description }}</th></tr></thead>
                  <tbody>
                    <tr v-for="e in current.item.events" :key="e[0]">
                      <td><code>{{ e[0] }}</code></td>
                      <td><code>{{ e[1] }}</code></td>
                      <td>{{ e[2] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="pg-none">
          <h1>{{ t.notFound.title }}</h1>
          <p>{{ t.notFound.body(query) }}</p>
        </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pg {
  /* 固定高度 = 视口，让内部 .pg-main 成为唯一 Y 滚动容器；
     侧栏 .pg-side 同高但 sticky 在 pg-body 内，不再随内容被拉成长条 */
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* 正文层级（云厂商文档语汇：字号更足、字重更实、层级差拉开） */
  h1 {
    font-size: 38px;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }
  h3 {
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }
  code {
    font-family: var(--ui-font-mono);
  }
}

/* 顶部导航条已抽离至 PgNav.vue（站点自留组件，不进组件库）；
   移动端折叠菜单已抽离至 PgMobileMenu.vue。
   此处仅保留 transition 类（Vue transition 挂在此 App 作用域）
   与响应式 @media 断点（针对 PgNav/PgMobileMenu 的子选择器透传） */

.pg-menu-enter-active,
.pg-menu-leave-active {
  transition: opacity 0.24s, max-height 0.32s var(--ui-ease);
}
.pg-menu-enter-from,
.pg-menu-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.pg-body {
  display: grid;
  grid-template-columns: 250px 1fr;
  /* 关键：固定高度 = 视口剩余，让 .pg-main 自身成为滚动容器，
     页面 Y 轴不再被内容撑开（否则右侧出现滚动条时整页 scrollHeight 拉长，
     左侧 sticky 侧栏因父容器被撑高而"看似"被拉成长条空白） */
  height: calc(100vh - 68px);
  overflow: hidden;
}

/* 右面板：占满整个 grid 列宽，Y 滚动条出现在视口右缘（而非内容居中后的中间边缘）；
   实际限宽居中由内部 .pg-main__in 承担，滚动容器（.pg-main）满宽，
   鼠标滚轮在任意位置（含两侧留白）都能驱动 Y 滚动 */
.pg-main {
  overflow-y: auto;
  height: 100%;
  animation: ui-fade-up 0.4s var(--ui-ease);
}

/* 内容限宽居中：只影响内容区，不影响滚动容器宽度 */
.pg-main__in {
  padding: 30px 44px 72px;
  max-width: 1040px;
  margin: 0 auto;
}

.pg-head {
  /* 标题区：与页面正文统一留白，不用卡片底 + 品牌硬阴影（去 Aero 卡片化签名） */
  margin-bottom: 18px;
  padding: 0 0 4px;
  .pg-head-row {
    display: flex;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
  }
  .pg-comp {
    /* 组件名 chip：界面字体，mono 仅保留给代码块语境 */
    font-family: var(--ui-font);
    font-size: 12.5px;
    font-weight: 700;
    background: var(--ui-bg-tint);
    color: var(--ui-brand-ink);
    border: 1px solid color-mix(in srgb, var(--ui-ink-2) 30%, transparent);
    border-radius: 8px;
    padding: 3px 10px;
  }
  .pg-desc {
    color: var(--ui-ink-2);
    font-size: 15.5px;
    line-height: 1.7;
    margin: 10px 0 0;
    max-width: 720px;
    /* 富文本内联元素（code/kbd/mark/em）观感由全局单源 .pg-prose（style.scss）承担，
       本容器不再 :deep 自建并行规则 */
  }
}

/* —— 演示舞台（demo .stage 同款：虚线框，去品牌硬阴影卡片化） —— */
.pg-stage {
  border: 2px dashed var(--ui-line-2);
  border-radius: 22px;
  /* 加大顶部 padding：为 stage-tools 工具钮组留出空间，避免与 demo 内容重叠 */
  padding: 52px 30px 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  position: relative;
  background: transparent;
  min-height: 120px;

  /* demo 内容纵排时占满 */
  > :deep(*) {
    min-width: 0;
  }
}

.pg-stage-label {
  position: absolute;
  top: 12px;
  left: 16px;
  font-family: var(--ui-font-en);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--ui-ink-3);
  text-transform: uppercase;
  pointer-events: none;
}

/* 工具钮组：内嵌 stage 右上角，与虚线框融为一体；加大留白（top/right 14px）避免贴边紧迫 */
.pg-stage-tools {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
}

/* 复制/查看源码按钮：ghost 胶囊钮（浅底 + 细边框），hover 显品牌色，去硬阴影 */
.pg-stage-copy {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 13px;
  font-size: 12px;
  font-weight: 600;
  /* 界面按钮用主界面字体：mono 观感仅保留给真正的代码语境（CodeBlock/源码面板），
     工具按钮属 UI chrome，与 Aero 整体无衬线签名保持一致 */
  font-family: var(--ui-font);
  color: var(--ui-ink-2);
  background: var(--ui-card);
  border: 1px solid color-mix(in srgb, var(--ui-ink-2) 24%, transparent);
  border-radius: 99px;
  cursor: pointer;
  transition: 0.22s var(--ui-spring);
  &:hover {
    color: var(--ui-brand-ink);
    border-color: var(--ui-brand);
    background: var(--ui-bg-tint);
  }
}

/* 查看此代码：折叠面板（展开内嵌完整 SFC 源码）；
 面板底随 CodeBlock 终版 surface 体系（--ui-surface / --ui-surface-2 /
 --ui-line），flush 内嵌 CodeBlock 正文透明落面板之上，双主题各自成立；
 折叠动效与 AeroCodeBlock J1 规格同源：
 grid-template-rows 0fr↔1fr .28s cubic-bezier(.4,0,.2,1) + chevron 旋转 180° */
.pg-codeview {
  margin: 24px 0 0;
  border: 1px solid var(--ui-line);
  border-radius: 14px;
  background: var(--ui-surface);
  overflow: hidden;

  &__toggle {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 16px;
    /* 面板 toggle 属 UI chrome，用界面字体（与工具钮一致） */
    font-family: var(--ui-font);
    font-size: 12.5px;
    font-weight: 600;
    color: var(--ui-ink-3);
    background: var(--ui-surface-2);
    border: 0;
    border-bottom: 1px solid var(--ui-line);
    cursor: pointer;
    text-align: left;
    transition: background 0.18s ease;
    &:hover {
      background: color-mix(in srgb, var(--ui-brand) 6%, var(--ui-surface-2));
      color: var(--ui-ink);
    }
    span { font-weight: 500; }
  }
  /* chevron：与 CodeBlock J1 折叠钮同曲线（.28s cubic-bezier(.4,0,.2,1)） */
  &__chev {
    flex: none;
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    &.is-open {
      transform: rotate(180deg);
    }
  }
  /* 高度过渡层：0fr↔1fr，内层 zone-in 裁切（与 CodeBlock __code-zone 同源） */
  &__zone {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &__zone.is-open {
    grid-template-rows: 1fr;
  }
  &__zone-in {
    overflow: hidden;
    min-height: 0;
  }
}

.pg-api {
  margin-top: 24px;
  h3 {
    font-size: 16px;
    letter-spacing: -0.01em;
    margin: 0 0 10px;
  }
  /* AI Skill 页（四区块）：
     .pg-ai-lead = 说明/接续段落（与相邻 AeroCodeBlock 之间 margin 16px ≥16px 规范）；
     .pg-ai-step-gap = 手动安装内第二步区块（与上区块间 margin-top 24px ≥24px 区块节奏）；
     .pg-ai-substep = 区块内子步骤标题（视觉次于主 h3） */
  .pg-ai-lead {
    margin: 16px 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--ui-ink-2);
  }
  .pg-ai-step-gap {
    margin-top: 24px;
  }
  .pg-ai-substep {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 10px;
  }
  /* 盒模型区段-块间距补位（既有 .pg-ai-block 类上加规则，零新 wrapper DOM）——
     本区块内 h3→CodeBlock（.aero-cw，margin 0）与 CodeBlock→正文段（AeroTypography .aero-type，margin 0）
     原贴边 10px/2px < 16px 规范；补 16px 节奏（复用 .pg-ai-lead 同值）。
     作用域安全：其余区块的 h3→lead 经 margin 折叠维持 16px 不变（10→16 后折叠取大值仍 16）；
     substep 用 :not 排除保持自身 10px；.aero-type 仅本区块使用（其余区块无 AeroTypography） */
  &.pg-ai-block h3:not(.pg-ai-substep) {
    margin: 0 0 16px;
  }
  &.pg-ai-block .aero-type {
    margin: 16px 0 0;
  }
  /* AI Skill 段富文本（code/mark）观感由全局单源 .pg-prose（style.scss）承担，
     本容器不再 :deep 自建并行规则 */
  /* API 文档表：对齐 AeroTable / DEMO.html .table-wrap+.tb 标准签名——
     2px --ui-line 描边 + 16px 圆角 + 行级 hover（--ui-bg-soft）动效，
     此前误用 1px 细线且无 hover，导致全部演示页表格观感与组件标准脱节。
     外层容器承担圆角与裁剪（border+overflow 生效于 div）；
     table 本体用 border-collapse: collapse 吃满宽度、去自身边框，
     描边统一由外层出，避免 collapse 语义把外层圆角描边顶掉。
     横向自适应滚动：与 AeroTable 完全同源——外层 overflow-x:auto
     （overflow: hidden 的 x 轴自动升级为 auto），内层 table 给
     min-width + th nowrap + td word-break，窄屏时表格保持 PC 列宽
     按 640px 下限横滚，绝不挤压换行、不出 X 轴溢出被裁。 */
  .pg-api__wrap {
    border: 2px solid var(--ui-line);
    border-radius: 16px;
    overflow: hidden;
    background: var(--ui-card);
    font-size: 14px;
  }
  .pg-api__scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    th {
      text-align: left;
      padding: 13px 18px;
      background: var(--ui-bg-soft);
      color: var(--ui-ink-2);
      font-size: 12.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-bottom: 2px solid var(--ui-line);
      white-space: nowrap;
    }
    td {
      padding: 13px 18px;
      line-height: 1.65;
      border-bottom: 2px solid var(--ui-line);
      word-break: break-word;
      code {
        font-size: 12.5px;
        color: var(--ui-brand-ink);
        font-weight: 600;
      }
      &:last-child {
        color: var(--ui-ink-2);
      }
    }
    tbody tr {
      transition: background 0.2s;
      &:hover {
        background: var(--ui-bg-soft);
      }
    }
    tr:last-child td {
      border-bottom: 0;
    }
  }
}

.pg-none {
  text-align: center;
  padding-top: 120px;
  color: var(--ui-ink-3);
}

/* —— 响应式（移动端竖屏）——
   L3 单一权威：断点 = 960px，由 nav-breakpoint.ts（NAV_BREAKPOINT）经
   matchMedia 驱动 html.pg-nav-mobile 根类；本块规则改挂根类（引擎实测
   CSS @media 无法读 var()，单一权威落 JS 常量 + 根类）。与 PgNav.vue 汉堡
   出现判据同源联动 → 不变式「任意宽度下 侧栏可见 XOR 汉堡可用」，真空带
   (768,960] 长出汉堡；≤768 与 >1024 现状像素不变（规则文本未改，仅换触发源）。 */
html.pg-nav-mobile {
  /* ① 单列：侧栏收进导航条下的堆叠菜单（.pg-menu），主区独占整列，
     不再与侧栏上下堆叠挤占竖向空间 */
  .pg {
    height: auto;
    overflow: visible;
  }
  .pg-side {
    display: none; /* 侧栏由堆叠菜单替代 */
  }
  .pg-body {
    display: block;
    height: auto;
    overflow: visible;
  }
  .pg-main {
    overflow-y: visible; /* 主区不再独立滚动，交还给页面 Y 滚动 */
    height: auto;
  }
  .pg-main__in {
    padding: 24px 16px 72px;
  }
  .pg-head {
    padding-bottom: 14px;
    margin-bottom: 14px;
    h1 {
      font-size: 28px;
    }
    .pg-comp {
      font-size: 11.5px;
      padding: 2px 8px;
    }
  }
  .pg-desc {
    font-size: 14px !important;
  }
  /* ② 导航条：汉堡钮显形（PgNav 内 ≤960px 显示）、搜索框收窄、
     整条不再溢出 X 轴（PgNav/PgMobileMenu 自带响应式 scoped 样式） */
  .pg-nav {
    position: sticky;
    top: 0;
    gap: 10px;
    padding: 0 12px;
  }
  /* 堆叠菜单：显形（PgMobileMenu 自带 ≤960px display:block） */
  /* ③ stage-tools 收窄，工具钮悬浮在舞台右上角 */
  .pg-stage {
    padding: 30px 14px 18px;
    gap: 10px;
  }
  .pg-stage-tools {
    position: static;
    /* 移动端按钮不再绝对定位（与 demo 内容遮挡），改为流式排列 + flex-wrap */
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
    order: -1; /* 按钮组排到 demo 内容之前 */
    width: 100%;
  }
  .pg-stage-copy {
    padding: 5px 10px;
    font-size: 11px;
  }
  .pg-codeview {
    margin-top: 14px;
  }
  .pg-api {
    margin-top: 20px;
  }
  /* AI Skill 页四区块：窄视口节奏 = 24px 区块间距规范（仅本页
     .pg-ai-block 三块；双类特异性压过上方单类 20px，组件 demo 页 .pg-api 不受影响） */
  .pg-api.pg-ai-block {
    margin-top: 24px;
  }
  .pg-none {
    padding-top: 60px;
  }
}
</style>
