/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      founder: ["founder", "sans-serif"],
      neue: ["neue", "sans-serif"],
    },
  },
  plugins: [],
}

