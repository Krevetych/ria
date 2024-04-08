<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
	<div
		class="flex flex-col items-center justify-center gap-y-10 shadow-xl m-5 py-5 px-3 rounded-lg border-solid border-2 border-slate-300"
	>
		<h1 class="font-bold text-2xl">Авторизация</h1>
		<div class="flex flex-col items-center justify-center gap-y-3">
			<input
				type="text"
				class="font-semibold border-2 border-solid border-slate-300 rounded-lg px-2 py-1"
				placeholder="Введите логин"
			/>
			<input
				type="password"
				class="font-semibold border-2 border-solid border-slate-300 rounded-lg px-2 py-1"
				placeholder="Введите пароль"
			/>
		</div>
		<BaseButton title="Войти" />
	</div>
</template>
