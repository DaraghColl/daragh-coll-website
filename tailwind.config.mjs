/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(20deg)' },
					'20%': { transform: 'rotate(-20deg)' },
					'30%': { transform: 'rotate(20deg)' },
					'40%': { transform: 'rotate(-8deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' }
				}
			},
			animation: {
				'waving-hand': 'wave 2s linear infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
