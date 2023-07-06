module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        content: 'Play',
        headings: 'DelaGothicOne',
      },
      colors: {
        primary: '#FFB300',
        secondary: '#FF4D00'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
