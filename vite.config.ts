import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import oxlintPlugin from 'vite-plugin-oxlint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), oxlintPlugin()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
