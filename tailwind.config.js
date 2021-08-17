module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "hsl(207, 26%, 17%)",
        "dark-elements": "hsl(209, 23%, 22%)",
        "dark-mode": "hsl(0, 0%, 100%)",

        light: "hsl(0, 0%, 95%)",
        "light-elements": "hsl(0, 0%, 100%)",
        "light-mode": "hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
