/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		
		extend: {
			colors:{
				'primary' : 'green'
				},
			backgroundImage: {
				'bg-header' : "url('./img/header/REHeader.jpg')"
			},
			
		},
	},
	plugins: [],
}
