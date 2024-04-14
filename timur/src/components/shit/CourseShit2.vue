<script setup>
import BaseButton from '../BaseButton.vue'
</script>

<template>
	<div class="w-full text-center bg-card py-2">Шаг 2 из 3</div>
	<div class="m-4 flex flex-col gap-y-2">
		<p class="text-center font-semibold text-xl">Презентация</p>
		<router-link to="/courses/6b4f1e9d" class="text-end">
			<BaseButton title="Далее" styles="bg-primary text-white" />
		</router-link>
	</div>
</template>
