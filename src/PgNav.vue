<script setup lang="ts">
/**
 * PgNav 顶部导航条 —— 站点自留导航（不进组件库，行业惯例：EP/AD/TDesign/Arco/Naive 均无此组件）
 * 汉堡菜单展开态收拢在 menuOpen prop；侧栏/主区分离，职责单一
 *
 * 语言切换为下拉选择（禁止单击轮换）：胶囊触发器（与 gh/theme 同高 38px）+
 * 库组件 AeroPopover（click 触发）自定义菜单（中文/English 带当前态勾选）；
 * Esc 关闭 + 键盘可达（button/menuitemradio + focus-visible）。
 */
import { AeroIcon, AeroThemeSwitch, AeroBadge, AeroPopover } from 'aero-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { LocaleName } from 'aero-vue'
import { useSiteI18n } from './useSiteI18n'

// 版本单一数据源 = vite.config.ts define 注入 __APP_VERSION__（读本仓 package.json version，杜绝发版漂移；类型见 vite-env.d.ts）
const APP_VERSION = __APP_VERSION__
const { t, locale, setLang } = useSiteI18n()
const langOpen = ref(false)
const langBtn = ref<HTMLElement>()
// $el = .aero-popover-trigger 宿主节点（AeroPopover 根 span）
const langPopRoot = ref<{ $el?: HTMLElement } | null>(null)

function pickLang(v: LocaleName) {
  setLang(v)
  langOpen.value = false
  langBtn.value?.focus()
}
// 站点层受控开合——AeroPopover 受控 open + 本层 pointerdown 捕获判外部点击
// （不依赖 popover 内部 useClickOutside：其触发器点击竞争曾导致菜单项 click 被吞）
function onDocPointerDown(e: PointerEvent) {
  if (!langOpen.value) return
  const target = e.target as Node
  // langPopRoot.$el = .aero-popover-trigger（触发器 span，含 .pg-lang 按钮）
  const inTrig = langPopRoot.value?.$el?.contains(target) ?? false
  const inMenu = document.querySelector('.aero-popover')?.contains(target) ?? false
  if (!inTrig && !inMenu) langOpen.value = false
}
// Esc 关闭（AeroPopover 无 Esc，站点层补）
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && langOpen.value) {
    langOpen.value = false
    langBtn.value?.focus()
  }
}
onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.addEventListener('pointerdown', onDocPointerDown, { capture: true })
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('pointerdown', onDocPointerDown, { capture: true })
})

const props = defineProps<{
  /** 搜索查询词 */
  query: string
  /** 搜索回调 */
  onQuery: (v: string) => void
  /** 移动端菜单是否展开（≤960px 可见） */
  menuOpen: boolean
  onMenuToggle: (open: boolean) => void
  /** 点击 logo 跳首页 */
  onGoHome: () => void
}>()

const emit = defineEmits<{
  (e: 'query', v: string): void
  (e: 'go-home'): void
  (e: 'menu-toggle', open: boolean): void
}>()
</script>

<template>
  <header class="pg-nav" data-affix-anchor>
    <!-- 汉堡钮：移动端唯一触发钮（≤768px 显示）；展开态由 PgMobileMenu 头部关闭钮负责，
         避免顶部栏与抽屉各渲染一个关闭钮（H2.1 重复关闭按钮回归） -->
    <button
      v-if="!menuOpen"
      class="pg-menu-btn"
      type="button"
      :aria-label="t.nav.expandMenuAria"
      @click="emit('menu-toggle', true)"
    >
      <AeroIcon name="menu" :size="20" />
    </button>

    <a class="pg-logo" href="#/button" @click.prevent="emit('go-home')">
      <!-- 品牌 header logo（大图标，拷贝制 public/large.svg；正方形视图框等比适配 44×44 桌面 / 32×32 移动，
           导航栏高 68px 内垂直居中不溢出）。旧内联 svg 走 var(--ui-brand) 随主题翻转；本素材为静态配色
           （浅色底），双主题呈现差异如实上报 -->
      <img class="pg-logo-img" src="/large.svg" width="44" height="44" alt="Aero UI" />
      <!-- 站点名移动端不再隐藏（窄屏缩字号，nowrap 不换行不省略） -->
      <span class="pg-name">Aero UI</span>
      <AeroBadge type="soft">v{{ APP_VERSION }}</AeroBadge>
    </a>

    <div class="pg-search">
      <AeroIcon name="search" :size="15" />
      <input :value="query" :placeholder="t.nav.searchPlaceholder" spellcheck="false" @input="emit('query', ($event.target as HTMLInputElement).value)" />
    </div>

    <div class="pg-actions">
      <!-- 语言下拉——胶囊触发器（与 gh/theme 同高 38px）+ AeroPopover 菜单（中文/English 带勾选） -->
      <AeroPopover ref="langPopRoot" trigger="click" placement="bottom" :width="132" :open="langOpen" @update:open="langOpen = $event">
        <button
          ref="langBtn"
          class="pg-lang"
          type="button"
          :title="t.nav.langMenu.triggerTitle"
          :aria-label="t.nav.langMenu.triggerAria"
          :aria-expanded="langOpen"
          :aria-haspopup="true"
        >
          <AeroIcon name="globe" :size="13" />
          <!-- 「中」字面量改站点词包 nav.langMenu.num（zh=中/en=EN） -->
          <span class="pg-lang-num">{{ t.nav.langMenu.num }}</span>
          <AeroIcon name="chevron-down" :size="11" class="pg-lang-chev" />
        </button>
        <template #content>
          <div class="pg-lang-menu" role="menu">
            <b class="pg-lang-menu__title">{{ t.nav.langMenu.menuTitle }}</b>
            <button
              v-for="opt in [
                { key: 'zh-cn' as LocaleName, label: t.nav.langMenu.zh },
                { key: 'en-us' as LocaleName, label: t.nav.langMenu.en },
              ]"
              :key="opt.key"
              type="button"
              role="menuitemradio"
              class="pg-lang-menu__item"
              :class="{ 'is-on': locale === opt.key }"
              :aria-checked="locale === opt.key"
              @click="pickLang(opt.key)"
            >
              <AeroIcon v-if="locale === opt.key" name="check" :size="12" class="pg-lang-menu__check" />
              <span>{{ opt.label }}</span>
            </button>
          </div>
        </template>
      </AeroPopover>
      <!-- GitHub 入口（git-branch + Stars 徽章 + 2px 描边 + 硬阴影签名 hover） -->
      <a class="pg-gh" href="https://github.com/FanXingYiDianYun/aero-vue" target="_blank" rel="noopener">
        <AeroIcon name="git-branch" :size="15" />
        <span class="pg-gh-num">Stars</span>
      </a>
      <!-- H7/R4b：AI 开发助手指南入口（复用 .pg-gh 样式类 + sparkles 现有图标，零新配色/图标；
           文案走站点词包 nav.aiGuide；R4b 起目标改站内 /ai-guide 页——演示站 hash 路由，
           <a href="#/ai-guide"> 原生改 hash，App hashchange 监听切页；非外链（原 H7 外链占位已废） -->
      <a
        class="pg-gh"
        href="#/ai-guide"
        :title="t.nav.aiGuide.aria"
        :aria-label="t.nav.aiGuide.aria"
      >
        <AeroIcon name="sparkles" :size="15" />
        <span class="pg-gh-num">{{ t.nav.aiGuide.label }}</span>
      </a>
      <!-- 主题切换（组件默认尺寸 --_h 38px，2px 描边） -->
      <AeroThemeSwitch class="pg-theme" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.pg-nav {
  position: sticky;
  top: 0;
  z-index: var(--ui-z-nav);
  display: flex;
  align-items: center;
  gap: 18px;
  height: 68px;
  padding: 0 24px;
  background: color-mix(in srgb, var(--ui-bg) 86%, transparent);
  backdrop-filter: var(--ui-blur-nav);
  border-bottom: 1px solid color-mix(in srgb, var(--ui-ink-2) 28%, transparent);
  box-shadow: 0 1px 0 color-mix(in srgb, var(--ui-ink-2) 14%, transparent);

  .pg-menu-btn {
    display: none;
    width: 40px;
    height: 40px;
    flex: none;
    border: 2px solid var(--ui-line);
    border-radius: 11px;
    background: var(--ui-card);
    color: var(--ui-ink-2);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s var(--ui-spring);
    &:hover {
      border-color: var(--ui-brand);
      color: var(--ui-brand-ink);
      transform: translateY(-1.5px);
    }
    &--close {
      margin-left: 4px;
    }
  }

  .pg-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--ui-ink);
    font-family: var(--ui-font-en);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    white-space: nowrap;
    flex: none;
    &:hover svg,
    &:hover img {
      transform: rotate(-10deg) scale(1.1);
    }
    svg,
    img {
      transition: transform 0.4s var(--ui-spring);
    }
  }

  .pg-search {
    flex: 1;
    min-width: 0;
    max-width: 420px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 2px solid var(--ui-line-2);
    border-radius: 99px;
    padding: 8px 16px;
    color: var(--ui-ink-3);
    background: var(--ui-card);
    transition: border-color 0.25s, box-shadow 0.25s;
    &:focus-within {
      border-color: var(--ui-brand);
      box-shadow: var(--ui-focus-ring);
    }
    input {
      border: 0;
      background: none;
      outline: none;
      font-family: var(--ui-font);
      font-size: 13.5px;
      color: var(--ui-ink);
      width: 100%;
    }
  }

  .pg-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    flex: none;

    /* 语言下拉触发器——H 轮 .pg-gh 同源规格（2px 描边胶囊），同高 38px（= theme 默认 --_h） */
    .pg-lang {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 38px;
      border: 2px solid var(--ui-line);
      border-radius: 99px;
      padding: 0 12px;
      font-size: 13px;
      font-weight: 700;
      color: var(--ui-ink-2);
      background: var(--ui-card);
      white-space: nowrap;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        border-color: var(--ui-brand);
        color: var(--ui-brand-ink);
        transform: translateY(-1.5px);
      }
      .pg-lang-num {
        font-family: var(--ui-font-en);
        color: var(--ui-brand-ink);
        letter-spacing: 0.02em;
      }
      .pg-lang-chev {
        transition: transform 0.2s;
      }
      &[aria-expanded='true'] .pg-lang-chev {
        transform: rotate(180deg);
      }
      &:focus-visible {
        outline: none;
        box-shadow: var(--ui-focus-ring);
      }
    }

    /* .pg-gh GitHub 入口（2px 描边 + Stars 徽章 + 硬阴影签名 hover），同高 38px */
    .pg-gh {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      height: 38px;
      border: 2px solid var(--ui-line);
      border-radius: 99px;
      padding: 0 14px 0 10px;
      font-size: 13px;
      font-weight: 700;
      color: var(--ui-ink-2);
      text-decoration: none;
      background: var(--ui-card);
      white-space: nowrap;
      transition: 0.25s;
      &:hover {
        border-color: var(--ui-brand);
        transform: translateY(-1.5px);
        box-shadow: 3px 3px 0 var(--ui-brand);
      }
      .pg-gh-num {
        font-family: var(--ui-font-en);
        color: var(--ui-brand-ink);
      }
    }

    /* theme：组件默认 --_h 38px（2px 描边），无覆写 */
    .pg-theme {
      /* 无覆写——组件默认 --_h:38px / border:2px */
    }
  }

  /* L3 单一权威：汉堡出现判据改由 html.pg-nav-mobile 根类驱动（nav-breakpoint.ts
     NAV_BREAKPOINT=960 经 matchMedia 挂类，与 App.vue 侧栏隐藏同源联动）——旧
     @media 768 与侧栏 960 双断点不一致，(768,960] 真空带无导航。
     规则本体迁至本组件下方非 scoped 全局块（scoped :global(...) & 嵌套在本引擎
     编译出坏选择器：元素部分丢失、宽度规则打到 html 上）；桌面基线（1440）
     不受影响，≤768 现状像素不变。 */
}
</style>

<style lang="scss">
/* 汉堡出现判据 = html.pg-nav-mobile 根类（nav-breakpoint.ts 单一权威 960，
 与 App.vue 侧栏隐藏同源联动；scoped :global(...) & 嵌套在本引擎编译出坏
 选择器，故规则本体落此处非 scoped 全局块）。
 真空带 (768,960] 长出汉堡；≤768 与 >1024 现状像素不变
 （390 下各规则与旧 @media 768 块逐条等价，仅触发源 768→960 根类）。 */
html.pg-nav-mobile .pg-nav {
  gap: 8px;
  padding: 0 10px;

  .pg-menu-btn { display: flex; width: 36px; height: 36px; }
  /* 站点名保留，窄屏缩字号 + nowrap，绝不换行/省略 */
  .pg-name {
    display: inline;
    font-size: 15px;
    white-space: nowrap;
  }
  .pg-logo {
    font-size: 15px;
    gap: 7px;
    svg,
    img { width: 32px; height: 32px; }
  }
  .pg-logo .aero-badge { display: none; } /* v0.1.0 chip 移动端隐藏（省空间，名字保留） */
  .pg-search { display: none; }
  .pg-actions {
    gap: 8px;
    /* gh 移动端不再隐藏——icon 态 36px 方胶囊（与 lang 同规格） */
    .pg-gh {
      width: 36px;
      height: 36px;
      padding: 0;
      justify-content: center;
      gap: 0;
      .pg-gh-num { display: none; }
    }
    /* theme 移动端 --_h 36px 同高（替代 H 轮 scale(0.86) 压缩） */
    .pg-theme { --_h: 36px; }
    /* 语言触发器 icon 态 36px 方胶囊（与 gh/theme 同高） */
    .pg-lang {
      width: 36px;
      height: 36px;
      padding: 0;
      justify-content: center;
      gap: 0;
      .pg-lang-num,
      .pg-lang-chev { display: none; }
    }
  }
}

/* 语言下拉菜单——AeroPopover content 槽 Teleport 到 body（scoped 不生效，站点全局类） */
.pg-lang-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  &__title {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ui-ink-3);
    padding: 2px 8px 4px;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 8px;
    border: 0;
    background: none;
    border-radius: 9px;
    font-family: var(--ui-font);
    font-size: 13px;
    font-weight: 600;
    color: var(--ui-ink-2);
    cursor: pointer;
    text-align: left;
    transition: background 0.15s, color 0.15s;
    &:hover {
      background: var(--ui-bg-soft);
      color: var(--ui-ink);
    }
    &.is-on {
      color: var(--ui-brand-ink);
      font-weight: 700;
    }
    &:focus-visible {
      outline: none;
      box-shadow: var(--ui-focus-ring);
    }
  }
  &__check {
    color: var(--ui-brand-ink);
    flex: none;
  }
}
</style>
