<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseCourseCard from '../components/BaseCourseCard.vue'

const userData = reactive({
	fullName: '',
	login: '',
	password: '',
})

const activeItem = ref(null)

const router = useRouter()

const items = [
	{
		header: {
			title: 'Название модуля 1',
			desc: 'Краткое описание курса',
			status: 'в процессе',
			percent: '63',
			disabled: false,
		},
		content: [
			{
				id: '1.1.',
				title: 'Название темы 1',
				status: 'пройден',
				link: '3a7b9f1c',
			},
			{
				id: '1.2.',
				title: 'Название темы 2',
				status: 'в процессе',
				link: 'e5d2a8f7',
			},
			{
				id: '1.3.',
				title: 'Название темы 3',
				status: 'не начат',
				link: '6b4f1e9d',
			},
			{
				id: '1.4.',
				title: 'Название темы 4',
				status: 'не начат',
				link: 'a3c8f7b2',
			},
			{
				id: '1.5.',
				title: 'Название темы 5',
				status: 'не начат',
				link: '9d1e6b4f',
			},
		],
	},
	{
		header: {
			title: 'Название модуля 2',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: true,
		},

		content: { title: 'Пусто' },
	},
	{
		header: {
			title: 'Название модуля 3',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: false,
		},

		content: { title: 'Пусто' },
	},
	{
		header: {
			title: 'Название модуля 4',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: false,
		},

		content: { title: 'Пусто' },
	},
	{
		header: {
			title: 'Название модуля 5',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: false,
		},
		content: { title: 'Пусто' },
	},
]

const toggleAccordion = index => {
	if (activeItem.value === index) {
		activeItem.value = null
	} else {
		activeItem.value = index
	}
}

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
	<p class="text-center font-semibold text-xl">Учебный курс</p>

	<div v-for="(item, index) in items" @click="toggleAccordion(index)">
		<BaseCourseCard :item="item" :index="index" :active-item="activeItem" />
	</div>
</template>
