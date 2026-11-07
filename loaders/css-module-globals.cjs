/**
 * Turbopack loader for component CSS Modules. Runs AFTER @tailwindcss/turbopack.
 *
 * Problem: `@apply group-data-open/tabs:flex` compiles to a selector such as
 * `.root:is(:where(.group\/tabs)[data-open] *)`. CSS Modules then hash every
 * class in it, including `.group\/tabs`, which is a marker class set on a
 * *different* element as a plain string, so the rule never matches. The same
 * happens to arbitrary variants like `[.border-b]:pb-2`.
 *
 * Fix: any class in a selector that is not one of the module's own classes
 * (the ones written in selectors of the source file) is wrapped in
 * `:global(...)`, so only the module's own classes get hashed.
 */
// Webpack-style loaders are loaded as CommonJS by Turbopack's loader-runner.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs")

const CLASS = /\.((?:[A-Za-z0-9_-]|\\.)+)/g
const unescape = (s) => s.replace(/\\(.)/g, "$1")

function localClasses(source) {
  const local = new Set()
  const noComments = source.replace(/\/\*[\s\S]*?\*\//g, "")
  for (const [, selector] of noComments.matchAll(/(?<=^|[{};])\s*([^{};@\s][^{};]*)\{/g)) {
    for (const [, name] of selector.matchAll(CLASS)) local.add(unescape(name))
  }
  return local
}

module.exports = function cssModuleGlobals(css) {
  const local = localClasses(fs.readFileSync(this.resourcePath, "utf8"))
  // lookbehind so a selector right after an at-rule's `{` is still matched
  return css.replace(/(?<=^|[{};])([^{};]+)\{/g, (match, selector) => {
    const trimmed = selector.trim()
    if (!trimmed || trimmed.startsWith("@") || /^(from|to|[\d.]+%)/.test(trimmed)) return match
    const next = selector.replace(CLASS, (m, name, offset, str) => {
      // already inside :global(...)
      if (str.slice(Math.max(0, offset - 8), offset) === ":global(") return m
      return local.has(unescape(name)) ? m : `:global(${m})`
    })
    return next + "{"
  })
}
