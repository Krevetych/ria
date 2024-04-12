<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toHome = () => {
	router.push('/courses')
}
</script>

<template>
	<button @click="toHome">OK</button>
</template>
