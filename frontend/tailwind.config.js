/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        darkblue: "#00072D"
      },
      fontFamily: {
        joti: ['joti']
      }
    },
  },
  plugins: [],
};

