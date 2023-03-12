/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        background : {
          'from' : '#f6d365',
          'to' : '#fda085'
        
        },

        purple: {
         875 : '#8758ff',
         114 : '#1A1A40',
         'place' : '#ffffff4d',
         'btn' : '#f7fffe',
         'btn-hov' : '#ff6f47'
        }
      },
      spacing: {
        '300': '18.75rem'
      }
    },
  },
  plugins: [],
}
