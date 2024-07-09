/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins'],
    },
    extend: {
      screens: {
        'sm': '400px',
      },
    },
  },
  plugins: [],
}

