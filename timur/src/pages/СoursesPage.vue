<script setup>
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import BaseCourseCard from '../components/BaseCourseCard.vue'
import BaseButton from '../components/BaseButton.vue'

const userData = reactive({
	fullName: '',
	login: '',
	password: '',
})

const activeItem = ref(null)

const items = reactive([])

const router = useRouter()

const logout = () => {
	localStorage.removeItem('userData')
	userData.fullName = ''
	userData.login = ''
	userData.password = ''
	router.replace('/')
}

const toggleAccordion = index => {
	if (activeItem.value === index) {
		activeItem.value = null
	} else {
		activeItem.value = index
	}
}

const fetchItems = async () => {
	try {
		axios.get('https://a44683b5bad1089d.mokky.dev/courses').then(res => {
			items.push(...res.data)
		})
	} catch (error) {
		console.log(error)
	}
}

onMounted(async () => {
	await fetchItems()
	const storedUserData = localStorage.getItem('userData')
	if (storedUserData) {
		Object.assign(userData, JSON.parse(storedUserData))
	} else {
		router.push('/')
	}
})
</script>

<template>
	<div class="flex items-center justify-between mx-2">
		<p class="text-center font-semibold text-xl">Учебный курс</p>
		<div @click="logout">
			<BaseButton title="Выход" />
		</div>
	</div>

	<div v-for="(item, index) in items" @click="toggleAccordion(index)">
		<BaseCourseCard :item="item" :index="index" :active-item="activeItem" />
	</div>
</template>
