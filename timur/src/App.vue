<script setup>
import { ref, computed } from 'vue'
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'

const windowWidth = ref(window.innerWidth)

const isDeviceSizeExceedsPhone = computed(() => {
	return windowWidth.value > 768
})

window.addEventListener('resize', () => {
	windowWidth.value = window.innerWidth
})
</script>

<template>
	<div
		v-if="isDeviceSizeExceedsPhone"
		class="flex flex-col items-center justify-center h-screen gap-y-3"
	>
		<img src="/logo.png" alt="Logo" />
		<p class="text-2xl font-semibold">
			Данный сайт предназначен только для устройств с экраном меньше 768px
		</p>
		<p>Error code: E01</p>
	</div>
	<BaseHeader />

	<router-view></router-view>
	<BaseFooter />
</template>
