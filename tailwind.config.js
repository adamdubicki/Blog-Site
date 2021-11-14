module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#e95378",
        secondary: "#21bfc2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
