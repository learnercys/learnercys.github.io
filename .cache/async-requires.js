// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/cxy/Documents/gh/learnercys.github.io/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/cxy/Documents/gh/learnercys.github.io/src/pages/404.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/dev-404-page.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/cxy/Documents/gh/learnercys.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/cxy/Documents/gh/learnercys.github.io/.cache/layouts/index.js")
}