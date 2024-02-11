/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'metropolis': ['Metropolis', 'sans-serif']
			}, 
            screens:{
                'minicelular': '410px'

            }

		},
	},
	plugins: [ 
		 require('tailwindcss-bg-patterns')
		],
}
