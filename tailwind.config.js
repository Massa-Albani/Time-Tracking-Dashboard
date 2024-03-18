/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1024px',
    },
    colors: {
      vuejs: {
        blue_800: "#1c1f4a",
        blue_200: "#bdc1ff"
      }
    },
    extend: {
    },
  },
  plugins: [],
}

