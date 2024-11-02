<template>
    <div class="flex flex-col">
        <header class="h-14 bg-green-600 flex justify-between text-white text-2xl">
            <div>logo</div>
            <button @click="logOutHandler" class="mr-10">Log out</button>
        </header>
        <div class="w-full flex flex-col items-center mt-10">
            <div class="flex">
                <div class="mr-5">Points: {{ points }} </div>
                <div>Level: {{ level }} </div>
            </div>
            
            <div class="w-2/3 lg:w-1/2 h-5 flex mt-5">
                <div> {{ lowerLimit }} </div>
                <div class="bg-green-600 h-full rounded-l-2xl" :style="'width: ' + percentage + '%'"></div>
                <div class="bg-gray-600 h-full rounded-r-2xl" :style="'width: ' + (100 - percentage) + '%'"></div>
                <div> {{ upperLimit }} </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const points = 145

let level = 1
let lowerLimit
let upperLimit
let percentage

function calculateProgressPercentage(points) {
    let aux = 1
    while(true) {
        aux = aux * 2
        if (aux > points) {
            lowerLimit = aux / 2
            upperLimit = aux
            break
        }
        level++
    }

    let x = points - lowerLimit
    let y = upperLimit - lowerLimit

    percentage = 100 * x / y
    percentage = Math.round(percentage)
}

calculateProgressPercentage(points)

function logOutHandler () {
    const cookie = useCookie("token")
    cookie.value = null
    router.push("/login")
}
</script>