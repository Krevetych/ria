<script setup>
import { ref } from 'vue'
import axios from 'axios'

const progress = ref(0)
const errors = ref('')
const fileInput = ref(null)

const uploadFile = async () => {
	if (!fileInput.value.files[0]) {
		errors.value = 'Выберите файл для загрузки'
		return
	}
	const formData = new FormData()
	formData.append('file', fileInput.value.files[0])

	try {
		await axios.post('url', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: progressEvent => {
				progress.value = Math.round(
					(progressEvent.loaded / progressEvent.total) * 100
				)
			},
		})
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-[90vh] gap-y-3">
		<p class="font-semibold text-red-600" v-if="errors != ''">{{ errors }}</p>
		<input type="file" ref="fileInput" />
		<button
			@click="uploadFile"
			class="font-semibold bg-primary rounded-lg px-3 py-2 text-white"
		>
			Загрузить файл
		</button>
		<div>Прогресс загрузки: {{ progress }}%</div>
	</div>
</template>
