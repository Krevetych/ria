<script setup>
import BaseButton from '../BaseButton.vue'
</script>

<template>
	<div class="w-full text-center bg-card py-2">Шаг 2 из 3</div>
	<div class="m-4 flex flex-col gap-y-2">
		<p class="text-center font-semibold text-xl">Презентация</p>
		<div>
			<iframe
				src="https://1drv.ms/p/c/23cc0865e7d32273/IQM0IZGVCfvUSIMyp4_EyjctAa5FpQS7EQLiEhCAZk_guOs?em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
				width="100%"
				height="245px"
				frameborder="0"
				style="border-radius: 10px"
			/>
		</div>
		<div class="flex items-center justify-between">
			<router-link to="/courses/3a7b9f1c">
				<BaseButton title="Назад" />
			</router-link>
			<router-link to="/courses/6b4f1e9d">
				<BaseButton title="Далее" styles="bg-primary text-white" />
			</router-link>
		</div>
	</div>
</template>
