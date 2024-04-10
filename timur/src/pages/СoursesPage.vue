<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userData = reactive({
	fullName: '',
	login: '',
	password: '',
})

const router = useRouter()

const logout = () => {
	localStorage.removeItem('userData')
	userData.fullName = ''
	userData.login = ''
	userData.password = ''
	router.replace('/')
}

onMounted(() => {
	const storedUserData = localStorage.getItem('userData')
	if (storedUserData) {
		Object.assign(userData, JSON.parse(storedUserData))
	} else {
		router.push('/')
	}
})
</script>

<template>
	<p class="text-2xl">courses page</p>
</template>
