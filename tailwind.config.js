module.exports = {
	mode: 'jit',
	purge: ['build/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
}
