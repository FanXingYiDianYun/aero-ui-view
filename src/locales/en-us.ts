/**
 * 演示站站点词包（en-us）
 */
import type { SiteMessages } from './zh-cn'

export const siteEnUs: SiteMessages = {
  nav: {
    searchPlaceholder: 'Search components…',
    expandMenuAria: 'Expand menu',
    switchToEn: { target: 'EN', title: 'Switch to English', aria: 'Switch to English' },
    switchToZh: { target: '中', title: 'Switch to Chinese', aria: 'Switch to Chinese' },
    langMenu: {
      triggerTitle: 'Choose language',
      triggerAria: 'Language selection',
      menuTitle: 'Language',
      zh: '中文',
      en: 'English',
      checkAria: 'Current language',
      num: 'EN',
    },
    aiGuide: {
      label: 'AI Skill',
      aria: 'Aero UI developer skill guide',
    },
  },
  menu: {
    title: 'Components',
    closeAria: 'Collapse menu',
    searchPlaceholder: 'Search components…',
    empty: 'No matching components',
  },
  api: {
    name: 'Name',
    type: 'Type',
    default: 'Default',
    description: 'Description',
    payload: 'Payload',
  },
  codeView: {
    stage: 'Demo',
    copyCode: 'Copy this code',
    copied: 'Copied',
    viewCode: 'View this code',
    fullSource: (component) => `${component} full source (demo/basic.vue)`,
  },
  toast: {
    demoCopied: 'Demo source copied to clipboard',
  },
  announce: {
    title: 'AeroUI Release v1.0.0 "Stratosphere" officially released 🎉',
    body: 'A beautiful, elegant, easy-to-use Vue component library Vue 3 UI library.',
    action: 'View release notes',
  },
  notFound: {
    title: 'Component not found',
    body: (q) => `No results for "${q}". Try another keyword.`,
  },
  aiGuidePage: {
    title: 'AI Skill',
    intro: 'This page helps you install the aero-vue companion AI Skill into your AI coding assistant. Once installed, your AI uses all 102 components exactly as documented, instead of inventing APIs from memory.',
    oneLiner: (u) => `Read ${u.trim() ? u : '(public repo docs URL, filled at Release)'} and follow the instructions to install the aero-vue component library and its accompanying skill for my project`,
    copyBlockLabel: 'Copy this command for your AI agent',
    quickStartLead: 'Send the line below to your AI assistant and it will handle the installation:',
    step1Title: 'Step 1 · Install the library (skip if your project already uses aero-vue)',
    step1Desc: 'The skill depends on the library itself:',
    step1Code1: 'npm i aero-vue',
    step1Follow: 'Then import styles and components in your entry file:',
    step1Code2: "import 'aero-vue/styles'\nimport { AeroButton } from 'aero-vue'",
    step2Title: 'Step 2 · Install the skill',
    step2Desc: "Once the library is installed, the skill files live in your dependencies — copy them into your AI tool's skills directory:",
    step2Code: 'cp -r node_modules/aero-vue/skills/aero-vue ~/.claude/skills/',
    step2Follow: 'Restart your AI tool and ask "which components does aero-vue have" — a correct list means the skill is live.',
    boxSizingTitle: 'Box-model note (box-sizing)',
    // Recommended global-reset code block (typeset with AeroCodeBlock)
    boxSizingCode: "*, *::before, *::after { box-sizing: border-box; }\nbody { margin: 0; }",
    // Rich-text value: <mark> rendered via safeRich whitelist; typeset with AeroTypography
    boxSizingBody:
      'We <mark>recommend</mark> using a standard global reset in your project: ' +
      'aero-vue components declare border-box element by element and show zero geometry drift in hosts with or without a global reset' +
      '<mark>— adding it or not will not break the components</mark>; ' +
      'adding it gives you a more conventional page-typography baseline (most scaffolds and AI-generated projects already ship it). ' +
      'If you hit a component geometry anomaly, <mark>upgrade aero-vue</mark> first to rule out the cause, instead of masking the problem with ad-hoc style patches.',
  },
}
