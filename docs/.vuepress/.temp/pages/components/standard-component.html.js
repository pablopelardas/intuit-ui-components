import comp from "D:/pablo/source/github.com/pablopelardas/intuit-ui-components/docs/.vuepress/.temp/pages/components/standard-component.html.vue"
const data = JSON.parse("{\"path\":\"/components/standard-component.html\",\"title\":\"standard-component\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Example\",\"slug\":\"example\",\"link\":\"#example\",\"children\":[]},{\"level\":2,\"title\":\"Source Code\",\"slug\":\"source-code\",\"link\":\"#source-code\",\"children\":[]},{\"level\":2,\"title\":\"slots\",\"slug\":\"slots\",\"link\":\"#slots\",\"children\":[]},{\"level\":2,\"title\":\"props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/standard-component.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
