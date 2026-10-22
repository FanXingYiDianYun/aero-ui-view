/**
 * 演示站站点词包（zh-cn）—— 站点域文案（顶部栏/侧栏/组件页 API 表/代码面板/空态/通知）。
 * 组件文案走库词包（aero-vue useLocale），站点文案走本册（useSiteI18n），两层分层。
 * 规范红线：所有站点文案必须走字典键，禁止模板字符串拼接句子（带参句子用函数键）。
 */
export interface SiteMessages {
  nav: {
    searchPlaceholder: string
    expandMenuAria: string
    /** 语言切换 chip（target=目标语言码，title/aria=切换句） */
    switchToEn: { target: string; title: string; aria: string }
    switchToZh: { target: string; title: string; aria: string }
    /** 语言下拉菜单（trigger=触发器 title/aria，menuTitle/选项/勾选 aria） */
    langMenu: {
      triggerTitle: string
      triggerAria: string
      menuTitle: string
      zh: string
      en: string
      checkAria: string
      /** 触发器胶囊「当前语言」短标（zh=中 / en=EN；替代 PgNav 模板字面量） */
      num: string
    }
    /** AI 开发助手指南入口（header 链接行；label=胶囊内文，aria=title/aria-label） */
    aiGuide: {
      label: string
      aria: string
    }
  }
  menu: {
    title: string
    closeAria: string
    searchPlaceholder: string
    empty: string
  }
  api: {
    name: string
    type: string
    default: string
    description: string
    payload: string
  }
  codeView: {
    stage: string
    copyCode: string
    copied: string
    viewCode: string
    fullSource: (component: string) => string
  }
  toast: {
    demoCopied: string
  }
  announce: {
    title: string
    body: string
    action: string
  }
  notFound: {
    title: string
    body: (query: string) => string
  }
  /** R4b：AI Skill 开发助手指南页（站点级页，渲染在 AeroConfigProvider 外 → 走站点词包非库 demo 组，循 H7 判据） */
  aiGuidePage: {
    /** 页标题 */
    title: string
    /** 页简介 */
    intro: string
    /** one-liner 指令（复制块内容；W2 改插值函数：运行时填 AI_GUIDE_URL 常量当前值，
     *  禁渲染字面 {AI_GUIDE_URL} 花括号；Release 改常量即全局生效，空值显示占位说明） */
    oneLiner: (aiGuideUrl: string) => string
    /** one-liner 复制块标题（AeroCodeBlock :title，自带复制反馈态） */
    copyBlockLabel: string
    /** 快速开始引言（直接发给 AI 助手即自动完成安装） */
    quickStartLead: string
    /** 手动安装 · 第一步：标题 / 说明 / 装库代码块 / 接续说明 / 引入代码块 */
    step1Title: string
    step1Desc: string
    step1Code1: string
    step1Follow: string
    step1Code2: string
    /** 手动安装 · 第二步：标题 / 说明 / 拷贝代码块 / 接续说明 */
    step2Title: string
    step2Desc: string
    step2Code: string
    step2Follow: string
    /** box-sizing 提醒段标题 */
    boxSizingTitle: string
    /** box-sizing 推荐全局重置代码块（排版走 AeroCodeBlock，非词包内联 code 标签） */
    boxSizingCode: string
    /** box-sizing 提醒正文（推荐宿主加标准 reset，库已逐元素声明零漂移；
     * 富文本值：mark 标签经 safeRich 白名单渲染，「先升级 aero-vue 版本」= mark 高亮） */
    boxSizingBody: string
  }
}

export const siteZhCn: SiteMessages = {
  nav: {
    searchPlaceholder: '搜索组件…',
    expandMenuAria: '展开菜单',
    switchToEn: { target: 'EN', title: 'Switch to EN', aria: 'Switch to English' },
    switchToZh: { target: '中', title: 'Switch to 中', aria: 'Switch to Chinese' },
    langMenu: {
      triggerTitle: '选择语言',
      triggerAria: '语言选择',
      menuTitle: '语言',
      zh: '中文',
      en: 'English',
      checkAria: '当前语言',
      num: '中',
    },
    aiGuide: {
      label: 'AI Skill',
      aria: 'Aero UI 开发助手 skill 指南',
    },
  },
  menu: {
    title: '组件目录',
    closeAria: '收起菜单',
    searchPlaceholder: '搜索组件…',
    empty: '无匹配组件',
  },
  api: {
    name: '名称',
    type: '类型',
    default: '默认',
    description: '说明',
    payload: '载荷',
  },
  codeView: {
    stage: 'Demo',
    copyCode: '复制此代码',
    copied: '已复制',
    viewCode: '查看此代码',
    fullSource: (component) => `${component} 完整源码（demo/basic.vue）`,
  },
  toast: {
    demoCopied: 'demo 源文件已复制到剪贴板',
  },
  announce: {
    title: 'AeroUI Release v1.0.0「平流层」正式发布🎉',
    body: '一个好看、优雅、易套用的 Vue 组件库',
    action: '查看发布说明',
  },
  notFound: {
    title: '未找到组件',
    body: (q) => `搜索「${q}」无结果，试试其他关键词。`,
  },
  aiGuidePage: {
    title: 'AI Skill',
    intro: '这个页面帮助你把 aero-vue 的配套 AI Skill 安装到你的 AI 编程助手中。安装后，AI 能按照官方用法使用全部 102 个组件，而不是凭记忆编造 API。',
    oneLiner: (u) => `请阅读 ${u.trim() ? u : '（公开仓文档地址，Release 填真值）'} 并按照说明，为我的项目安装 aero-vue 组件库与配套 skill`,
    copyBlockLabel: '复制这条指令给 AI agent',
    quickStartLead: '把下面这行话直接发给你的 AI 助手，即可自动完成安装：',
    step1Title: '第一步 · 安装组件库（已在使用 aero-vue 的项目跳过本步）',
    step1Desc: 'skill 依赖组件库，先确认库已就位：',
    step1Code1: 'npm i aero-vue',
    step1Follow: '再在入口文件引入样式与组件：',
    step1Code2: "import 'aero-vue/styles'\nimport { AeroButton } from 'aero-vue'",
    step2Title: '第二步 · 安装 Skill',
    step2Desc: '组件库装好后，skill 就在你的依赖目录里，复制到 AI 工具的技能目录即可：',
    step2Code: 'cp -r node_modules/aero-vue/skills/aero-vue ~/.claude/skills/',
    step2Follow: '重启 AI 工具后，问它「aero-vue 有哪些组件」，能正确列出即安装成功。',
    boxSizingTitle: '盒模型须知（box-sizing）',
    // 推荐全局重置代码块（排版走 AeroCodeBlock）
    boxSizingCode: "*, *::before, *::after { box-sizing: border-box; }\nbody { margin: 0; }",
    // 富文本值：mark 标签经 safeRich 白名单渲染；排版走 AeroTypography
    boxSizingBody:
      '<mark>推荐</mark>在你的项目中使用标准全局重置：' +
      'aero-vue 组件已逐元素声明 border-box，在有无全局重置的宿主中均实测零几何漂移——添加与否都不会破坏组件；添加可获得更正规的页面排版基线（多数脚手架与 AI 生成项目已自带）。若遇组件几何异常，请先<mark>升级 aero-vue 版本</mark>排查，勿以临时样式补丁掩盖问题。',
  },
}
