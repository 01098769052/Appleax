/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing: {
        100: "10rem",
        200: "20rem",
        300: "30rem",
      },
      colors: {
        somaia: "navy",
      },
      screens: {
        laptop: "1024px",
        ipad: "600px",
      },
      backgroundImage: {
        mainImg: "url('../src/images/bg.jpg')",
      },
      padding: {
        pSection: "70px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "selector",
};
