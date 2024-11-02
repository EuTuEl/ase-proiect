<template>
    <div class="h-full flex flex-col justify-center items-center ">
        <form @submit.prevent="submitForm" class="flex flex-col items-center max-w-md lg:w-1/2 sm:w-2/3 w-3/4 min-w-80 h-2/3 rounded-3xl border border-black">
            <div class=" basis-1/6 w-full flex justify-center items-center bg-green-600 rounded-t-3xl">
                <div class="text-3xl text-white"> {{ title }} </div>
            </div>

            <div class="basis-2/3 w-full flex flex-col">
                <div v-for="field in fields" :key="field.value" class="mt-5 w-full flex justify-between">
                    <label :for="field.label" class="ml-10 text-xl"> {{ capitalizeFirstLetter(field.label) }}: </label>
                    <input :id="field.label" :type="field.type" v-model="field.value"
                    class="mr-10 bg-green-600/10 w-36 sm:w-60 border outline-none">
                </div>
            </div>
            
            <div class="basis-1/6 w-full flex justify-center items-center">
                <BaseButton>Submit</BaseButton>
            </div>
        </form>
        <slot></slot>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue"

const props = defineProps(["title", "fields"])
const emit = defineEmits(['submitForm'])

const data = reactive({})
const triedSubmit = ref(false)

function submitForm() {
    let ok = true
    for (const item of props.fields) {
        item.value = item.value.trim()
        if (!item.value) {
            triedSubmit.value = true
            return
        }
        data.value = {
            ...data.value,
            [item.label]: item.value
        }
    }
    console.log(data.value)
    return
    emit("submitForm", data.value)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>