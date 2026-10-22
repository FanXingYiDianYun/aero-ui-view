<script setup lang="ts">
const props = defineProps<{
  groups: { name: string; items: { key: string; title: string }[] }[]
  active: string
  /** 顶部搜索命中集合：key → true；命中条目的查询词命中字符以品牌主题色高亮（em.pg-hl） */
  hits?: Record<string, boolean>
  /** 当前查询词（trim 后）：命中条目内逐字符子序列定位，未命中条目回落纯文本 */
  query?: string
}>()

const emit = defineEmits<{ (e: 'go', k: string): void }>()

/** 命中条目展示文本：查询词子序列逐次命中位以 <em class="pg-hl"> 包装（同 AeroSearch 判定），
    未命中条目 / 无查询词时返回纯字符数组（模板渲染等价纯文本） */
function hitChars(title: string, key: string): Array<{ ch: string; hl: boolean }> {
  const chars = title.split('')
  const q = (props.query ?? '').toLowerCase()
  if (!q || !props.hits?.[key]) return chars.map((ch) => ({ ch, hl: false }))
  const st = title.toLowerCase()
  const flags = new Array(chars.length).fill(false)
  let qi = 0
  for (let i = 0; i < st.length && qi < q.length; i++) {
    if (st[i] === q[qi]) {
      flags[i] = true
      qi++
    }
  }
  return chars.map((ch, i) => ({ ch, hl: flags[i] }))
}
</script>

<template>
  <aside class="pg-side">
    <div v-for="g in groups" :key="g.name" class="pg-side__group">
      <span class="pg-side__cap">{{ g.name }}</span>
      <a
        v-for="it in g.items"
        :key="it.key"
        class="pg-side__link"
        :class="{ 'is-active': it.key === active }"
        :href="`#/${it.key}`"
        @click.prevent="emit('go', it.key)"
      ><template v-for="(c, i) in hitChars(it.title, it.key)" :key="i">
        <em v-if="c.hl" class="pg-hl">{{ c.ch }}</em>
        <template v-else>{{ c.ch }}</template>
      </template></a>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.pg-side {
  /* 侧栏右缘：主 2px 品牌混合线 + 底部 1px 加重，替代过浅的纯 line 色 */
  border-right: 1px solid color-mix(in srgb, var(--ui-ink-2) 26%, transparent);
  padding: 24px 14px;
  /* 侧栏作为抽屉式固定导航：占满 .pg-body 高度（父容器固定 100vh-68px），
     内容多时侧栏自身内部滚动，不随主区内容撑高 */
  height: 100%;
  overflow-y: auto;
  position: sticky;
  top: 68px;
  /* 侧栏层级高于 Affix 吸附按钮（z-nav-20=780），
     防止固钉页的 fixed 按钮残留在侧栏上拦截点击 */
  z-index: calc(var(--ui-z-nav) - 10);
  /* 滚动条完全跟随全局主题（style.scss 中 .pg-side 的 12px 圆角品牌条规则），
     不再用 scoped 的 scrollbar-width/color 覆盖（会与 WebKit 全局规则冲突） */

  &__group {
    margin-bottom: 22px;
  }
  &__cap {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--ui-ink-3);
    text-transform: uppercase;
    padding-left: 11px;
    margin-bottom: 8px;
  }
    &__link {
      display: block;
      padding: 6.5px 11px;
      border-radius: 9px;
      font-size: 13.8px;
      color: var(--ui-ink-2);
      text-decoration: none;
      transition: 0.2s;
      border-left: 2px solid transparent;
      // 长标题（如「MobileCarousel Banner 轮播」）单行省略，避免换行撑高菜单项
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

    &:hover {
      color: var(--ui-brand-ink);
      background: var(--ui-bg-soft);
    }
    &.is-active {
      color: var(--ui-brand-ink);
      background: var(--ui-bg-tint);
      font-weight: 700;
      border-left-color: var(--ui-brand);
      border-radius: 9px;
    }
  }
}
</style>
