<script setup>
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
	<div class="flex flex-col items-center justify-center gap-y-3">
		<div class="flex flex-col items-center justify-center">
			<p class="font-bold text-9xl text-primary">
				4<span class="text-black">0</span>4
			</p>
			<p class="text-2xl font-semibold">Страница не найдена</p>
		</div>
		<router-link to="/">
			<BaseButton title="На главную" />
		</router-link>
	</div>
</template>
