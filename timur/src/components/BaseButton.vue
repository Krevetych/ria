<script setup>
defineProps({
	title: String,
})
</script>

<template>
	<button
		class="px-3 py-2 rounded-lg font-semibold border-solid border-2 border-primary active:bg-primary active:text-white"
	>
		{{ title }}
	</button>
</template>
