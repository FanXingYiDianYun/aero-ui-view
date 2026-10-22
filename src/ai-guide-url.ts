/**
 * AI 指南 URL 单源常量（PgNav header 入口 + App /ai-guide 页共用，单源防漂移）。
 * 真值 = lib 演示站 /ai-guide 页（aero-ui-view 公开仓，命名终局口径）。
 * 空值时：header 入口跳站内 /ai-guide；页内「查看完整文档」外链隐藏（v-if）。
 */
export const AI_GUIDE_URL = 'https://FanXingYiDianYun.github.io/aero-ui-view/#/ai-guide'
