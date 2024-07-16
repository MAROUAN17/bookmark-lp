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
        '31': '7.9rem',
        '47': '12.1rem',
        '98': '24rem',
        '110': '36rem',
        '120': '42rem',
        '140': '48rem',
      }
    },
  },
  plugins: [],
}

