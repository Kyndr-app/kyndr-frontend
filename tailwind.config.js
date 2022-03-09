const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#FFC0CA",
        primary: "#F16178",
        secondary: "#9BD739",
        danger: "#FF2449",
        "danger-light": "#FF95A7",
        warning: "#FF7A00",
        "warning-light": "#FFCEA1",
        success: "#1EE994",
        "success-light": "#A9FFDB",
      },
    },
  },
  plugins: [],
};
