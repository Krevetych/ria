<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseCourseCard from '../components/BaseCourseCard.vue'

const userData = reactive({
	fullName: '',
	login: '',
	password: '',
})

const router = useRouter()

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
	<p class="text-center font-semibold text-xl">Учебный модуль</p>

	<div>
		<BaseCourseCard status="пройден" percent="100" title="R7tY2a9Z" />
		<BaseCourseCard status="не начат" disabled />
		<BaseCourseCard status="не начат" disabled />
		<BaseCourseCard status="не начат" disabled />
		<BaseCourseCard status="не начат" disabled />
	</div>
</template>
