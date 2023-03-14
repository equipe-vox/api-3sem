/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': "#141416",
      'blue': '#00B4F1',
      'text-color': '#B3B0B8',
      'input-color': '#2B2C33',
      'white': '#FFFFFF',
      'border-hover': '#FFEF75',
    },
    fontFamily: {
      'body': ['Arial']
    }
  },
  plugins: [],
};
