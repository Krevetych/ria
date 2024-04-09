<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from './BaseButton.vue'

const router = useRouter()

const formData = reactive({
	login: '',
	password: '',
})

const submitForm = () => {
	localStorage.setItem('userData', JSON.stringify(formData))
	router.replace('/profile')
}
</script>

<template>
	<div
		class="flex flex-col items-center justify-center gap-y-10 shadow-xl m-5 py-5 px-3 rounded-lg border-solid border-2 border-slate-300"
	>
		<h1 class="font-bold text-2xl">Авторизация</h1>
		<div class="flex flex-col items-center justify-center gap-y-3">
			<input
				v-model="formData.login"
				type="text"
				class="font-semibold border-2 border-solid border-slate-300 rounded-lg px-2 py-1"
				placeholder="Введите логин"
			/>
			<input
				v-model="formData.password"
				type="password"
				class="font-semibold border-2 border-solid border-slate-300 rounded-lg px-2 py-1"
				placeholder="Введите пароль"
			/>
		</div>
		<div @click="submitForm">
			<BaseButton title="Войти" />
		</div>
	</div>
</template>
