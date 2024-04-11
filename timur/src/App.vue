<script setup>
import { ref, computed, provide } from 'vue'
import { useRouter } from 'vue-router'
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'

const windowWidth = ref(window.innerWidth)

const router = useRouter()

const completionPercentage = ref(0)

const updateCompletion = percentage => {
	completionPercentage.value += percentage
	router.push('/courses')
}

const isDeviceSizeExceedsPhone = computed(() => {
	return windowWidth.value > 768
})

window.addEventListener('resize', () => {
	windowWidth.value = window.innerWidth
})

provide('update', {
	updateCompletion,
	completionPercentage,
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
