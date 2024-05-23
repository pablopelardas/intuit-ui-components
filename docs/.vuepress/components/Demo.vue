<!-- Demo.vue -->
<template>
    <div>
        <component :is="componentName" />
    </div>
</template>

<script setup>
const props = defineProps({
    componentName: String,
})
</script>
