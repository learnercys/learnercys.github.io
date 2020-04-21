// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/src/pages/404.js")),
  "component---src-pages-from-the-beginning-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/src/pages/from-the-beginning.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/src/pages/index.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/src/pages/resume.js")),
  "component---src-pages-test-a-node-rest-api-js": preferDefault(require("/Users/learnercys/Documents/gh/learnercys.github.io/src/pages/test-a-node-rest-api.js"))
}

exports.json = {
  "layout-index.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/404.json"),
  "from-the-beginning.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/from-the-beginning.json"),
  "index.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/index.json"),
  "resume.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/resume.json"),
  "test-a-node-rest-api.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/test-a-node-rest-api.json"),
  "404-html.json": require("/Users/learnercys/Documents/gh/learnercys.github.io/.cache/json/404-html.json")
}