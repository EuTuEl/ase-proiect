<template>
    <button @click="clickHandler" class="w-32 p-3 bg-green-600 text-white text-lg rounded-2xl">
        <slot></slot>
    </button>
</template>

<script setup>
const emit = defineEmits(['click'])

function clickHandler() {
    emit("click")
}
</script>