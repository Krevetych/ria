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
	<div class="flex flex-col gap-y-3 items-center">
		<p>Welcome, {{ userData.login }}</p>
		<p>Your data: {{ userData.fullName }}</p>
		<button
			@click="logout"
			class="border-solid border-2 border-primary w-fit rounded-lg px-2 py-1 active:bg-primary active:text-white"
		>
			Logout
		</button>
	</div>
</template>
