/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: "class",
  theme: {
    fontFamily: {
      custom: ['Alkatra', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
