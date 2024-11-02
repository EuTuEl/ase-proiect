<template>
    <div class=" h-full">
        <BaseForm @submit-form="submitFormHandler" title="Log in" :fields="loginFields"></BaseForm>
    </div>
</template>

<script setup>
const loginFields = [
    {
        label: "user",
        type: "text",
        value: ""
    },
    {
        label: "password",
        type: "password",
        value: ""
    }
]

function submitFormHandler (data) {
    console.log(data)
}
</script>