/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        'roboto': ['"Roboto"'],
      },
    },
  },
  plugins: [],
}
