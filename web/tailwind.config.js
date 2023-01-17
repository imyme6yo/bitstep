/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carrot: {
          100: "#FFFFF7",
          200: "#FFFFD1",
          300: "#FFDDAB",
          400: "#FFB785",
          500: "#FF905E",
          600: "#F86A38",
          700: "#C53705",
          900: "#920400",
        },
        brightgreen: {
          100: "#FFFFE2",
          200: "#FFFFBC",
          300: "#FFFF96",
          400: "#DDFF70",
          500: "#B6FF49",
          600: "#90FF23",
          700: "#5DCC00",
          800: "#2A9900",
          900: "#006600",
        },
      },
    },
  },
  plugins: [],
};
