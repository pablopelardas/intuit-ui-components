import { build } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const library = {
    entry: path.resolve(__dirname, './src/main.ts'),
    name: 'Intuit Ui Components Library',
    fileName: 'intuit-ui-components',
}

const emptyOutDir = false
const minify = true
const sourcemap = true

console.log(`Building library...${library.name}`)
await build({
    build: {
        lib: {
            ...library,
            formats: ['umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: `${library.fileName}.[ext]`,
            },
            emptyOutDir,
        },
        sourcemap,
        minify,
    },
})
    .then(() => {
        console.log(`Library ${library.name} builded!`)
    })
    .catch((error) => {
        console.error(`Error building library ${library.name}: ${error}`)
    })
