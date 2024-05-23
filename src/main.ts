import lib from './components'

const ComponentLibrary = {
    install(Vue: any) {
        console.log('installing component library')
        lib.components.forEach((component) => {
            console.log(
                'registering component',
                component.id,
                component.constructor
            )
            Vue.component(component.id, component.constructor)
        })
    },
}

export default ComponentLibrary
