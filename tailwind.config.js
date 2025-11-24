/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        primary: '#22d3ee', // Cyan
        secondary: '#8b5cf6', // Violet
        accent: '#f43f5e', // Rose
        background: '#0B1120', // Deep Navy
        surface: '#1e293b',
        text: '#f1f5f9',
        muted: '#94a3b8',
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
