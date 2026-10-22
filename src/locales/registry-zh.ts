/** zh-cn registry 字典（gen 脚本产出，非手写；文案列与结构册 registry-struct.ts 键序对齐） **/
export interface RegistryLocale {
  groups: string[]
  items: Record<string, {
    title: string
    desc: string
    props?: Record<string, string>
    events?: Record<string, string>
  }>
}

export const registryZh: RegistryLocale = {
  groups: ["Basic 基础", "Form 表单", "DataDisplay 数据展示", "Navigation 导航", "Feedback 反馈", "Others 配置/增强", "Mobile 移动端"],
  items: {
    "button": {
      title: "Button 按钮",
      desc: "五种类型、三档尺寸，硬阴影抬升签名交互与涟漪反馈。",
      props: {
        "type": "视觉类型",
        "size": "尺寸",
        "disabled": "禁用",
        "loading": "加载态",
        "block": "块级撑满",
        "iconOnly": "方形图标按钮",
        "ripple": "涟漪特效开关",
        "nativeType": "原生 type",
      },
      events: {
        focus: "聚焦",
        blur: "失焦",
        "click": "点击（禁用/加载时拦截）",
      },
    },
    "button-group": {
      title: "ButtonGroup 按钮组",
      desc: "首尾圆角拼接，支持水平/垂直。",
      props: {
        "vertical": "垂直排列",
      },
    },
    "action-buttons": {
      title: "ActionButtons 操作钮",
      desc: "拒绝/同意双圆钮，hover 填充位移；与 <code>ButtonGroup</code> 同属操作类按钮。",
      props: {
        "rejectTip": "左钮提示",
        "acceptTip": "右钮提示",
      },
      events: {
        "reject": "拒绝",
        "accept": "同意",
      },
    },
    "icon": {
      title: "Icon 图标",
      desc: "内置 60+ lucide 风格线性图标，<code>currentColor</code> 继承。",
      props: {
        "name": "图标名",
        "size": "尺寸",
        "stroke": "描边宽度",
      },
    },
    "icon-button": {
      title: "IconButton 图标按钮",
      desc: "<code>38px</code> 圆角图标钮，hover 位移旋转；dot 红点为 GPU 门控动画；loading 旋转 + 禁用点击。",
      props: {
        "icon": "图标",
        "disabled": "禁用",
        "loading": "加载中（禁用点击 + 旋转动画）",
        "dot": "通知红点",
        "label": "aria-label",
      },
      events: {
        "click": "点击（非 disabled/loading）",
        "focus": "聚焦",
        "blur": "失焦",
      },
    },
    "link": {
      title: "Link 链接",
      desc: "内链/外链/禁用三种态。",
      props: {
        "href": "地址",
        "external": "外链角标",
        "disabled": "禁用",
      },
    },
    "typography": {
      title: "Typography 排版",
      desc: "五级阶梯 + 西文轴 + 高亮词/贴纸盒。",
      props: {
        "level": "阶梯",
        "tag": "HTML 标签（默认按阶梯推导）",
        "en": "西文字体",
        "mono": "等宽字体",
        "highlight": "高亮词",
        "sticker": "贴纸盒",
      },
    },
    "divider": {
      title: "Divider 分割线",
      desc: "水平/垂直、实/虚线、居中标题。",
      props: {
        "vertical": "垂直",
        "dashed": "虚线",
        "title": "分隔文案",
      },
    },
    "space": {
      title: "Space 间距",
      desc: "<code>flex gap</code> 组合容器。",
      props: {
        "gap": "间距",
        "direction": "方向",
        "justify": "主轴对齐",
        "align": "交叉轴对齐",
        "wrap": "换行",
      },
    },
    "scrollbar": {
      title: "Scrollbar 滚动条",
      desc: "<code>thin</code> 滚动条容器，hover 变品牌色。",
      props: {
        "maxHeight": "最大高度",
      },
    },
    "grid": {
      title: "Grid 栅格",
      desc: "<code>N</code> 列 grid 布局容器。",
      props: {
        "cols": "列数",
        "gap": "间距",
      },
    },
    "layout": {
      title: "Layout 区块",
      desc: "<code>section</code> 语义容器，<code>1180px</code> 居中。",
      props: {
        radius: "容器圆角",
        "padding": "留白",
        "alt": "浅底",
        "maxWidth": "容器宽",
      },
    },
    "theme-switch": {
      title: "ThemeSwitch 主题开关",
      desc: "明暗切换，<code>localStorage</code> 持久化。",
      props: {
        "modelValue": "受控主题值（v-model）",
        "disabled": "禁用",
        "size": "尺寸 sm 36×20 · md 72×38 · lg 88×44",
      },
      events: {
        "update:modelValue": "主题更新",
        "change": "切换完成",
      },
    },
    "input": {
      title: "Input 输入框",
      desc: "前缀/后缀/清除/错误态，focus 品牌光晕。",
      props: {
        width: "输入框宽度",
        "modelValue": "值",
        "placeholder": "占位",
        "disabled": "禁用",
        "readonly": "只读",
        "error": "错误态",
        "prefix": "前缀",
        "suffix": "后缀",
        "type": "输入类型",
        "clearable": "清除按钮",
        "maxlength": "最大长度",
        "showCount": "显示计数",
      },
      events: {
        input: "连续输入中",
        "update:modelValue": "值变更",
        "change": "变更",
        "clear": "清空",
        "focus/blur": "焦点事件",
      },
    },
    "textarea": {
      title: "Textarea 文本域",
      desc: "可缩放多行输入，带计数。",
      props: {
        "modelValue": "值",
        "placeholder": "占位",
        "disabled": "禁用",
        "readonly": "只读",
        "error": "错误态",
        "maxlength": "最大长度",
        "showCount": "计数",
        "rows": "行数",
      },
      events: {
        "update:modelValue": "值变更",
        "focus/blur": "焦点事件",
      },
    },
    "input-number": {
      title: "InputNumber 数字输入",
      desc: "步进按钮 + <kbd>↑</kbd><kbd>↓</kbd> + 越界钳制，值变更微弹。",
      props: {
        "modelValue": "值",
        "min/max": "范围",
        "step": "步长",
        "stepStrictly": "严格步进",
        "disabled": "禁用",
        "placeholder": "占位",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "值确认",
      },
    },
    "input-tag": {
      title: "InputTag 标签输入",
      desc: "<kbd>回车</kbd>/<kbd>逗号</kbd>生成标签，退格删除末项。",
      props: {
        "modelValue": "标签数组",
        "max": "最多标签数",
        "placeholder": "占位",
        "disabled": "禁用",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "变更",
      },
    },
    "search": {
      title: "Search 搜索框",
      desc: "子序列模糊匹配 + 命中排序召回，命中 <code>mark</code> 高亮，<kbd>↑</kbd><kbd>↓</kbd>/<kbd>Enter</kbd>/<kbd>Esc</kbd> 键盘导航，支持按 <code>description</code> 分组召回；description 命中双行显示。",
      props: {
        "options": "候选数据源",
        "placeholder": "占位",
        "limit": "召回上限",
        "emptyText": "空结果提示",
        "disabled": "禁用",
        "groupBy": "分组键",
        "showOptionDesc": "结果副行开关（开=携 description 项渲染小字淡色副行；关=仅主行组件名）",
      },
      events: {
        "select": "选中项",
        "search": "每次查询的命中列表",
        "clear": "清空",
      },
    },
    "select": {
      title: "Select 选择器",
      desc: "spring 弹入菜单、键盘导航、可清空。",
      props: {
        "modelValue": "值",
        "options": "选项",
        "placeholder": "占位",
        "clearable": "可清空",
        "disabled": "禁用",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "选中变更",
      },
    },
    "cascader": {
      title: "Cascader 级联选择",
      desc: "逐级面包屑下钻，选中路径回显。",
      props: {
        "modelValue": "路径",
        "options": "级联数据",
        "placeholder": "占位",
        "disabled": "禁用",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "选中变更",
      },
    },
    "tree-select": {
      title: "TreeSelect 树选择",
      desc: "树形面板 + 展开控制。",
      props: {
        "data": "树数据",
        "modelValue": "选中 key",
        "placeholder": "占位",
        "disabled": "禁用",
        "defaultExpandAll": "默认全展开",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "选中变更",
      },
    },
    "date-picker": {
      title: "DatePicker 日期选择",
      desc: "月历面板，今日描边、选中硬阴影倾斜块。",
      props: {
        "modelValue": "日期",
        "placeholder": "占位",
        "disabled": "禁用",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "确认变更",
      },
    },
    "time-picker": {
      title: "TimePicker 时间选择",
      desc: "双列滚轮（时/分），分钟步进 <code>5</code>。",
      props: {
        "modelValue": "时间",
        "placeholder": "占位",
        "disabled": "禁用",
        "minuteStep": "分钟步长",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "确认变更",
      },
    },
    "checkbox": {
      title: "Checkbox 复选",
      desc: "spring 内块缩放，组内注入。",
      props: {
        "modelValue": "值",
        "value": "组内取值",
        "disabled": "禁用",
      },
      events: {
        focus: "聚焦",
        blur: "失焦",
        "change": "状态变化",
      },
    },
    "radio": {
      title: "Radio 单选",
      desc: "spring 圆点缩放。",
      props: {
        modelValue: "选中值",
        "value": "取值",
        "disabled": "禁用",
      },
      events: {
        "change": "选中变更",
      },
    },
    "switch": {
      title: "Switch 开关",
      desc: "spring 圆钮位移。",
      props: {
        "modelValue": "值",
        "disabled": "禁用",
      },
      events: {
        focus: "聚焦",
        blur: "失焦",
        "change": "切换",
      },
    },
    "slider": {
      title: "Slider 滑块",
      desc: "气泡预览 + 刻度行 + 填充轨道，<code>thumb</code> 旋转 hover。",

      events: {
        "update:modelValue": "拖动中值变更",
        change: "松手确认值",
        focus: "聚焦",
        blur: "失焦",
      },      props: {
        disabled: "禁用",
        "modelValue": "值",
        "min/max": "范围",
        "step": "步长",
        "showScale": "刻度",
        "startLabel/endLabel": "两端文案",
        "unit": "单位",
      },
    },
    "rate": {
      title: "Rate 评分",
      desc: "悬停预览、确认后星星 <code>popIn</code> 弹跳。",

      events: {
        "update:modelValue": "评分时值变更",
        change: "评分确认",
      },      props: {
        confetti: "确认评分时礼花特效",
        allowDecimal: "一位小数评级（粒度 0.1）",
        allowReselect: "首评后允许重选（缺省锁定）",
        "modelValue": "值",
        "count": "星数",
        "disabled": "只读",
        "animate": "弹跳动画",
      },
    },
    "color-picker": {
      title: "ColorPicker 颜色选择",
      desc: "自绘 <code>SV</code> 拾取区 + 色相条 + <code>HEX</code> 手输 + 预设色板。",
      props: {
        "modelValue": "色值",
        "presets": "色板（null 隐藏）",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "确认变更",
      },
    },
    "upload": {
      title: "Upload 上传",
      desc: "拖拽区 + 文件列表，大小格式化。",
      props: {
        disabled: "禁用",
        limit: "最多文件数（0/缺省不限）",
        name: "表单字段名（透传）",
        withCredentials: "是否携带凭证（透传）",
        showFileList: "关闭文件列表渲染",
        listType: "列表样式",
        tip: "拖拽区/按钮下提示文案",
        beforeUpload: "选择后逐文件执行钩子",
        beforeRemove: "移除前取消钩子",
        "modelValue": "文件列表",
        "drag": "拖拽模式",
        "multiple": "多选",
        "accept": "MIME 过滤",
      },
      events: {
        "update:modelValue": "文件列表变更",
        exceed: "达 limit 超出部分",
        preview: "点击列表项预览",
        upload: "选择文件（用户侧上传）",
        success: "标记完成自动回报",
        progress: "进度变更自动回报",
        error: "标记失败自动回报",
        "change": "选择",
        "remove": "移除",
      },
    },
    "transfer": {
      title: "Transfer 穿梭框",
      desc: "双列表 + 勾选批量转移。",
      props: {
        "data": "数据",
        "modelValue": "目标 keys",
        "titles": "标题",
        "disabled": "禁用",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "变更",
      },
    },
    "autocomplete": {
      title: "Autocomplete 自动补全",
      desc: "前缀匹配 + 高亮命中段 + 键盘导航。",
      props: {
        disabled: "禁用输入",
        "modelValue": "值",
        "suggestions": "建议集",
        "placeholder": "占位",
      },
      events: {
        "update:modelValue": "值更新",
        "select": "选中建议",
      },
    },
    "mention": {
      title: "Mention 提及",
      desc: "<kbd>@</kbd> 触发成员浮层，光标回填。",
      props: {
        "modelValue": "正文",
        "options": "成员",
        "placeholder": "占位",
        "trigger": "触发符",
      },
      events: {
        "update:modelValue": "值更新",
        "select": "选中选项",
      },
    },
    "otp": {
      title: "OTP 验证码",
      desc: "分格输入、自动跳格、粘贴分发。",
      props: {
        disabled: "禁用",
        "modelValue": "值",
        "length": "格数",
        "numeric": "数字模式",
      },
      events: {
        "update:modelValue": "值变更",
        "complete": "填满",
      },
    },
    "form": {
      title: "Form 表单",
      desc: "结构化表单 + 必填校验提示。",
      props: {
        "submit": "提交处理（D6 改名：onSubmit→submit）",
        "AeroFormItem.label": "标签文字",
        "AeroFormItem.required": "必填标记",
        "AeroFormItem.hint/error": "提示/错误文字",
      },
      events: {
        "submit": "表单提交",
      },
    },
    "table": {
      title: "Table 表格",
      desc: "<code>mono</code> 列、行 hover、具名单元格插槽。",
      props: {
        "columns": "列定义",
        "data": "数据",
        "emptyText": "空态文案",
      },
    },
    "tree": {
      title: "Tree 树",
      desc: "缩进导轨 + 展开旋转箭头 + 勾选。",
      props: {
        "data": "数据",
        "expanded": "展开 keys（受控）",
        "checked": "已勾选（受控）",
        "activeKey": "选中",
        "checkable": "复选",
        "defaultExpandAll": "默认全展开",
        "includeParents": "勾选集合含父节点",
      },
      events: {
        "update:expanded": "展开更新",
        "update:checked": "勾选更新",
        "select": "选中节点",
      },
    },
    "timeline": {
      title: "Timeline 时间线",
      desc: "虚线导轨、节点旋转、卡片位移脉冲。",
      props: {
        "items": "条目",
      },
    },
    "tag": {
      title: "Tag 码标签",
      desc: "<code>mono</code> 浅底小标签。",
      props: {
        "accent": "品牌实底",
      },
    },
    "badge": {
      title: "Badge 徽章",
      desc: "七种类型 + 前置圆点，hover 旋转放大。",
      props: {
        "type": "类型",
        "dot": "前置圆点",
      },
    },
    "avatar": {
      title: "Avatar 头像",
      desc: "六色配板、多尺寸 <code>28-128px</code>、图片回退文字。",
      props: {
        alt: "图片加载失败回退文字",
        shape: "头像形状",
        fit: "图片填充方式",
        "tone": "配板1-6",
        "size": "尺寸",
        "src": "图片",
      },
    },
    "avatar-group": {
      title: "AvatarGroup 头像组",
      desc: "负边距叠放，hover 浮起置顶。",
      props: {
        "total": "总数",
        "max": "显示上限",
        "size": "尺寸",
      },
    },
    "cropper": {
      title: "Cropper 头像裁剪器",
      desc: "取框式裁剪：拖移动/角缩放/边旋转，多尺寸圆形导出（<code>canvas</code> 仿射链与预览同向）。",
      props: {
        labels: "工具栏文案（i18n 覆盖）",
        "exportSizes": "导出尺寸档",
        "shape": "裁取形状",
        "minSize": "框最小边长",
        "maxSize": "框最大边长",
        "disabled": "禁用",
        "view": "视窗边长",
      },
      events: {
        "change": "框状态变更",
        "export": "导出完成（url+blob 多档）",
        "error": "图片加载失败",
      },
    },
    "card": {
      title: "Card 卡片",
      desc: "hover 抬升 + <code>7px</code> 硬阴影。",
      props: {
        width: "宽度（px 或 CSS 值）",
        minHeight: "最小高度（px 或 CSS 值）",
        "hoverable": "悬停交互",
        "paddingless": "去内边距",
      },
    },
    "carousel": {
      title: "Carousel 轮播",
      desc: "拖拽 + 自动播放（离屏暂停）+ 胶囊点。",

      events: {
        change: "索引变化（自动/拖拽/手动）",
      },      props: {
        "slides": "幻灯",
        "interval": "自动播放间隔 ms（0 关闭）",
      },
    },
    "collapse": {
      title: "Collapse 折叠面板",
      desc: "<code>grid-rows</code> <code>0fr</code>→<code>1fr</code> 展开动画。",
      props: {
        "items": "面板",
        "modelValue": "展开项",
        "accordion": "手风琴（仅展开一项）",
      },
      events: {
        "update:modelValue": "展开项更新",
      },
    },
    "descriptions": {
      title: "Descriptions 描述列表",
      desc: "<code>label</code>/<code>value</code> 网格 + 跨列。",
      props: {
        "data": "数据对象",
        "items": "字段列表",
        "column": "每行列数",
        "bordered": "边框",
        "title": "标题",
      },
    },
    "empty": {
      title: "Empty 空状态",
      desc: "毛玻璃虚线框 + 云朵插画 + 操作区。",
      props: {
        "hint": "标题",
      },
    },
    "image": {
      title: "Image 图片",
      desc: "懒加载、失败回退占位、预览 hover + 内置查看器。",
      props: {
        "src": "图片地址",
        "alt": "替代文字",
        "width/height": "宽高",
        "radius": "圆角档",
        "preview": "点击放大",
        "fit": "填充模式",
      },
      events: {
        "preview": "点击预览时传出 src",
      },
    },
    "image-viewer": {
      title: "ImageViewer 图片查看",
      desc: "全屏遮罩 + <kbd>←</kbd><kbd>→</kbd> 翻页。",

      events: {
        "update:modelValue": "查看器关闭",
      },      props: {
        "modelValue": "开关",
        "urlList": "图片集",
        "initial": "初始索引",
      },
    },
    "pagination": {
      title: "Pagination 分页",
      desc: "窗口页码 + 当前页倾斜硬阴影。",
      props: {
        jumper: "页码跳转输入框",
        "modelValue": "页码",
        "total": "总数",
        "pageSize": "每页",
      },
      events: {
        "update:modelValue": "页码值变更",
        "change": "翻页",
      },
    },
    "progress": {
      title: "Progress 进度条",
      desc: "流光 <code>shimmer</code>（可关）+ 状态色；<code>draggable</code> 内置主题化滑块（<code>v-model</code>）。",
      props: {
        "percent": "百分比 0-100（v-model）",
        "shimmer": "流光效果",
        "status": "状态色",
        "showText": "显示百分比文字",
        "draggable": "可交互滑块",
      },
      events: {
        "update:percent": "滑块拖动更新",
      },
    },
    "ring-progress": {
      title: "RingProgress 环形进度",
      desc: "<code>SVG</code> 描边动画 + 中心数字；<code>draggable</code> 沿环拖拽圆钮（<code>v-model</code>）。",
      props: {
        width: "环粗细",
        "percent": "百分比（v-model）",
        "label": "中心主文字",
        "sublabel": "中心小字",
        "size": "整体尺寸 px",
        "stroke": "描边宽度",
        "draggable": "可交互拖拽",
      },
      events: {
        "update:percent": "拖拽更新",
      },
    },
    "result": {
      title: "Result 结果页",
      desc: "状态大图标 + 标题描述 + 操作区。",
      props: {
        "status": "状态",
        "title": "标题",
        "desc": "描述",
      },
    },
    "segmented": {
      title: "Segmented 分段器",
      desc: "胶囊滑动指示（bill-switch 同源）。",
      props: {
        "modelValue": "值",
        "options": "选项",
        "disabled": "禁用",
        "block": "每项等宽撑满",
      },
      events: {
        "update:modelValue": "值更新",
        "change": "变更",
      },
    },
    "skeleton": {
      title: "Skeleton 骨架屏",
      desc: "<code>text</code>/<code>circle</code>/<code>rect</code> 骨架 + <code>shimmer</code>。",
      props: {
        "variant": "变体形状",
        "height": "text 行高 px",
        "width": "宽度",
        "loading": "加载态",
        "animated": "shimmer 动画",
      },
    },
    "spinner": {
      title: "Spinner 转圈加载",
      desc: "三档尺寸（<code>sm</code>/<code>md</code>/<code>lg</code>）环形 spinner，<code>role=status</code> + <code>aria-label</code>。",
      props: {
        "size": "尺寸",
      },
    },
    "statistic": {
      title: "Statistic 统计数值",
      desc: "<code>easeOutCubic</code> 数字滚动。",
      props: {
        "value": "数值",
        "prefix": "前缀",
        "suffix": "后缀",
        "label": "标签",
        "animated": "滚动动画",
      },
    },
    "qrcode": {
      title: "QRCode 二维码",
      desc: "<code>ISO/IEC 18004</code> 无依赖完整编码（<code>RS</code> 纠错 + <code>8</code> 掩码择优），<code>SVG</code> 矩阵渲染；<code>fg</code> 未传时取 <code>var(--ui-ink)</code> 计算值（主题切换自动重绘）。",
      props: {
        "value": "内容",
        "size": "输出尺寸 px",
        "margin": "静区（模块数）",
        "fg": "前景色（传值覆盖）",
        "bg": "背景色",
        "level": "纠错级别",
      },
    },
    "watermark": {
      title: "Watermark 水印",
      desc: "<code>Canvas</code> 平铺文字水印，独立 <code>::before</code> 层不挡交互。",
      props: {
        maxWidth: "最大宽度（px 或 CSS 值）",
        radius: "圆角（px 或 CSS 值）",
        "content": "水印文字",
        "rotate": "旋转角度",
        "gap": "平铺间隔 px",
        "fontSize": "字号",
        "opacity": "透明度",
      },
    },
    "terminal": {
      title: "Terminal 终端",
      desc: "打字机逐行输出 + 光标闪烁。",
      props: {
        "lines": "行序列",
        "typeSpeed": "字速 ms/字符",
        "lineDelay": "行间停顿 ms",
        "title": "窗口标题",
      },
      events: {
        "done": "全部行输出完成",
      },
    },
    "code-block": {
      title: "CodeBlock 代码块",
      desc: "2px 描边代码窗：逐行极简语法高亮（<code>highlight</code>）、行号（<code>lineNumbers</code>）、一键复制（<code>copyable</code>）、可折叠（<code>collapsible</code>）。",

      events: {
        "update:open": "折叠开关变化",
      },      props: {
        "code": "源码",
        "lang": "语言标签",
        "title": "窗标题",
        "highlight": "高亮",
        "lineNumbers": "行号",
        "copyable": "复制钮",
        "flush": "嵌入态去壳",
        "collapsible": "可折叠",
        "open": "折叠显隐 v-model",
      },
    },
    "menu": {
      title: "Menu 导航菜单",
      desc: "水平胶囊滑动 / 垂直侧栏高亮。",

      events: {
        "update:modelValue": "选中项变更",
        select: "点击菜单项",
        focus: "聚焦",
        blur: "失焦",
        "update:collapsed": "折叠态变更（v-model:collapsed）",
      },      props: {
        width: "侧栏宽度（vertical 模式）",
        collapsed: "折叠态（纯样式态）",
        "items": "项",
        "modelValue": "激活",
        "mode": "方向",
      },
    },
    "tabs": {
      title: "Tabs 标签页",
      desc: "滑块指示条 spring 跟随。",
      props: {
        "modelValue": "激活",
        "tabs": "标签",
      },
      events: {
        "update:modelValue": "选项卡选中变更",
        "change": "切换",
      },
    },
    "breadcrumb": {
      title: "Breadcrumb 面包屑",
      desc: "箭头分隔、末项加粗。",
      props: {
        "items": "项",
      },
    },
    "dropdown": {
      title: "Dropdown 下拉菜单",
      desc: "图标+描述+分隔线+危险项。",
      props: {
        "items": "菜单项",
        "align": "对齐",
      },
      events: {
        "select": "选中",
      },
    },
    "steps": {
      title: "Steps 步骤条",
      desc: "<code>done</code>/<code>active</code> 状态卡，可点击切换。",
      props: {
        "items": "步骤",
        "current": "当前",
      },
      events: {
        "change": "点击切换",
      },
    },
    "page-header": {
      title: "PageHeader 页头",
      desc: "返回钮 + 标题副题 + 操作区。",
      props: {
        "title": "标题",
        "subtitle": "副题",
        "back": "返回钮",
      },
      events: {
        "back": "返回",
      },
    },
    "anchor": {
      title: "Anchor 锚点",
      desc: "滚动 <code>spy</code> 左侧竖线高亮，容器内滚动按容器基准换算判定线。",
      props: {
        "items": "锚点",
        "container": "滚动容器选择器",
        "offset": "高亮判定上偏移",
      },
    },
    "affix": {
      title: "Affix 固钉",
      desc: "滚动过阈值即吸附顶部（默认 <code>76px</code>，让出 <code>sticky</code> 导航）；<code>target</code> 指定滚动容器。",
      props: {
        anchor: "吸附基准元素",
        gutter: "基准与吸附按钮间距",
        "offsetTop": "触发阈值",
        "top": "吸附距顶间距",
        "target": "滚动容器",
      },
      events: {
        "change": "吸附状态变更",
      },
    },
    "back-top": {
      title: "BackTop 返回顶部",
      desc: "滚动出现、hover 旋转；<code>target</code> 选择器指定滚动容器（演示页 <code>.pg-main</code>，EP 惯例；移动端内部滚动容器传选择器）。",
      props: {
        "threshold": "出现阈值",
        "right/bottom": "定位",
        "target": "滚动容器选择器（EP 惯例）",
      },
    },
    "tour": {
      title: "Tour 导览",
      desc: "高亮框 + 遮罩 + 步骤气泡。",
      props: {
        "steps": "步骤",
        "modelValue": "开关（受控）",
      },
      events: {
        "update:modelValue": "受控更新",
        "finish": "完成导览",
      },
    },
    "dialog": {
      title: "Dialog 对话框",
      desc: "<code>scale</code>+<code>rotate</code> spring 弹入，<kbd>Esc</kbd> 关闭。",
      props: {
        "modelValue": "开关",
        "title": "标题",
        "width": "宽",
        "maskClosable": "点遮罩关",
        "blurMask": "毛玻璃遮罩",
      },
      events: {
        "update:modelValue": "受控更新",
        "close": "关闭触发",
      },
    },
    "drawer": {
      title: "Drawer 抽屉",
      desc: "右侧滑入。",
      props: {
        "modelValue": "开关",
        "title": "标题",
        "width": "宽",
        "maskClosable": "点遮罩关",
      },
      events: {
        "update:modelValue": "受控更新",
        "close": "关闭触发",
      },
    },
    "message-box": {
      title: "MessageBox 确认框",
      desc: "命令式 <code>Promise</code> API：<code>AeroMessageBox.confirm(opts)</code>。",
      props: {
        "confirm().message": "正文",
        "confirm().title": "标题",
        "confirm().confirmText/cancelText": "按钮文案",
        "confirm().danger": "危险样式",
      },
      events: {
        "confirm() → Promise<boolean>": "true=确认 / false=取消",
      },
    },
    "notification": {
      title: "Notification 通知",
      desc: "命令式 API：<code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>，顶部居中堆叠。",
      props: {
        "show().type": "类型",
        "show().title": "标题",
        "show().message": "正文",
        "show().duration": "停留 ms（0 不自动关）",
      },
      events: {
        "success/error/warn/info(title,message?)": "快捷弹出",
        "show(opts)": "自定义弹出",
      },
    },
    "alert": {
      title: "Alert 警告",
      desc: "四语义色 + 可关闭。",
      props: {
        "type": "类型",
        "title": "标题",
        "closable": "可关闭",
      },
      events: {
        "close": "关闭按钮点击",
      },
    },
    "loading": {
      title: "Loading 加载",
      desc: "容器覆盖层 + <code>spinner</code> + 毛玻璃。",
      props: {
        "loading": "加载态",
        "tip": "文字",
      },
    },
    "popover": {
      title: "Popover 气泡",
      desc: "<code>hover</code>/<code>click</code> 触发，上/下/右三方位。",
      props: {
        "trigger": "触发",
        "placement": "方位",
        "title": "标题",
        "width": "最小宽",
        "open": "受控显隐",
      },
      events: {
        "update:open": "受控更新",
      },
    },
    "popconfirm": {
      title: "Popconfirm 气泡确认",
      desc: "点击触发确认气泡。",
      props: {
        "title": "确认标题",
        "confirmText": "确认文案",
        "cancelText": "取消文案",
        "danger": "危险样式",
      },
      events: {
        "confirm": "确认",
        "cancel": "取消",
      },
    },
    "tooltip": {
      title: "Tooltip 提示",
      desc: "<code>fixed</code> 定位、滚动重定位、上下箭头。",
      props: {
        "content": "文字",
        "placement": "方位",
      },
    },
    "toast": {
      title: "Toast 轻提示",
      desc: "命令式 API：<code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>，右上角堆叠 + 倒计时条。",
      props: {
        "show().type": "类型",
        "show().message": "文案",
        "show().duration": "停留 ms",
      },
      events: {
        "success/error/warn/info(msg, opts?)": "快捷弹出",
        "show(opts)": "自定义弹出",
      },
    },
    "announce": {
      title: "Announce 通知横幅",
      desc: "顶部通知横幅，<code>max-height</code> 收起过渡不跳页；关闭为会话级，<code>v-model:open</code> 可重新显示；<code>marquee</code> 自适应跑马灯。",
      props: {
        actionHref: "action 槽链接目标",
        "icon": "图标",
        "open": "受控显隐（v-model:open）",
        "storageKey": "显式传入才记忆关闭态",
        "animated": "收起过渡",
        "marquee": "跑马灯（仅内容溢出才滚动，false 禁用）",
      },
      events: {
        "close": "关闭开始",
        "closed": "收起完成",
        "update:open": "显隐更新",
      },
    },
    "chip": {
      title: "Chip 可关闭标签",
      desc: "pill 标签 + 旋转关闭钮。",
      props: {
        "closable": "可关闭",
        "active": "选中态",
      },
      events: {
        "close": "关闭",
      },
    },
    "config-provider": {
      title: "ConfigProvider 配置注入",
      desc: "主题/预设/命名空间包裹注入。",
      props: {
        locale: "组件文案语言",
        "theme": "主题",
        "preset": "预设",
        "namespace": "命名空间",
      },
    },
    "theme-provider": {
      title: "ThemeProvider 主题响应",
      desc: "响应式绑定 <code>useTheme</code> 状态。",
      props: {
        scoped: "作用域模式（仅容器变量）",
        "theme": "主题",
        "preset": "预设",
        "brand": "自定义品牌色",
      },
    },
    "motion-presets": {
      title: "MotionPresets 动效预设",
      desc: "六种循环动效，<code>animated</code> 门控（<code>GPU</code> 隔离方案）。",
      props: {
        "name": "动效",
        "animated": "启用动画",
        "duration": "时长",
      },
    },
    "dot-field": {
      title: "DotField 点阵背景",
      desc: "<code>Canvas</code> 点阵（<code>dot</code>/<code>x</code>/<code>diamond</code>/<code>ring</code>），流光态为品牌色单色相余弦波带缓慢漂移（克制不花哨），离屏暂停。",
      props: {
        color: "点色（缺省 --ui-dot）",
        "shape": "形状",
        "density": "点距",
        "flow": "品牌色流光",
        "speed": "速度",
      },
    },
    "iridescent-threads": {
      title: "IridescentThreads 虹彩丝线",
      desc: "环境氛围背景装饰（非迪斯科灯球）：<code>6–8</code> 条低透明曲线，颜色从 <code>--ui-brand</code> 派生（brand+两邻近 <code>hue</code>），两层（清晰层 + <code>blur(6px)</code> 光晕层），<code>24–40s</code> 缓慢循环，<code>prefers-reduced-motion</code> 静止。",
      props: {
        "count": "丝线数量（6–8）",
        "cycle": "漂移周期 s（24–40）",
        "hueShift": "色相偏移",
        "opacity": "不透明度倍率",
      },
    },
    "parallax-box": {
      title: "ParallaxBox 视差漂浮几何",
      desc: "Hero 同款：指针视差跟随、点击图形旋转，GPU 门控。",
      props: {
        "height": "区高",
        "hint": "提示文案",
      },
    },
    "marquee": {
      title: "Marquee 跑马灯",
      desc: "品牌行/大字带两种模式，hover 暂停、<code>reduced-motion</code> 降级。",
      props: {
        "variant": "模式",
        "caption": "提示文案",
        "items": "内容",
        "duration": "周期s",
        "pauseOnHover": "hover 暂停",
      },
    },
    "party-fx": {
      title: "PartyFx 礼花特效",
      desc: "<code>WAAPI</code> 事件驱动礼花：环 + 🎉 + <code>32</code> 彩带 + 星芒，<code>reduced-motion</code> 静默；Rate 确认评分时自动触发。",
    },
    "phone": {
      title: "Phone 手机壳",
      desc: "<code>46px</code> 圆角深色外壳 + <code>notch</code> + 状态栏，hover 微浮旋转；内部承载移动端组件。",
      props: {
        "time": "状态栏时间",
        "title": "标题",
        "subtitle": "副标题",
      },
    },
    "mobile-carousel": {
      title: "MobileCarousel Banner 轮播",
      desc: "拖拽切页（<code>rubber-band</code>）+ 自动播放进度条 + 圆点。",
      props: {
        "slides": "轮播数据",
        "interval": "自动播放间隔ms(0关)",
      },
      events: {
        "change": "切换索引",
      },
    },
    "mobile-stat-card": {
      title: "MobileStatCard 数据卡",
      desc: "标签 + <code>mono</code> 大数字 + <code>spark</code> 迷你图表（折线/柱状）。",
      props: {
        "label": "标签",
        "value": "主数值",
        "chart": "迷你图表类型",
        "points": "折线坐标",
        "bars": "柱状数据",
        "mainColor": "线色是否主色",
      },
    },
    "mobile-tab-bar": {
      title: "MobileTabBar 底部标签栏",
      desc: "滑动胶囊指示条 + 图标 <code>popIn</code>。",
      props: {
        "items": "标签项",
        "modelValue": "当前索引",
      },
      events: {
        "update:modelValue": "选项卡选中变更",
        "change": "切换",
      },
    },
    "swipe-deck": {
      title: "SwipeDeck 拖动卡片组",
      desc: "顶卡拖拽（旋转 + 部署/回滚章显隐），<code>>110px</code> 飞出；<code>loop</code> 循环补位或划掉销毁，支持动态插入/移除（<code>FLIP</code> 入场）；<code>bare</code> 模式去除默认排版（对齐 PrimeVue unstyled）。",
      props: {
        "cards": "卡片数据",
        "loop": "划掉回队尾；false 划掉即销毁",
        "bare": "素面模式（去除默认卡片排版，插槽内容即卡片）",
      },
      events: {
        "deploy": "右滑部署",
        "rollback": "左滑回滚",
        "emptied": "销毁模式下牌组清空",
      },
    },
    "slide-go": {
      title: "SlideGo 滑动解锁",
      desc: "拖动旋钮到最右完成：<code>fill</code> 跟随 + <code>squish</code> 完成动画 + 自动回位；<code>autoReset</code> 完成后 <code>600ms</code> 回位。",
      props: {
        width: "宽度（px 或 CSS 值）",
        "text": "文案",
        "doneText": "完成文案",
        "autoReset": "完成后 600ms 自动回位 + 重置锁",
      },
      events: {
        "done": "完成",
      },
    },
    "sort-list": {
      title: "SortList 拖动排序",
      desc: "指针跟随（挂 <code>body</code> 免受 <code>transform</code> 影响）+ <code>FLIP</code> 过渡 + 闪烁占位。",
      props: {
        width: "列表宽度（px 或 CSS 值）",
        "items": "列表数据",
      },
      events: {
        "sorted": "新顺序",
      },
    },
    "bottom-sheet": {
      title: "BottomSheet 底部抽屉",
      desc: "默认收起 <code>58px</code> 把手，拖拽/点击切换，<code>spring</code> 回弹。",
      props: {
        bgTitle: "背景占位文案（缺省取词包）",
        bgHint: "背景占位提示文案",
        "title": "抽屉标题",
        "rows": "行数据",
        "open": "初始展开",
      },
      events: {
        "update:open": "展开开关变化",
        "change": "开合",
      },
    },
    "knob": {
      title: "Knob 拖动旋钮",
      desc: "<code>270°</code> 扫描弧 <code>atan2</code> 换算，release <code>WAAPI</code> 弹跳。",
      props: {
        "modelValue": "值",
        "min/max/step": "范围",
        "unit": "单位",
      },
      events: {
        "update:modelValue": "拖动值变更",
        "change": "松手值",
      },
    },
    "pull-to-refresh": {
      title: "PullToRefresh 下拉刷新",
      desc: "滚动至顶按住下拉：指示器跟手旋转，释放刷新 + 条目交错淡入。",
      props: {
        width: "容器宽度（px 或 CSS 值）",
        height: "容器高度（px 或 CSS 值）",
        "items": "列表数据",
        "duration": "刷新时长ms",
        "damping": "阻尼",
      },
      events: {
        "refresh": "触发刷新",
      },
    },
  }
}