<script setup>
defineProps({
	phone: String,
})
</script>

<template>
	<div class="p-5 flex items-center justify-end gap-x-3">
		<div class="flex items-center gap-x-2" v-if="$route.path != '/'">
			<img src="/phone.png" alt="phone" />
			<p class="">+7(929) 278-22-55</p>
		</div>
		<router-link to="/courses">
			<img src="/logo.png" alt="Logo" />
		</router-link>
	</div>
</template>
