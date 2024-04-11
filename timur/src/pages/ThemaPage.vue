<script setup>
import { inject } from 'vue'

const { updateCompletion } = inject('update')
</script>

<template>
	<button @click="updateCompletion(100 / 3)">OK</button>
</template>
