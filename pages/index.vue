<template>
    <div>
        <header class="h-14 bg-green-600"></header>
        <div>{{ lowerLimit }} {{ upperLimit }}</div>
    </div>
</template>

<script setup>
const points = 100
const level = 6
const lowerLimit = Math.pow(2, level)
const upperLimit = Math.pow(2, level + 1)

function calculateProgressPercentage(points) {
    
}
</script>