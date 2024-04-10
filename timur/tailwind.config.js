/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#EF7F1A',
				card: '#F5F5F5',
			},
		},
	},
	plugins: [],
}
