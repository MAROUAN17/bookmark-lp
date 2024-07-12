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
      spacing: {
        '17': '4.4rem',
        '47': '12.1rem',
      }
    },
  },
  plugins: [],
}

