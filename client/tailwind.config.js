/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',
        secondary: '#4f46e5',
        accent: '#ec4899',
      },
    },
  },
  plugins: [],
}
