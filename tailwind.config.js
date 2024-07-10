/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins'],
      'rubik': ['rubik'],
    },
    extend: {
      screens: {
        'sm': '400px',
      },
    },
  },
  plugins: [],
}

