import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/index.css'
import App from './App.vue'
import LoginPage from './pages/LoginPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import ProfilePage from './pages/temporarily/ProfilePage.vue'

const app = createApp(App)

const routes = [
	{ path: '/', name: 'Login', component: LoginPage },
	{ path: '/profile', name: 'Profile', component: ProfilePage },
	{ path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

app.use(router)

app.mount('#app')
