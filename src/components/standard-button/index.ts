import { Manifest } from '@/types'
import StandardButton from './standard-button.vue'

const manifest: Manifest = {
    id: 'standard-button',
}

export default { ...manifest, constructor: StandardButton }
