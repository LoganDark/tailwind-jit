module.exports = {
  mode: 'jit',
  purge: [
      'src/*.html',
      'build/**/*.html',
  ],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
