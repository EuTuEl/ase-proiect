import { useCookie } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')
    if (!token.value) {
        if(!from.query.secure_points_param) {
            return navigateTo('/login')
        }
        return navigateTo('/login?secure_points_param=' + from.query.secure_points_param)
    }
})