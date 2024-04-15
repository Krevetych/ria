<script setup>
import BaseButton from '../BaseButton.vue'
</script>

<template>
	<div class="w-full text-center bg-card py-2">Шаг 1 из 3</div>
	<div class="m-4 flex flex-col gap-y-2">
		<p class="text-center font-semibold text-xl">Видеоурок</p>
		<video
			controls
			src="/video.mp4"
			style="border-radius: 10px"
		/>
	</div>
</template>
