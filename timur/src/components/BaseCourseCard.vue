<script setup>
defineProps({
	item: Object,
	index: Number,
	activeItem: {
		type: [Object, Number],
	},
})
</script>

<template>
	<div
		class="flex flex-col gap-y-2 rounded-lg shadow-lg px-4 py-2 m-2 border-solid border-2 border-slate-300"
		:class="item.header.disabled ? 'bg-card' : 'bg-white'"
	>
		<p class="text-xl font-semibold text-primary">{{ item.header.title }}</p>
		<div>
			<p>{{ item.header.desc }}</p>
			<div class="flex justify-between items-center">
				<p>
					Статус:
					<span class="font-semibold text-primary">{{
						item.header.status
					}}</span>
				</p>
				<p
					v-if="item.header.status != 'не начат'"
					class="text-primary font-semibold"
				>
					{{ item.header.percent }}%
				</p>
			</div>
		</div>
	</div>
	<div
		v-if="activeItem === index && !item.header.disabled"
		v-for="cours in item.content"
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
				<p class="font-semibold">{{ cours.id }} {{ cours.title }}</p>
			</router-link>
			<p>
				Статус:
				<span class="font-semibold text-primary">{{ cours.status }}</span>
			</p>
		</div>
	</div>
</template>
