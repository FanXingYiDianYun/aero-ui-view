/**
 * 构建前脚本：生成 src/demo-sources.generated.ts
 * 把每个组件 demo/basic.vue 的源文件全文读为「source」字典，
 * 供「复制此代码」与「查看此代码」静态导入。
 *
 * 同源约定（owner 批复）：复制/查看同源 = demo 源文件原文（完整 SFC），
 *   唯一变换 = import 行重写为 'aero-vue' 包名（D4 批复）。
 * 因此 generated 字典的 usage 与 source 同值（均为 import 重写后的完整 SFC），
 * 不再做 template 提取/usage 拼装。
 *
 * 为什么不用 import.meta.glob(query:'?raw')？
 * ——Vite 5 实测：与普通 import 同一 .vue 文件时互相污染（normal 产物被 raw
 *   文本覆盖，84 个 chunk 全变字符串导致页面失效）。独立生成文件彻底隔离。
 *
 * import 重写规则：
 *   - `import { X } from '../index'` / `from '../../button'` / `from '../src/paths'` 等
 *     库内相对路径 → `import { X } from 'aero-vue'`
 *   - `import type { Y } from '../index'` 同规则 → `import type { Y } from 'aero-vue'`
 *   - 其余 import（如 `from 'vue'`、`from '../other-demo'` 之外的第三方/非库文件）保持原样
 * 判定「库内相对导入」：路径不含 `/src/`、`/demo/`、`/node_modules` 且以 `.` 或 `..` 开头，
 * 即形如 `../index`、`../../button`、`./index`、`../src/paths`、`../cropper.types` 等。
 *
 * 已知行为（OBS-3，W 轮报备 / X3 注记）：本仓 .gitignore 忽略 *.png，
 * 若 demo 以相对路径 import 本地截图等二进制资产（当前无此类 demo），
 * 生成产物中该 import 原样保留但文件不入 git——重新生成即静默丢空。
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const compsDir = resolve(here, '..', '..', 'aero-vue', 'src/components')
const outFile = resolve(here, '../src/demo-sources.generated.ts')

/** 把 SFC 源文件全文的库内相对 import 重写为 'aero-vue'，其余逐字节保留。
 *  只重写「库内相对导入」（指向 ../index、../../<comp>、../src/paths、
 *  ../../../composables、../src/<comp>.vue 这类库文件），不动反引号内的代码示例
 *  与本地演示文件（如 './App.vue' 的默认导入）。 */
function rewriteImports(source) {
  const lines = source.split('\n')
  // 处于模板字符串（反引号代码块）内的行不做 import 重写
  let inBacktick = false
  const out = lines.map((line, idx) => {
    const isBacktickBlock = /```|`/m.test(line) && !/^\s*(import|\/\/|\/\*)/.test(line)
    let rewritten = line
    if (!isBacktickBlock) {
      // 1) 命名导入 + 相对路径：import { X } from '../index' / '../../button' / '../src/paths'
      rewritten = rewritten
        .replace(/(import\s+(?:type\s+)?\{[\s\S]*?\}\s+from\s+)['"](\.\.?\/[^'"]*?)['"]/g,
          (m, prefix, p) => (isLibPath(p) ? `${prefix}'aero-vue'` : m))
      // 2) 默认导入 + 相对 .vue 库组件：import AeroMarquee from '../src/marquee.vue'
      rewritten = rewritten.replace(
        /(import\s+)(Aero\w+)\s+from\s+['"](\.\.?\/src\/[\w.-]+\.vue)['"]/g,
        (m, imp, name, p) => (isLibPath(p) ? `${imp}{ ${name} } from 'aero-vue'` : m))
    }
    return rewritten
  })
  return out.join('\n')
}

/** 判定相对路径是否指向库内文件（而非本地演示文件如 ./App.vue） */
function isLibPath(p) {
  // 单点/双点开头的相对路径；排除本地演示组件（demo 目录下 .vue 文件）
  if (!/^(\.\.\/|\.\/)/.test(p)) return false
  // 本地演示组件：./xxx.vue（单点 + 当前目录）不属于库导出
  if (/^\.\/[\w-]+\.vue$/.test(p)) return false
  return true
}

const entries = []
for (const name of readdirSync(compsDir).sort()) {
  const demoFile = resolve(compsDir, name, 'demo/basic.vue')
  let st
  try {
    st = statSync(demoFile)
  } catch {
    continue
  }
  if (!st.isFile()) continue
  const code = readFileSync(demoFile, 'utf-8')
  const rewritten = rewriteImports(code)
  // usage 与 source 同源（均为 import 重写后的完整 SFC），复制/查看输出一致
  entries.push(`  ${JSON.stringify(name)}: ${JSON.stringify({ usage: rewritten, source: rewritten })},`)
}

const out = [
  '// 由 scripts/gen-demo-sources.mjs 生成，勿手改',
  '// 同源约定：usage 与 source 均为 demo/basic.vue 源文件全文（import 重写为 aero-vue），复制/查看同源',
  'interface DemoSource { usage: string; source: string }',
  'const sources: Record<string, DemoSource> = {',
  ...entries,
  '}',
  'export default sources',
  '',
].join('\n')

mkdirSync(dirname(outFile), { recursive: true })
writeFileSync(outFile, out)
console.log(`demo-sources.generated.ts: ${entries.length} 个组件（usage=source=源文件全文，import 重写 aero-vue）`)
