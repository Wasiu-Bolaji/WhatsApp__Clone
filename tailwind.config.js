/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        colorGreen: '#25d366',
        colorBlack: '#1c1e21',
        colorWhite: '#ffffff',
      },
    },
  },
  plugins: [],
}