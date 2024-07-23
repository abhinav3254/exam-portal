/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3f2668",
        "white": "#f7f8fa",
        "gray": "#9da2a6",
        "gray_hover": "#c9cdcd"
      },
      fontFamily: {
        "Lora": "Lora",
        "Sevillana": "Sevillana"
      }
    },
  },
  plugins: [],
}