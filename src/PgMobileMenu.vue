<script setup lang="ts">
/**
 * PgMobileMenu 移动端折叠菜单（≤960px 可见）—— 树形结构（组节点可展开/收起）
 * 顶部内嵌 AeroSearch 分组模糊召回；与 PC 侧栏互补；选中后自动收起
 */
import { AeroSearch, AeroIcon, type AeroSearchOption } from 'aero-vue'
import { useSiteI18n } from './useSiteI18n'

// 标题/aria/占位/空态 走 useSiteI18n 站点词包
const { t } = useSiteI18n()

const props = defineProps<{
  /** 分组（与 Sidebar groups 同形） */
  groups: { name: string; items: { key: string; title: string }[] }[]
  active: string
  /** 展开的组名集合 */
  openGroups: Set<string>
  /** 搜索候选（外部传入，与 registry 同源） */
  searchOptions: AeroSearchOption[]
}>()

const emit = defineEmits<{
  (e: 'go', key: string): void
  (e: 'go-close'): void
  (e: 'group-toggle', name: string): void
  (e: 'search-pick', o: AeroSearchOption): void
}>()
</script>

<template>
  <div class="pg-menu">
    <!-- 头部流内布局（标题 + spacer + 主题切换 + 关闭钮），关闭钮禁止流外定位；
 容器 max-width:100vw 防横向溢出 -->
    <div class="pg-menu__head">
      <span class="pg-menu__title">{{ t.menu.title }}</span>
      <span class="pg-menu__head-spacer" />
      <!-- 抽屉头只留唯一关闭钮（主题切换已回归顶部栏，不再此处重复渲染 → 消除双 X） -->
      <button class="pg-menu__close" type="button" :aria-label="t.menu.closeAria" @click="emit('go-close')">
        <AeroIcon name="x" :size="16" />
      </button>
    </div>

    <div class="pg-menu__search">
      <AeroSearch
        :options="searchOptions"
        :placeholder="t.menu.searchPlaceholder"
        :limit="99"
        group-by="group"
        @select="(o) => emit('search-pick', o)"
      />
    </div>

    <div
      v-for="g in groups"
      :key="g.name"
      class="pg-menu__node"
      :class="{ 'is-open': openGroups.has(g.name) }"
    >
      <button
        class="pg-menu__branch"
        type="button"
        :aria-expanded="openGroups.has(g.name)"
        @click="emit('group-toggle', g.name)"
      >
        <svg class="pg-menu__chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span class="pg-menu__cap">{{ g.name }}</span>
        <span class="pg-menu__count">{{ g.items.length }}</span>
      </button>
      <div class="pg-menu__children">
        <div class="pg-menu__children-in">
          <a
            v-for="it in g.items"
            :key="it.key"
            class="pg-menu__link"
            :class="{ 'is-active': it.key === active }"
            href="#"
            @click.prevent="emit('go', it.key)"
          >{{ it.title }}</a>
        </div>
      </div>
    </div>

    <div v-if="!groups.length" class="pg-menu__empty">{{ t.menu.empty }}</div>
  </div>
</template>

<style scoped lang="scss">
.pg-menu {
  max-width: 100vw;
  background: color-mix(in srgb, var(--ui-bg) 94%, transparent);
  backdrop-filter: var(--ui-blur-nav);
  border-bottom: 1px solid color-mix(in srgb, var(--ui-ink-2) 22%, transparent);
  padding: 10px 14px 12px;
  max-height: 46vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;

  /* 头部流内布局——标题 + spacer + 主题切换 + 关闭钮，
 全部在正常文档流内（禁止流外定位），关闭钮随 flex 布局不超界 */
  &__head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  &__title {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--ui-ink-2);
  }
  &__head-spacer {
    flex: 1;
  }
  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex: none;
    border: 1.5px solid var(--ui-line);
    border-radius: 9px;
    background: var(--ui-card);
    color: var(--ui-ink-2);
    cursor: pointer;
    transition: 0.18s;
    &:hover {
      border-color: var(--ui-brand);
      color: var(--ui-brand-ink);
    }
  }

  &__search {
    margin-bottom: 10px;
  }

  &__node {
    border: 1.5px solid var(--ui-line);
    border-radius: 12px;
    background: var(--ui-card);
    margin-bottom: 6px;
    overflow: hidden;
    transition: border-color 0.2s;
    &.is-open {
      border-color: color-mix(in srgb, var(--ui-brand) 45%, var(--ui-line));
    }
  }

  &__branch {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: none;
    border: 0;
    cursor: pointer;
    text-align: left;
    color: var(--ui-ink-2);
    transition: background 0.18s;
    &:hover {
      background: var(--ui-bg-soft);
    }
  }

  &__chev {
    flex: none;
    color: var(--ui-ink-3);
    transition: transform 0.26s var(--ui-spring);
  }
  &__node.is-open &__chev {
    transform: rotate(90deg);
    color: var(--ui-brand-ink);
  }

  &__cap {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__count {
    margin-left: auto;
    font-size: 10.5px;
    font-weight: 700;
    color: var(--ui-ink-3);
    background: var(--ui-bg-soft);
    border-radius: 99px;
    padding: 1.5px 8px;
  }

  /* 0fr→1fr 高度过渡：不写死 max-height（避免内容超长截断/收起留白跳变） */
  &__children {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s var(--ui-ease);
  }
  &__node.is-open &__children {
    grid-template-rows: 1fr;
  }
  &__children-in {
    overflow: hidden;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0 8px;
  }
  &__node.is-open &__children-in {
    padding: 0 8px 8px 14px;
  }

  &__link {
    padding: 7px 10px;
    border-radius: 8px;
    font-size: 13px;
    color: var(--ui-ink-2);
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.22s var(--ui-ease) 0.05s, transform 0.22s var(--ui-spring) 0.05s, background 0.18s, color 0.18s;
    &:hover {
      color: var(--ui-brand-ink);
      background: var(--ui-bg-soft);
    }
    &.is-active {
      color: var(--ui-brand-ink);
      background: var(--ui-bg-tint);
      font-weight: 700;
    }
  }
  &__node.is-open &__link {
    opacity: 1;
    transform: none;
  }

  &__empty {
    padding: 18px 12px;
    text-align: center;
    font-size: 13px;
    color: var(--ui-ink-3);
  }
}
</style>
