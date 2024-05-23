import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Component Library 🥂',
            description:
                'Documentation site for the Vue component library plugin',
        },
    },
    theme: defaultTheme({
        repoLabel: 'Contribute!',
        repo: 'https://github.com/pablopelardas/component-library',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                lastUpdatedText: 'Last Updated',
                navbar: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'Components', link: '/components/' },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/pablopelardas/component-library',
                    },
                ],
                sidebar: {
                    '/components/': [
                        {
                            title: 'Components',
                            collapsable: false,
                            children: ['standard-button'],
                        },
                    ],
                },
            },
        },
    }),
})
