const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		variants: {
			backgroundColor: ["responsive", "hover", "focus", "active"],
			extend: {
				scale: ["group-hover"],
			},
		},
	},
	plugins: [],
}
