/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fuente/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        comfortaa : ['Comfortaa', 'sans-serif'],
        galada : ['Galada', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif']
      },
      colors: {
        colores: {
          'header' : '#526A40',
          'footer' : 'rgba(86, 58, 29, .9)',
          'btn-reserva' : '#11150D',
          'seccion-secundaria' : 'rgba(181, 234, 140, .4)' 
        }
      },
      screens: {
        'tableta' : '450px',
        'ordenador' : '950px',
      }
    },
  },
  plugins: [],
}

