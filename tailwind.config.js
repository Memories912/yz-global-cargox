/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { dark: "#002A35", yellow: "#FFDA00", blue: "#6682C2", light: "#F7F7F2" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "Impact", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      screens: { xs: "390px" },
    },
  },
  plugins: [],
};
