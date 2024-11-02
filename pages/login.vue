<template>
    <div class=" h-full">
        <BaseForm @submit-form="submitFormHandler" title="Log in" :fields="loginFields">
            <div class="flex">
                <div>You dont't have an account?</div>
                <NuxtLink to="/register" class="text-green-600"> Register now!</NuxtLink>
            </div>
        </BaseForm>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
    localStorage.setItem("secure_points_param", route.query.secure_points_param)
})


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
    const tokenCookie = useCookie('token')
    tokenCookie.value = "token"
    router.push("/")
}
</script>