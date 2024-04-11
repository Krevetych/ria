<script setup>
import { reactive, ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import BaseCourseCard from '../components/BaseCourseCard.vue'

const { completionPercentage } = inject('update')

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
			title: 'Обучающий модуль №1.',
			desc: 'Краткое описание курса не найдено',
			status: completionPercentage.value == 100 ? 'пройден' : 'в процессе',
			percent:
				completionPercentage.value >= 100
					? '100'
					: completionPercentage.value.toFixed(1),
			disabled: false,
		},
		content: [
			{
				id: '1.1.',
				title:
					'Учебный фильм: «Обязанности водителей и ответственность водителя»',
				status: 'пройден',
				link: '3a7b9f1c',
			},
			{
				id: '1.2.',
				title:
					'Презентация: «Обязанности водителей и ответственность водителя»',
				status: 'не начат',
				link: 'e5d2a8f7',
			},
			{
				id: '1.3.',
				title:
					'Тест по теме: «Обязанности водителей и ответственность водителя»',
				status: 'не начат',
				link: '6b4f1e9d',
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
			disabled: true,
		},

		content: { title: 'Пусто' },
	},
	{
		header: {
			title: 'Название модуля 4',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: true,
		},

		content: { title: 'Пусто' },
	},
	{
		header: {
			title: 'Название модуля 5',
			desc: 'Краткое описание курса',
			status: 'не начат',
			percent: '',
			disabled: true,
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
