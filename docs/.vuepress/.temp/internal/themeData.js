export const themeData = JSON.parse("{\"repoLabel\":\"Contribute!\",\"repo\":\"https://github.com/pablopelardas/component-library\",\"docsDir\":\"docs\",\"editLinks\":true,\"docsBranch\":\"dev\",\"editLinkText\":\"Help us improve this page!\",\"search\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"lastUpdatedText\":\"Last Updated\",\"navbar\":[{\"text\":\"Getting Started\",\"link\":\"/guide\"},{\"text\":\"Components\",\"link\":\"/components/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/pablopelardas/component-library\"}],\"sidebar\":{\"/components/\":[{\"title\":\"Components\",\"collapsable\":false,\"children\":[\"standard-button\"]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
