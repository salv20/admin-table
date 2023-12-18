/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tableDarkP: "#6f6994",
        purple: "#6d5bd0",
        lightOrange: "#ffeccc",
        orange: "#ce8500",
        lightGreen: "#cdffcd",
        green: "#038103",
        lightBlack: "#a29eba",
        searchInput: "#f4f2ff",
      },
    },
  },
  plugins: [],
};
