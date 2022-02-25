const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#FFC0CA",
        primary: "#F16178",
        secondary: "#9BD739",
      },
    },
  },
  plugins: [],
};
