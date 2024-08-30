/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '225': '225deg',
      }
    },
  },
  plugins: [],
  safelist: [
    'before:rotate-225',
  ]
}

