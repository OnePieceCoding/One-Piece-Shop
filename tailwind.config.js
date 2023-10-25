/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "cursive"],
      },
      colors: {
        primary1: "#047857",
        primary2: "#22c55e",
        primary3: "#6ee7b7",
        borderColor: "#787878",
        bgColors: "#dcfce7",
        bgBlue: "#06b6d4"
      },
    },
  },
  plugins: [],
};

