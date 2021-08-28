// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/cxy/Documents/gh/learnercys.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/cxy/Documents/gh/learnercys.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/cxy/Documents/gh/learnercys.github.io/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/dev-404-page.json"),
  "404-html.json": require("/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/404-html.json")
}