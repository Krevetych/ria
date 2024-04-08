<script setup>
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
</script>

<template>
	<div class="flex flex-col justify-between h-screen">
		<BaseHeader />
		<router-view></router-view>
		<BaseFooter />
	</div>
</template>
