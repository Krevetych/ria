<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

defineProps({
	item: Object,
	index: Number,
	activeItem: {
		type: [Object, Number],
	},
})

const courses = reactive([])

const fetchItems = async id => {
	try {
		await axios
			.get(`https://a44683b5bad1089d.mokky.dev/themas?course_id=${id}`)
			.then(res => {
				courses.push(...res.data)
			})
	} catch (error) {
		console.log(error)
	}
}

const updateCourse = async (id, percent, thema_id) => {
	try {
		await axios.patch(`https://a44683b5bad1089d.mokky.dev/themas/${thema_id}`, {
			status: 'пройден',
		})
		updateModule(id, percent)
	} catch (error) {}
}

const updateModule = async (id, percent) => {
	try {
		const newPercent =
			percent >= 100 ? 100 : Math.min(100, parseFloat(percent + 100 / 3))
		console.log(newPercent)
		await axios.patch(`https://a44683b5bad1089d.mokky.dev/courses/${id}`, {
			status: newPercent === 100 ? 'пройден' : 'в процессе',
			percent: newPercent,
		})
	} catch (error) {
		console.log(error)
	}
}

onMounted(async () => {
	await fetchItems(1)
})
</script>

<template>
	<div
		class="flex flex-col gap-y-2 rounded-lg shadow-lg px-4 py-2 m-2 border-solid border-2 border-slate-300"
		:class="item.disabled ? 'bg-card' : 'bg-white'"
	>
		<p class="text-xl font-semibold text-primary">{{ item.title }}</p>
		<div>
			<p>{{ item.desc }}</p>
			<div class="flex justify-between items-center text-gray-400">
				<p>
					Статус:
					<span class="font-semibold">soon</span>
				</p>
				<p v-if="item.status != 'не начат'" class="font-semibold">
					{{ item.percent.toFixed(1) }}%
				</p>
			</div>
		</div>
	</div>
	<div
		v-if="activeItem === index && !item.disabled"
		v-for="cours in courses"
		@click="updateCourse(item.id, item.percent, cours.id)"
	>
		<div
			v-if="cours == 'Пусто'"
			class="flex flex-col rounded-lg shadow-lg px-4 py-2 m-2 ml-7 border-solid border-2 border-slate-300 bg-white"
		>
			Пусто
		</div>
		<div
			v-else
			class="flex flex-col rounded-lg shadow-lg px-4 py-2 m-2 ml-7 border-solid border-2 border-slate-300 bg-white"
			:class="cours.status == 'не начат' ? 'bg-card' : ''"
		>
			<router-link :to="/courses/ + cours.link">
				<p class="font-semibold">{{ cours.id_thema }} {{ cours.title }}</p>
			</router-link>
			<p class="text-gray-400">
				Статус:
				<span class="font-semibold">soon</span>
			</p>
		</div>
	</div>
</template>
