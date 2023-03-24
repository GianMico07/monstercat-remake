/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdfdfd",
        secondary: "#1e90ff",
        tertiary: "#383838",
        dark: "#110F0F",
        accent: "#50A584",
      },

      backgroundImage: {
        'coverbanner' : "url('/dist/img/cover.webp')",
      },

      fontFamily:{
        // MonumentExtended: ['Monument Extended','Arial, Helvetica, sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },

      fontSize: {
        huge: 'clamp(2.4rem, 6vw, 3rem)',
        med: '36px'
      },


      screens: {
          xs: '340px',
        }
    },



    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }
  },
  plugins: [],
}