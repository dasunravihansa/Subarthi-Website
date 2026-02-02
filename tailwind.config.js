/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stick: ['"Stick No Bills"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sinhala: ['"Noto Sans Sinhala"', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        dark: '#111827',
        light: '#f3f4f6',
      }
    },
  },
  plugins: [],
}