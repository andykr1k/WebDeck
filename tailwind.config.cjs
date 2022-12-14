/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'browndark' : '#6f5f52',
      'browngrey' : '#887d77',
      'brownlight' : '#a29b9c',
      'greydark' : '#bcbac2',
      'greylight' : '#fefbf6',
      'lblue' : '#C0E0DE',
      'greenblue' : '#1E91D6',
      'raisin' : '#2E2C2F'
    },
  },
  plugins: [require('@tailwindcss/forms')],
}