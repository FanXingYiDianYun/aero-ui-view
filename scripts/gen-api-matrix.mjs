/**
 * gen-api-matrix.mjs —— 自动生成全组件 API 矩阵（Q2 整改）
 * 用法：node scripts/gen-api-matrix.mjs > /tmp/api_matrix.md
 * 解析各组件 src/*.vue 的 defineProps（含外部 .types.ts 接口）/defineEmits/defineExpose/defineModel，
 * 杜绝手抄表格。树形等「主组件 + 内部行组件」目录输出多行并标注文件。
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('../../aero-vue/src/components/', import.meta.url).pathname

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else yield p
  }
}

function braceScan(t, start) {
  let depth = 0
  for (let i = start; i < t.length; i++) {
    if (t[i] === '{') depth++
    else if (t[i] === '}') { depth--; if (depth === 0) return t.slice(start + 1, i) }
  }
  return null
}

const rows = []
for (const entry of readdirSync(ROOT)) {
  const cdir = join(ROOT, entry)
  if (!existsSync(join(cdir, 'src'))) continue
  for (const vue of [join(cdir, 'src')].filter((d) => existsSync(d)).flatMap((d) => readdirSync(d).filter((f) => f.endsWith('.vue')).map((f) => join(d, f)))) {
    const rel = vue.slice(ROOT.length)
    const t = readFileSync(vue, 'utf8')
    const mExt = t.match(/defineProps<([A-Za-z0-9_]+)\s*>\(/)
    let pnames = [], jsdoc = false, ext = null
    if (mExt) {
      ext = mExt[1]
      for (const tsf of walk(cdir)) {
        if (!tsf.endsWith('.ts')) continue
        const tt = readFileSync(tsf, 'utf8')
        const im = tt.match(new RegExp(`interface\\s+${ext}\\s*\\{`))
        if (im) {
          const start = im.index + im[0].length - 1 // '{' 所在下标
          const body = braceScan(tt, start) || ''
          pnames = (body.match(/^\s*([a-zA-Z][\w-]*)(?:\?|:)/gm) || []).map((x) => x.trim().replace(/[?:]$/, ''))
          jsdoc = body.includes('/**')
          break
        }
      }
    } else {
      const m2 = t.match(/defineProps<\{/)
      if (m2) {
        const body = braceScan(t, m2.index + m2[0].length - 1) || ''
        const seen = new Set()
        pnames = [...body.matchAll(/^\s*([a-zA-Z][\w-]*)(?:\?|:)/gm)].map((x) => x[1]).filter((x) => !seen.has(x) && seen.add(x))
        jsdoc = body.includes('/**')
      }
    }
    // T4 根因修：旧正则 [a-z-]+ 漏抓「update:xxx」命名空间事件（含大写/冒号）——
    // 全库凡 emit update:* 者（announce/autocomplete/code-block…）均被漏。放宽字符集，
    // 首字符限字母，后续允许大小写与 - :（覆盖 update:modelValue / closed 等）。
    const emits = [...t.matchAll(/\(e: '([A-Za-z][A-Za-z0-9:-]*)'/g)].map((x) => x[1])
    rows.push([
      entry,
      pnames.length ? pnames.join(', ') + (ext ? `（${ext}）` : '') : '—',
      emits.length ? emits.join(', ') : '—',
      t.includes('defineExpose') ? '✓' : '✗',
      t.includes('defineModel') || t.includes("'update:modelValue'") ? '✓' : '✗',
      jsdoc ? '✓' : '✗',
      rel,
    ])
  }
}
console.log('| 组件目录 | 文件 | props | emits | expose | v-model | JSDoc |')
console.log('|---|---|---|---|---|---|---|')
for (const [c, p, e, ex, v, j, rel] of rows)
  console.log(`| \`${c}\` | \`${rel}\` | ${p} | ${e} | ${ex} | ${v} | ${j} |`)
