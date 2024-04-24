<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import BaseButton from '../BaseButton.vue'
const tests = reactive([])
const answerStyles = reactive({})

const shuffleQuestions = questions => {
	for (let i = questions.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[questions[i], questions[j]] = [questions[j], questions[i]]
	}
	return questions
}

const shuffleAnswers = answers => {
	for (let i = answers?.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[answers[i], answers[j]] = [answers[j], answers[i]]
	}
	return answers
}

const fetchItems = async () => {
	try {
		await axios
			.get('https://a44683b5bad1089d.mokky.dev/tests')
			.then(res => tests.push(...res.data))
	} catch (error) {
		console.log(error)
	}
}

const check_answers = (answerId, rightAnswer) => {
	if (answerId === +rightAnswer) {
		answerStyles[answerId] = 'text-white bg-green-500 font-semibold'
	} else {
		answerStyles[answerId] = 'text-white bg-red-500 font-semibold'
	}
}

onMounted(async () => {
	await fetchItems()
	await shuffleQuestions(tests)
	for (const question of tests) {
		tests.answers = shuffleAnswers(question.answers)
	}
})
</script>

<template>
	<div class="w-full text-center bg-card py-2">Шаг 3 из 3</div>
	<div class="m-4 flex flex-col gap-y-2">
		<p class="text-center font-semibold text-xl">Тест</p>
		<div
			v-for="test in tests"
			:key="test.id"
			class="bg-white rounded-lg shadow-xl px-5 py-3 border-solid border-slate-300 border-2 flex flex-col gap-y-2"
		>
			<p class="text-md font-bold whitespace-pre-wrap">
				{{ test.id }}. {{ test.title }}
			</p>
			<div
				v-for="answer in test.answers"
				:key="answer.id"
				@click="() => check_answers(answer.id, test.right_answer)"
			>
				<p
					:class="
						answerStyles[answer.id] ? answerStyles[answer.id] : 'bg-white'
					"
					class="rounded-lg shadow-xl px-5 py-3 border-solid border-slate-300 border-2"
				>
					{{ answer.title }}
				</p>
			</div>
		</div>
		<div class="flex items-center justify-between">
			<router-link to="/courses/e5d2a8f7">
				<BaseButton title="Назад" />
			</router-link>
			<router-link to="/courses">
				<BaseButton title="Завершить" styles="bg-primary text-white" />
			</router-link>
		</div>
	</div>
</template>
