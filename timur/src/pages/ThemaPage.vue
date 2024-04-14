<script setup>
import CourseShit1 from '../components/shit/CourseShit1.vue'
import CourseShit2 from '../components/shit/CourseShit2.vue'
</script>

<template>
	<div v-if="$route.path === '/courses/3a7b9f1c'">
		<CourseShit1 />
	</div>
	<div v-if="$route.path === '/courses/e5d2a8f7'">
		<CourseShit2 />
	</div>
</template>
