const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      pink: {
        light: "hsl(321, 100%, 78%)",
        DEFAULT: "hsl(322, 100%, 66%)",
      },
      red: {
        light: "hsl(0, 100%, 63%)",
      },
      cyan: {
        dark: "hsl(192, 100%, 9%)",
      },
      blue: {
        pale: "hsl(207, 100%, 98%)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    screens: {
      mobile: { max: "375px" },
      xs: { min: "375px" },
      desktop: "1440px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
