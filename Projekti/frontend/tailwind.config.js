/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    content: [
      "./index.html", // Varmista, että tämä polku on oikea
      "./src/**/*.{js,ts,jsx,tsx}", // Lisää polut, joissa käytät Tailwind-luokkia
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  