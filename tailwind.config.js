/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin-slow': 'reverse-spin 15s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideUp': 'slideUp 0.3s ease-in-out',
        'scaleX': 'scaleX 0.3s ease-in-out',
        'flicker': 'flicker 3s infinite alternate',
        'scrollDown': 'scrollDown 1.5s infinite',
      },
      keyframes: {
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'scaleX': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            opacity: 1,
          },
          '20%, 24%, 55%': { 
            opacity: 0.7,
          },
        },
        'scrollDown': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};