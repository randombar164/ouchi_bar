module.exports = {
  mode: "jit",
  purge: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        barOrange: {
          1: "#FFBBAD",
          2: "#FF6749",
          3: "#FF3B14",
          4: "#E02500",
          5: "#AD1D00",
        },
        barGray: {
          1: "#F5F5F5",
          2: "#A7B6C8",
          3: "#505050",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
