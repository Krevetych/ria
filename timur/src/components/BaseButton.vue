<script setup>
defineProps({
	title: String,
	styles: String,
})
</script>

<template>
	<button
		class="px-3 py-2 rounded-lg font-semibold"
		:class="
			styles
				? styles
				: 'border-solid border-2 border-primary active:bg-primary active:text-white'
		"
	>
		{{ title }}
	</button>
</template>
