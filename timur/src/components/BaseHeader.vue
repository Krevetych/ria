<script setup>
defineProps({
	phone: String,
})
//+7(929) 278-22-55
</script>

<template>
	<div class="p-5 flex items-center justify-end">
		<div>
			<img src="" alt="" />
			<p class="">{{ phone }}</p>
		</div>
		<router-link to="/">
			<img src="/logo.png" alt="Logo" />
		</router-link>
	</div>
</template>
