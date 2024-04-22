/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif'], // Roboto as the primary sans-serif font
    },
    extend: {
      colors: {
        // Define your custom colors here
       "custom-cyan": "hsl(179, 62%, 43%)",
"bright-yellow": "hsl(71, 73%, 54%)",
"light-gray": "hsl(204, 43%, 93%)",
"grayish-blue":" hsl(218, 22%, 67%)"
      },
    },
  },
  plugins: [],
}
