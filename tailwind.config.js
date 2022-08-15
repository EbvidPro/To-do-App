/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-lavender': '#d1b1c8',
        'wild-blue': '#b1b7d1',
        'manatee': '#9b9fb5',
        'mountbatten': '#8c7284',
        'old-lavender': '#7a6174',
      },
    },
  },
  plugins: [],
}
