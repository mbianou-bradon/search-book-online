/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#007bff",
        primary_dark : "#0D324D"
      }
    },
  },
  plugins: [],
}
