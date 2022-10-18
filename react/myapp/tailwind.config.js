/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center:true
      },
      screens: {
        'xsx': '400px', // min-width
        'smx': '576px', // min-width
        'mdx': '768px', // min-width
        'lgx': '992px', // min-width
        'xlx': '1200px', // min-width
      },
    },
  },
  plugins: [],
}
