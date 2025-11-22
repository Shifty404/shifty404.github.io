/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8', // Sky 400
        secondary: '#818cf8', // Indigo 400
        accent: '#f472b6', // Pink 400
        background: '#0f172a', // Slate 900
        surface: '#1e293b', // Slate 800
        text: '#f1f5f9', // Slate 100
        muted: '#94a3b8', // Slate 400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
