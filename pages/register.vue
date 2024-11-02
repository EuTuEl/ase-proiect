<template>
    <div class=" h-full">
        <BaseForm @submit-form="submitFormHandler" title="Register" :fields="registerFields">
            <div class="flex">
                <div>Already have an account?</div>
                <NuxtLink to="/login" class="text-green-600"> Log in now!</NuxtLink>
            </div>
        </BaseForm>
    </div>
</template>

<script setup>
const registerFields = [
    {
        label: "user",
        type: "text",
        value: ""
    },
    {
        label: "password",
        type: "password",
        value: ""
    },
    {
        label: "email",
        type: "text",
        value: ""
    },
    {
        label: "lastname",
        type: "text",
        value: ""
    },
    {
        label: "firstname",
        type: "text",
        value: ""
    }
]

function submitFormHandler (data) {
    console.log(data)
}
</script>