/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
          fontFamily: {
              digital7: ['"digital-7"', "san-serif"],
        }
    },
  },
  plugins: [],
}