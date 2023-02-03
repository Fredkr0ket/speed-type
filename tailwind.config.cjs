/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#e7ceb5',
        'brown': '#653024'
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}