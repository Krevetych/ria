<script setup>
defineProps({
	disabled: Boolean,
	status: String,
	percent: String,
	title: String,
})
</script>

<template>
	<div
		class="flex flex-col gap-y-2 rounded-lg shadow-lg px-4 py-2 m-2 border-solid border-2 border-slate-300 bg-white"
		:class="disabled ? 'bg-card' : ''"
	>
		<router-link :to="/courses/ + title">
			<p class="text-xl font-semibold text-primary">Название модуля</p>
		</router-link>
		<div>
			<p>Краткое описание курса</p>
			<div class="flex justify-between items-center">
				<p>
					Статус: <span class="font-semibold text-primary">{{ status }}</span>
				</p>
				<p v-if="status != 'не начат'" class="text-primary font-semibold">
					{{ percent }}%
				</p>
			</div>
		</div>
	</div>
</template>
