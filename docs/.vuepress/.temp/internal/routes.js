export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"Getting Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/components/standard-button.html", { loader: () => import(/* webpackChunkName: "components_standard-button.html" */"D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/components/standard-button.html.js"), meta: {"title":"standard-button"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
