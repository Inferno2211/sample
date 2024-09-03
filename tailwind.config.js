/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#373E44',
        secondary: '#191B1F',
        tertiary: '#363C43',
      },
    },
  },
  plugins: [],
}

