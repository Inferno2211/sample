/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors:{
        primary: '#282D32',
        secondary: '#191B1F',
        tertiary: '#363C43',
      },
    },
  },
  plugins: [],
}

