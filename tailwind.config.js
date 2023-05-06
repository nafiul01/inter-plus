/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: '#FD3D8B',
        primaryColorShade: '#E4E3FF',
        secondaryColor: '#0D6EFD',
        secondaryColorShade: '#d1d5db',
        tertiaryColor: '#38AB00',
        tColor:'#535353',
    },
      fontFamily:{
        'mulish': 'Mulish',
        'helvetica':'Helvetica',
      }},
  },
  plugins: [
    (function({ addBase }) {
      addBase({
         'h1': { fontSize: "4.0rem" },
         'h2': { fontSize: "3.5rem" },
         'h3': { fontSize: "3.0rem" },
         'h4': { fontSize: "2.5rem" },
         'h5': { fontSize: "2.0rem" },
         'h6': { fontSize: "1.5rem" },
       })
     }),
  ],
}

