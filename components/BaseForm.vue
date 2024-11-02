<template>
    <div class="h-full flex justify-center items-center ">
        <form @submit.prevent="submitForm" class="flex flex-col items-center w-1/3 h-2/3 rounded-3xl border border-black">
            <div class=" basis-1/6 w-full flex justify-center items-center bg-green-600 rounded-t-3xl">
                <div class="text-3xl text-white"> {{ title }} </div>
            </div>

            <div class="basis-2/3 w-full flex flex-col">
                <div v-for="field in fields" class="mt-5 w-full flex justify-between">
                    <label :for="field.label" class="ml-10 text-xl"> {{ capitalizeFirstLetter(field.label) }}: </label>
                    <input :id="field.label" :type="field.type" v-model="field.value" class="mr-10 bg-green-600/10">
                </div>
            </div>
            
            <div class="basis-1/6 w-full flex justify-center items-center">
                <BaseButton>Submit</BaseButton>
            </div>
        </form>
    </div>
</template>

<script setup>
const props = defineProps(["title", "fields"])
const emit = defineEmits(['submitForm'])

function submitForm() {
    let data = {}
    for (const item of props.fields) {
        data = {
            ...data,
            [item.label]: item.value
        }
    }
    emit("submitForm", data)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>