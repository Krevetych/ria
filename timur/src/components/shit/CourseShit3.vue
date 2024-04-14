<script setup>
import BaseButton from '../BaseButton.vue'
</script>

<template>
	<div class="w-full text-center bg-card py-2">Шаг 3 из 3</div>
	<div class="m-4 flex flex-col gap-y-2">
		<p class="text-center font-semibold text-xl">Тест</p>
		<p class="text-center text-3xl">Тут будет тест</p>
		<router-link to="/courses/e5d2a8f7" class="text-start">
			<BaseButton title="Назад" />
		</router-link>
	</div>
</template>
