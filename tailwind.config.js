  /** @type {import('tailwindcss').Config} */
  // eslint-disable-next-line no-undef
  module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#050816",
          secondary: "#aaa6c3",
          tertiary: "#151030",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
          "delftBlue": "rgba(29, 47, 111, 1)",
      "vistaBlue": "rgba(131, 144, 250, 1)",
      "flax": "rgba(245, 221, 144, 1)",
      "atomicTangerine": "rgba(246, 142, 95, 1)",
      "bittersweet": "rgba(247, 108, 94, 1)",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };