/** en-us registry dict (generated, not hand-edited; text columns keyed against registry-struct.ts order) **/
export interface RegistryLocale {
  groups: string[]
  items: Record<string, {
    title: string
    desc: string
    props?: Record<string, string>
    events?: Record<string, string>
  }>
}

export const registryEn: RegistryLocale = {
  groups: ["Basic", "Form", "DataDisplay", "Navigation", "Feedback", "Others", "Mobile"],
  items: {
    "button": {
      title: "Button",
      desc: "Five types, three sizes; hard-shadow lift as the signature interaction plus ripple feedback.",
      props: {
        "type": "visual type",
        "size": "size",
        "disabled": "disabled",
        "loading": "loading",
        "block": "block fill",
        "iconOnly": "square icon button",
        "ripple": "ripple toggle",
        "nativeType": "native type",
      },
      events: {
        focus: "focus",
        blur: "blur",
        "click": "click (blocked when disabled/loading)",
      },
    },
    "button-group": {
      title: "ButtonGroup",
      desc: "First/last rounded joins; horizontal/vertical.",
      props: {
        "vertical": "vertical layout",
      },
    },
    "action-buttons": {
      title: "ActionButtons",
      desc: "Reject/accept dual round buttons, hover fill & shift; sibling of <code>ButtonGroup</code> in the action family.",
      props: {
        "rejectTip": "left button tip",
        "acceptTip": "right button tip",
      },
      events: {
        "reject": "Reject",
        "accept": "Accept",
      },
    },
    "icon": {
      title: "Icon",
      desc: "60+ built-in lucide-style line icons, inheriting <code>currentColor</code>.",
      props: {
        "name": "icon name",
        "size": "size",
        "stroke": "stroke width",
      },
    },
    "icon-button": {
      title: "IconButton",
      desc: "<code>38px</code> rounded icon button, hover shift-rotate; dot red badge is a GPU-gated animation; loading spin + clicks disabled.",
      props: {
        "icon": "icon",
        "disabled": "disabled",
        "loading": "loading (clicks blocked + spin)",
        "dot": "notification dot",
        "label": "aria-label",
      },
      events: {
        "click": "click (not disabled/loading)",
        "focus": "focus",
        "blur": "blur",
      },
    },
    "link": {
      title: "Link",
      desc: "Internal/external/disabled states.",
      props: {
        "href": "URL",
        "external": "external link badge",
        "disabled": "disabled",
      },
    },
    "typography": {
      title: "Typography",
      desc: "Five-level scale + Latin axis + highlight word/sticker box.",
      props: {
        "level": "scale",
        "tag": "HTML tag (derived from scale by default)",
        "en": "Latin font",
        "mono": "monospace font",
        "highlight": "highlight word",
        "sticker": "sticker box",
      },
    },
    "divider": {
      title: "Divider",
      desc: "Horizontal/vertical, solid/dashed, centered title.",
      props: {
        "vertical": "vertical",
        "dashed": "dashed",
        "title": "separator text",
      },
    },
    "space": {
      title: "Space",
      desc: "<code>flex gap</code> composite container.",
      props: {
        "gap": "gap",
        "direction": "direction",
        "justify": "main-axis align",
        "align": "cross-axis align",
        "wrap": "wrap",
      },
    },
    "scrollbar": {
      title: "Scrollbar",
      desc: "<code>Thin</code> scrollbar container, brand-colored on hover.",
      props: {
        "maxHeight": "max height",
      },
    },
    "grid": {
      title: "Grid",
      desc: "<code>N</code>-column grid layout container.",
      props: {
        "cols": "columns",
        "gap": "gap",
      },
    },
    "layout": {
      title: "Layout",
      desc: "<code>section</code> semantic container, centered at <code>1180px</code>.",
      props: {
        radius: "container radius",
        "padding": "padding",
        "alt": "light base",
        "maxWidth": "container width",
      },
    },
    "theme-switch": {
      title: "ThemeSwitch",
      desc: "Light/dark toggle, persisted in <code>localStorage</code>.",
      props: {
        "modelValue": "controlled theme value (v-model)",
        "disabled": "disabled",
        "size": "size sm 36×20 · md 72×38 · lg 88×44",
      },
      events: {
        "update:modelValue": "theme update",
        "change": "toggled",
      },
    },
    "input": {
      title: "Input",
      desc: "Prefix/suffix/clear/error state, brand halo on focus.",
      props: {
        width: "input width",
        "modelValue": "value",
        "placeholder": "placeholder",
        "disabled": "disabled",
        "readonly": "read-only",
        "error": "error state",
        "prefix": "prefix",
        "suffix": "suffix",
        "type": "input type",
        "clearable": "clear button",
        "maxlength": "max length",
        "showCount": "show count",
      },
      events: {
        input: "continuous typing",
        "update:modelValue": "value change",
        "change": "change",
        "clear": "clear",
        "focus/blur": "focus/blur",
      },
    },
    "textarea": {
      title: "Textarea",
      desc: "Resizable multi-line input with counter.",
      props: {
        "modelValue": "value",
        "placeholder": "placeholder",
        "disabled": "disabled",
        "readonly": "read-only",
        "error": "error state",
        "maxlength": "max length",
        "showCount": "count",
        "rows": "rows",
      },
      events: {
        "update:modelValue": "value change",
        "focus/blur": "focus/blur",
      },
    },
    "input-number": {
      title: "InputNumber",
      desc: "Step buttons + <kbd>↑</kbd><kbd>↓</kbd> + out-of-range clamping, value change micro-bounce.",
      props: {
        "modelValue": "value",
        "min/max": "range",
        "step": "step",
        "stepStrictly": "strict step",
        "disabled": "disabled",
        "placeholder": "placeholder",
      },
      events: {
        "update:modelValue": "value update",
        "change": "value confirmed",
      },
    },
    "input-tag": {
      title: "InputTag",
      desc: "<kbd>Enter</kbd>/<kbd>comma</kbd> create tags, backspace removes the last one.",
      props: {
        "modelValue": "tag array",
        "max": "max tag count",
        "placeholder": "placeholder",
        "disabled": "disabled",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change",
      },
    },
    "search": {
      title: "Search",
      desc: "Subsequence fuzzy match + ranked recall, <code>mark</code>-highlighted hits, <kbd>↑</kbd><kbd>↓</kbd>/<kbd>Enter</kbd>/<kbd>Esc</kbd> keys, optional grouping by <code>description</code>; description hits render on two lines.",
      props: {
        "options": "candidate source",
        "placeholder": "placeholder",
        "limit": "recall cap",
        "emptyText": "empty-result hint",
        "disabled": "disabled",
        "groupBy": "group key",
        "showOptionDesc": "toggle description sub-row (on = render dimmed sub-line for options with description; off = main label only)",
      },
      events: {
        "select": "selected item",
        "search": "hit list per query",
        "clear": "clear",
      },
    },
    "select": {
      title: "Select",
      desc: "Spring pop-in menu, keyboard nav, clearable.",
      props: {
        "modelValue": "value",
        "options": "options",
        "placeholder": "placeholder",
        "clearable": "clearable",
        "disabled": "disabled",
      },
      events: {
        "update:modelValue": "value update",
        "change": "selection changed",
      },
    },
    "cascader": {
      title: "Cascader",
      desc: "Drill down with per-level breadcrumbs; the selected path is echoed back.",
      props: {
        "modelValue": "path",
        "options": "cascade data",
        "placeholder": "placeholder",
        "disabled": "disabled",
      },
      events: {
        "update:modelValue": "value update",
        "change": "selection changed",
      },
    },
    "tree-select": {
      title: "TreeSelect",
      desc: "Tree panel + expand control.",
      props: {
        "data": "tree data",
        "modelValue": "selected key",
        "placeholder": "placeholder",
        "disabled": "disabled",
        "defaultExpandAll": "expand all by default",
      },
      events: {
        "update:modelValue": "value update",
        "change": "selection changed",
      },
    },
    "date-picker": {
      title: "DatePicker",
      desc: "Month calendar; today outlined, selected as a hard-shadow tilted block.",
      props: {
        "modelValue": "date",
        "placeholder": "placeholder",
        "disabled": "disabled",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change confirmed",
      },
    },
    "time-picker": {
      title: "TimePicker",
      desc: "Dual-wheel (hours/minutes), <code>5</code>-minute step.",
      props: {
        "modelValue": "time",
        "placeholder": "placeholder",
        "disabled": "disabled",
        "minuteStep": "minute step",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change confirmed",
      },
    },
    "checkbox": {
      title: "Checkbox",
      desc: "Spring inner-block scale, group-inject.",
      props: {
        "modelValue": "value",
        "value": "group value",
        "disabled": "disabled",
      },
      events: {
        focus: "focus",
        blur: "blur",
        "change": "state change",
      },
    },
    "radio": {
      title: "Radio",
      desc: "Spring dot scale.",
      props: {
        modelValue: "selected value",
        "value": "value",
        "disabled": "disabled",
      },
      events: {
        "change": "selection changed",
      },
    },
    "switch": {
      title: "Switch",
      desc: "Spring round-knob shift.",
      props: {
        "modelValue": "value",
        "disabled": "disabled",
      },
      events: {
        focus: "focus",
        blur: "blur",
        "change": "toggle",
      },
    },
    "slider": {
      title: "Slider",
      desc: "Bubble preview + scale row + filled track, <code>thumb</code> rotates on hover.",

      events: {
        "update:modelValue": "value on drag",
        change: "value on release",
        focus: "focus",
        blur: "blur",
      },      props: {
        disabled: "disabled",
        "modelValue": "value",
        "min/max": "range",
        "step": "step",
        "showScale": "scale marks",
        "startLabel/endLabel": "end labels",
        "unit": "unit",
      },
    },
    "rate": {
      title: "Rate",
      desc: "Hover preview, stars <code>popIn</code>-bounce on confirm.",

      events: {
        "update:modelValue": "value on rate",
        change: "rate confirmed",
      },      props: {
        confetti: "confetti on confirm",
        allowDecimal: "decimal rating",
        allowReselect: "allow reselect",
        "modelValue": "value",
        "count": "star count",
        "disabled": "read-only",
        "animate": "bounce animation",
      },
    },
    "color-picker": {
      title: "ColorPicker",
      desc: "Custom <code>SV</code> picker + hue strip + <code>HEX</code> input + preset swatches.",
      props: {
        "modelValue": "color value",
        "presets": "swatch board (null hides)",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change confirmed",
      },
    },
    "upload": {
      title: "Upload",
      desc: "Drop zone + file list, sizes formatted.",
      props: {
        disabled: "disabled",
        limit: "max file count",
        name: "form field name",
        withCredentials: "carry credentials",
        showFileList: "hide file list",
        listType: "list style",
        tip: "hint text",
        beforeUpload: "before-upload hook",
        beforeRemove: "before-remove hook",
        "modelValue": "file list",
        "drag": "drag mode",
        "multiple": "multiple",
        "accept": "MIME filter",
      },
      events: {
        "update:modelValue": "file list update",
        exceed: "limit exceeded",
        preview: "list item preview",
        upload: "file picked (user uploads)",
        success: "done (auto-reported)",
        progress: "progress (auto-reported)",
        error: "error (auto-reported)",
        "change": "picked",
        "remove": "removed",
      },
    },
    "transfer": {
      title: "Transfer",
      desc: "Dual lists + batch transfer on check.",
      props: {
        "data": "data",
        "modelValue": "target keys",
        "titles": "title",
        "disabled": "disabled",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change",
      },
    },
    "autocomplete": {
      title: "Autocomplete",
      desc: "Prefix match + highlighted hit span + keyboard nav.",
      props: {
        disabled: "input disabled",
        "modelValue": "value",
        "suggestions": "suggestions",
        "placeholder": "placeholder",
      },
      events: {
        "update:modelValue": "value update",
        "select": "suggestion picked",
      },
    },
    "mention": {
      title: "Mention",
      desc: "<kbd>@</kbd> triggers a member popover, cursor backfill.",
      props: {
        "modelValue": "body",
        "options": "members",
        "placeholder": "placeholder",
        "trigger": "trigger",
      },
      events: {
        "update:modelValue": "value update",
        "select": "option picked",
      },
    },
    "otp": {
      title: "OTP",
      desc: "Segmented input, auto-jump to next, paste distribution.",
      props: {
        disabled: "disabled",
        "modelValue": "value",
        "length": "segment count",
        "numeric": "numeric mode",
      },
      events: {
        "update:modelValue": "value change",
        "complete": "filled",
      },
    },
    "form": {
      title: "Form",
      desc: "Structured form + required-validation hints.",
      props: {
        "submit": "submit handler (D6 rename: onSubmit→submit)",
        "AeroFormItem.label": "label text",
        "AeroFormItem.required": "required mark",
        "AeroFormItem.hint/error": "hint/error text",
      },
      events: {
        "submit": "form submit",
      },
    },
    "table": {
      title: "Table",
      desc: "<code>mono</code> columns, row hover, named cell slots.",
      props: {
        "columns": "column defs",
        "data": "data",
        "emptyText": "empty-state text",
      },
    },
    "tree": {
      title: "Tree",
      desc: "Indent rail + rotating expand arrow + check.",
      props: {
        "data": "data",
        "expanded": "expanded keys (controlled)",
        "checked": "checked (controlled)",
        "activeKey": "selected",
        "checkable": "checkable",
        "defaultExpandAll": "expand all by default",
        "includeParents": "checked set includes parents",
      },
      events: {
        "update:expanded": "expanded update",
        "update:checked": "checked update",
        "select": "selected node",
      },
    },
    "timeline": {
      title: "Timeline",
      desc: "Dashed rail, node rotation, card-shift pulse.",
      props: {
        "items": "entries",
      },
    },
    "tag": {
      title: "Tag",
      desc: "<code>mono</code> light-base small tag.",
      props: {
        "accent": "brand solid base",
      },
    },
    "badge": {
      title: "Badge",
      desc: "Seven types + leading dot; hover spin & scale.",
      props: {
        "type": "type",
        "dot": "leading dot",
      },
    },
    "avatar": {
      title: "Avatar",
      desc: "6-tone palette, multi-size <code>28-128px</code>, image falls back to text.",
      props: {
        alt: "alt text",
        shape: "avatar shape",
        fit: "image fit",
        "tone": "palette 1-6",
        "size": "size",
        "src": "image",
      },
    },
    "avatar-group": {
      title: "AvatarGroup",
      desc: "Overlapping stack via negative margins; hover lifts on top.",
      props: {
        "total": "total",
        "max": "display cap",
        "size": "size",
      },
    },
    "cropper": {
      title: "Cropper",
      desc: "Frame-based crop: drag to move / corners to scale / edges to rotate; multi-size circular export (<code>canvas</code> affine chain aligned with preview).",
      props: {
        labels: "toolbar labels",
        "exportSizes": "export size tiers",
        "shape": "crop shape",
        "minSize": "min frame side",
        "maxSize": "max frame side",
        "disabled": "disabled",
        "view": "viewport side",
      },
      events: {
        "change": "frame state change",
        "export": "export done (url+blob, multi-size)",
        "error": "image load failed",
      },
    },
    "card": {
      title: "Card",
      desc: "Hover lift + <code>7px</code> hard shadow.",
      props: {
        width: "card width",
        minHeight: "min height",
        "hoverable": "hover interaction",
        "paddingless": "no inner padding",
      },
    },
    "carousel": {
      title: "Carousel",
      desc: "Drag + autoplay (pauses off-screen) + pill dots.",

      events: {
        change: "index changed (prev, next)",
      },      props: {
        "slides": "slides",
        "interval": "autoplay interval ms (0 = off)",
      },
    },
    "collapse": {
      title: "Collapse",
      desc: "<code>grid-rows</code> <code>0fr</code>→<code>1fr</code> expand animation.",
      props: {
        "items": "panels",
        "modelValue": "expanded items",
        "accordion": "accordion (single open)",
      },
      events: {
        "update:modelValue": "expanded item update",
      },
    },
    "descriptions": {
      title: "Descriptions",
      desc: "<code>label</code>/<code>value</code> grid + spanning columns.",
      props: {
        "data": "data object",
        "items": "field list",
        "column": "columns per row",
        "bordered": "bordered",
        "title": "title",
      },
    },
    "empty": {
      title: "Empty",
      desc: "Frosted dashed frame + cloud illustration + action area.",
      props: {
        "hint": "title",
      },
    },
    "image": {
      title: "Image",
      desc: "Lazy load, fallback placeholder on failure, preview hover + built-in viewer.",
      props: {
        "src": "image URL",
        "alt": "alt text",
        "width/height": "width/height",
        "radius": "radius tier",
        "preview": "click to zoom",
        "fit": "fill mode",
      },
      events: {
        "preview": "emits src on preview click",
      },
    },
    "image-viewer": {
      title: "ImageViewer",
      desc: "Full-screen mask + <kbd>←</kbd>/<kbd>→</kbd> key paging.",

      events: {
        "update:modelValue": "viewer closed",
      },      props: {
        "modelValue": "switch",
        "urlList": "image set",
        "initial": "initial index",
      },
    },
    "pagination": {
      title: "Pagination",
      desc: "Windowed page numbers + tilted hard-shadow on the current page.",
      props: {
        jumper: "jump input",
        "modelValue": "page number",
        "total": "total",
        "pageSize": "per page",
      },
      events: {
        "update:modelValue": "page value change",
        "change": "page turn",
      },
    },
    "progress": {
      title: "Progress",
      desc: "Flowing <code>shimmer</code> (toggleable) + status colors; <code>draggable</code> built-in themed thumb (<code>v-model</code>).",
      props: {
        "percent": "percent 0-100 (v-model)",
        "shimmer": "shimmer effect",
        "status": "status color",
        "showText": "show percent text",
        "draggable": "interactive thumb",
      },
      events: {
        "update:percent": "thumb drag update",
      },
    },
    "ring-progress": {
      title: "RingProgress",
      desc: "<code>SVG</code> stroke animation + center number; <code>draggable</code> ring-handle drag (<code>v-model</code>).",
      props: {
        width: "ring width",
        "percent": "percent (v-model)",
        "label": "center main text",
        "sublabel": "center small text",
        "size": "overall size px",
        "stroke": "stroke width",
        "draggable": "interactive drag",
      },
      events: {
        "update:percent": "drag update",
      },
    },
    "result": {
      title: "Result",
      desc: "Big status icon + title/description + actions.",
      props: {
        "status": "status",
        "title": "title",
        "desc": "description",
      },
    },
    "segmented": {
      title: "Segmented",
      desc: "Sliding pill indicator (shared with bill-switch).",
      props: {
        "modelValue": "value",
        "options": "options",
        "disabled": "disabled",
        "block": "equal-width fill",
      },
      events: {
        "update:modelValue": "value update",
        "change": "change",
      },
    },
    "skeleton": {
      title: "Skeleton",
      desc: "<code>text</code>/<code>circle</code>/<code>rect</code> skeletons + <code>shimmer</code>.",
      props: {
        "variant": "variant shape",
        "height": "text line-height px",
        "width": "width",
        "loading": "loading",
        "animated": "shimmer animation",
      },
    },
    "spinner": {
      title: "Spinner",
      desc: "Three sizes (<code>sm</code>/<code>md</code>/<code>lg</code>) ring spinner, <code>role=status</code> + <code>aria-label</code>.",
      props: {
        "size": "size",
      },
    },
    "statistic": {
      title: "Statistic",
      desc: "<code>easeOutCubic</code> number roll.",
      props: {
        "value": "number",
        "prefix": "prefix",
        "suffix": "suffix",
        "label": "label",
        "animated": "roll animation",
      },
    },
    "qrcode": {
      title: "QRCode",
      desc: "Dependency-free full <code>ISO/IEC 18004</code> encoder (<code>RS</code> error correction + best-of-<code>8</code> masks), <code>SVG</code> matrix render; <code>fg</code> falls back to the computed <code>--ui-ink</code> (auto-redraws on theme switch).",
      props: {
        "value": "content",
        "size": "output size px",
        "margin": "quiet zone (module count)",
        "fg": "foreground (value overrides)",
        "bg": "background color",
        "level": "error-correction level",
      },
    },
    "watermark": {
      title: "Watermark",
      desc: "<code>Canvas</code> tiled text watermark; a separate <code>::before</code> layer that never blocks interaction.",
      props: {
        maxWidth: "max width",
        radius: "radius",
        "content": "watermark text",
        "rotate": "rotation angle",
        "gap": "tile gap px",
        "fontSize": "font size",
        "opacity": "opacity",
      },
    },
    "terminal": {
      title: "Terminal",
      desc: "Typewriter line-by-line output + blinking cursor.",
      props: {
        "lines": "line sequence",
        "typeSpeed": "type speed ms/char",
        "lineDelay": "line gap ms",
        "title": "window title",
      },
      events: {
        "done": "all lines printed",
      },
    },
    "code-block": {
      title: "CodeBlock",
      desc: "2px-outlined code window: line-level mini highlighting (<code>highlight</code>), line numbers (<code>lineNumbers</code>), copy button (<code>copyable</code>), collapsible (<code>collapsible</code>).",

      events: {
        "update:open": "fold toggled",
      },      props: {
        "code": "source",
        "lang": "language label",
        "title": "window title",
        "highlight": "highlight",
        "lineNumbers": "line numbers",
        "copyable": "copy button",
        "flush": "flush (strip chrome)",
        "collapsible": "collapsible",
        "open": "collapsed visibility v-model",
      },
    },
    "menu": {
      title: "Menu",
      desc: "Horizontal pill sliding / vertical sidebar highlight.",

      events: {
        "update:modelValue": "selection change",
        select: "item clicked",
        focus: "focus",
        blur: "blur",
        "update:collapsed": "collapsed change",
      },      props: {
        width: "sidebar width",
        collapsed: "collapsed",
        "items": "items",
        "modelValue": "active",
        "mode": "direction",
      },
    },
    "tabs": {
      title: "Tabs",
      desc: "Slider indicator with spring follow.",
      props: {
        "modelValue": "active",
        "tabs": "label",
      },
      events: {
        "update:modelValue": "tab selection change",
        "change": "toggle",
      },
    },
    "breadcrumb": {
      title: "Breadcrumb",
      desc: "Arrow separated, last item bolded.",
      props: {
        "items": "items",
      },
    },
    "dropdown": {
      title: "Dropdown",
      desc: "Icon + description + divider + danger items.",
      props: {
        "items": "menu items",
        "align": "alignment",
      },
      events: {
        "select": "selected",
      },
    },
    "steps": {
      title: "Steps",
      desc: "<code>done</code>/<code>active</code> status cards, click to switch.",
      props: {
        "items": "steps",
        "current": "current",
      },
      events: {
        "change": "click to switch",
      },
    },
    "page-header": {
      title: "PageHeader",
      desc: "Back button + title/subtitle + action area.",
      props: {
        "title": "title",
        "subtitle": "subtitle",
        "back": "back button",
      },
      events: {
        "back": "back",
      },
    },
    "anchor": {
      title: "Anchor",
      desc: "Scroll <code>spy</code> left-rail highlight; in-container scrolling converts the judge line by container origin.",
      props: {
        "items": "anchors",
        "container": "scroll container selector",
        "offset": "highlight top offset",
      },
    },
    "affix": {
      title: "Affix",
      desc: "Pins to the top after crossing the threshold (default <code>76px</code>, clears the <code>sticky</code> nav); <code>target</code> picks the scroll container.",
      props: {
        anchor: "anchor element",
        gutter: "gutter",
        "offsetTop": "trigger threshold",
        "top": "pin gap from top",
        "target": "scroll container",
      },
      events: {
        "change": "pin state change",
      },
    },
    "back-top": {
      title: "BackTop",
      desc: "Appears on scroll, rotates on hover; a <code>target</code> selector picks the scroll container (<code>.pg-main</code> on the demo page, EP convention; pass a selector for an inner mobile scroll container).",
      props: {
        "threshold": "appear threshold",
        "right/bottom": "positioning",
        "target": "scroll container selector (EP convention)",
      },
    },
    "tour": {
      title: "Tour",
      desc: "Highlight box + mask + step bubbles.",
      props: {
        "steps": "steps",
        "modelValue": "switch (controlled)",
      },
      events: {
        "update:modelValue": "controlled update",
        "finish": "tour finished",
      },
    },
    "dialog": {
      title: "Dialog",
      desc: "<code>scale</code>+<code>rotate</code> spring pop-in, <kbd>Esc</kbd> closes.",
      props: {
        "modelValue": "switch",
        "title": "title",
        "width": "width",
        "maskClosable": "close on mask click",
        "blurMask": "frosted mask",
      },
      events: {
        "update:modelValue": "controlled update",
        "close": "close triggered",
      },
    },
    "drawer": {
      title: "Drawer",
      desc: "Slides in from the right.",
      props: {
        "modelValue": "switch",
        "title": "title",
        "width": "width",
        "maskClosable": "close on mask click",
      },
      events: {
        "update:modelValue": "controlled update",
        "close": "close triggered",
      },
    },
    "message-box": {
      title: "MessageBox",
      desc: "Imperative <code>Promise</code> API: <code>AeroMessageBox.confirm(opts)</code>.",
      props: {
        "confirm().message": "body",
        "confirm().title": "title",
        "confirm().confirmText/cancelText": "button labels",
        "confirm().danger": "danger style",
      },
      events: {
        "confirm() → Promise<boolean>": "true=confirm / false=cancel",
      },
    },
    "notification": {
      title: "Notification",
      desc: "Imperative API: <code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>, stacked top-center.",
      props: {
        "show().type": "type",
        "show().title": "title",
        "show().message": "body",
        "show().duration": "stay ms (0 = no auto-close)",
      },
      events: {
        "success/error/warn/info(title,message?)": "quick pop",
        "show(opts)": "custom pop",
      },
    },
    "alert": {
      title: "Alert",
      desc: "Four semantic tones + closable.",
      props: {
        "type": "type",
        "title": "title",
        "closable": "closable",
      },
      events: {
        "close": "close button click",
      },
    },
    "loading": {
      title: "Loading",
      desc: "Container overlay + <code>spinner</code> + frosted glass.",
      props: {
        "loading": "loading",
        "tip": "text",
      },
    },
    "popover": {
      title: "Popover",
      desc: "<code>hover</code>/<code>click</code> trigger, top/bottom/right placements.",
      props: {
        "trigger": "trigger",
        "placement": "placement",
        "title": "title",
        "width": "min width",
        "open": "controlled visibility",
      },
      events: {
        "update:open": "controlled update",
      },
    },
    "popconfirm": {
      title: "Popconfirm",
      desc: "Click triggers a confirm popover.",
      props: {
        "title": "confirm title",
        "confirmText": "confirm label",
        "cancelText": "cancel label",
        "danger": "danger style",
      },
      events: {
        "confirm": "confirm",
        "cancel": "cancel",
      },
    },
    "tooltip": {
      title: "Tooltip",
      desc: "<code>fixed</code> placement, repositions on scroll, up/down arrows.",
      props: {
        "content": "text",
        "placement": "placement",
      },
    },
    "toast": {
      title: "Toast",
      desc: "Imperative API: <code>success</code>/<code>error</code>/<code>warn</code>/<code>info</code>/<code>show</code>, stacked top-right + countdown bar.",
      props: {
        "show().type": "type",
        "show().message": "copy",
        "show().duration": "stay ms",
      },
      events: {
        "success/error/warn/info(msg, opts?)": "quick pop",
        "show(opts)": "custom pop",
      },
    },
    "announce": {
      title: "Announce",
      desc: "Top announce banner; <code>max-height</code> collapse without page jump; close is session-level, <code>v-model:open</code> can re-show; <code>marquee</code> auto-adapts.",
      props: {
        actionHref: "action link",
        "icon": "icon",
        "open": "controlled visibility (v-model:open)",
        "storageKey": "memorizes closed state only when passed",
        "animated": "collapse transition",
        "marquee": "marquee (scrolls only when overflowing; false disables)",
      },
      events: {
        "close": "close started",
        "closed": "collapse finished",
        "update:open": "visibility update",
      },
    },
    "chip": {
      title: "Chip",
      desc: "Pill chip + rotating close button.",
      props: {
        "closable": "closable",
        "active": "selected state",
      },
      events: {
        "close": "close",
      },
    },
    "config-provider": {
      title: "ConfigProvider",
      desc: "Wraps and injects theme/preset/namespace.",
      props: {
        locale: "locale",
        "theme": "theme",
        "preset": "preset",
        "namespace": "namespace",
      },
    },
    "theme-provider": {
      title: "ThemeProvider",
      desc: "Reactive binding of <code>useTheme</code> state.",
      props: {
        scoped: "scoped mode",
        "theme": "theme",
        "preset": "preset",
        "brand": "custom brand color",
      },
    },
    "motion-presets": {
      title: "MotionPresets",
      desc: "Six loop motions, <code>animated</code>-gated (<code>GPU</code> isolation approach).",
      props: {
        "name": "motion",
        "animated": "enable animation",
        "duration": "duration",
      },
    },
    "dot-field": {
      title: "DotField",
      desc: "<code>Canvas</code> dot field (<code>dot</code>/<code>x</code>/<code>diamond</code>/<code>ring</code>); the flow state is a slowly drifting brand-tinted single-hue cosine band (restrained, not flashy); pauses off-screen.",
      props: {
        color: "dot color",
        "shape": "shape",
        "density": "dot spacing",
        "flow": "brand-color flow",
        "speed": "speed",
      },
    },
    "iridescent-threads": {
      title: "IridescentThreads",
      desc: "Ambient background décor (not a disco ball): <code>6–8</code> low-opacity curves, colors derived from <code>--ui-brand</code> (brand + two adjacent <code>hues</code>), two layers (sharp + <code>blur(6px)</code> glow), slow <code>24–40s</code> loop, static under <code>prefers-reduced-motion</code>.",
      props: {
        "count": "thread count (6–8)",
        "cycle": "drift period s (24–40)",
        "hueShift": "hue shift",
        "opacity": "opacity multiplier",
      },
    },
    "parallax-box": {
      title: "ParallaxBox",
      desc: "Hero-style: pointer parallax follow, click to rotate shapes, GPU-gated.",
      props: {
        "height": "zone height",
        "hint": "hint text",
      },
    },
    "marquee": {
      title: "Marquee",
      desc: "Brand-row / big-type modes; hover pauses, <code>reduced-motion</code> degrades.",
      props: {
        "variant": "mode",
        "caption": "hint text",
        "items": "content",
        "duration": "period s",
        "pauseOnHover": "hover pause",
      },
    },
    "party-fx": {
      title: "PartyFx",
      desc: "<code>WAAPI</code> event-driven confetti: ring + 🎉 + <code>32</code> ribbons + sparkles, silent under <code>reduced-motion</code>; auto-fires on <code>Rate</code> confirm.",
    },
    "phone": {
      title: "Phone",
      desc: "<code>46px</code> rounded dark shell + <code>notch</code> + status bar, hover micro-lift & rotate; hosts mobile components inside.",
      props: {
        "time": "status bar time",
        "title": "title",
        "subtitle": "subtitle",
      },
    },
    "mobile-carousel": {
      title: "MobileCarousel",
      desc: "Drag to swipe pages (<code>rubber-band</code>) + autoplay progress + dots.",
      props: {
        "slides": "carousel data",
        "interval": "autoplay interval ms (0=off)",
      },
      events: {
        "change": "index switched",
      },
    },
    "mobile-stat-card": {
      title: "MobileStatCard",
      desc: "Label + <code>mono</code> big number + <code>spark</code> mini chart (line/bar).",
      props: {
        "label": "label",
        "value": "primary value",
        "chart": "mini chart type",
        "points": "line points",
        "bars": "bar data",
        "mainColor": "line uses primary",
      },
    },
    "mobile-tab-bar": {
      title: "MobileTabBar",
      desc: "Sliding pill indicator + icon <code>popIn</code>.",
      props: {
        "items": "tab items",
        "modelValue": "current index",
      },
      events: {
        "update:modelValue": "tab selection change",
        "change": "toggle",
      },
    },
    "swipe-deck": {
      title: "SwipeDeck",
      desc: "Drag the top card (rotation + deploy/rollback stamp show/hide), fly out past <code>110px</code>; <code>loop</code> recycles or swipes away, dynamic insert/remove (<code>FLIP</code> entry); <code>bare</code> mode strips the default chrome (PrimeVue unstyled parity).",
      props: {
        "cards": "card data",
        "loop": "swipe recycles to the back; false swipes away & destroys",
        "bare": "bare mode (strip default card chrome, slot content IS the card)",
      },
      events: {
        "deploy": "swipe right to deploy",
        "rollback": "swipe left to roll back",
        "emptied": "deck emptied in destroy mode",
      },
    },
    "slide-go": {
      title: "SlideGo",
      desc: "Drag the knob to the far right to complete: <code>fill</code> follows + <code>squish</code> completion + auto reset; <code>autoReset</code> resets <code>600ms</code> after done.",
      props: {
        width: "width",
        "text": "copy",
        "doneText": "done text",
        "autoReset": "auto-reset + lock reset 600ms after done",
      },
      events: {
        "done": "done",
      },
    },
    "sort-list": {
      title: "SortList",
      desc: "Pointer-follow (attached to <code>body</code>, immune to <code>transform</code>s) + <code>FLIP</code> transitions + flashing placeholder.",
      props: {
        width: "list width",
        "items": "list data",
      },
      events: {
        "sorted": "new order",
      },
    },
    "bottom-sheet": {
      title: "BottomSheet",
      desc: "Collapses to a <code>58px</code> handle by default; drag/click to toggle with a <code>spring</code> back.",
      props: {
        bgTitle: "bg title",
        bgHint: "bg hint",
        "title": "sheet title",
        "rows": "row data",
        "open": "initially expanded",
      },
      events: {
        "update:open": "expand toggled",
        "change": "open/close",
      },
    },
    "knob": {
      title: "Knob",
      desc: "<code>270°</code> scan arc via <code>atan2</code>, release <code>WAAPI</code> bounce.",
      props: {
        "modelValue": "value",
        "min/max/step": "range",
        "unit": "unit",
      },
      events: {
        "update:modelValue": "value on drag",
        "change": "release value",
      },
    },
    "pull-to-refresh": {
      title: "PullToRefresh",
      desc: "Pull down at the top edge: the indicator rotates with your finger, release to refresh + staggered fade-in of items.",
      props: {
        width: "container width",
        height: "container height",
        "items": "list data",
        "duration": "refresh duration ms",
        "damping": "damping",
      },
      events: {
        "refresh": "refresh triggered",
      },
    },
  }
}