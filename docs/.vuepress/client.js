import { defineClientConfig } from 'vuepress/client'
import Demo from './components/Demo.vue'
import SourceCode from './components/SourceCode.vue'
import ComponentLibrary from '../../src/main'
import docLib from './components/examples'

export default defineClientConfig({
    enhance({ app }) {
        console.log('Enhancing app with ComponentLibrary')
        app.component('Demo', Demo)
        app.component('SourceCode', SourceCode)
        app.use(ComponentLibrary)
        console.log('Registering components')
        docLib.components.forEach((component) => {
            console.log('Registering component: ', component.name)
            app.component(component.name, component.component)
        })
    },
})
