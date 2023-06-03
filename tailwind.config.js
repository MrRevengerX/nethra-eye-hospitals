/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      nethraBlue: "#345CA1",
      nethraBlueDark: "#173E81",
    },
    extend: {},
  },
  plugins: [],
};
