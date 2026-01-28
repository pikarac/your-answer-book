/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
      },
      colors: {
        gold: {
          100: '#F9F1D0',
          200: '#F0E68C',
          300: '#D4AF37',
          400: '#C5A028',
          500: '#B8860B',
          600: '#AA7500',
          900: '#423104',
        },
        mystic: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#1e0b3b',
          950: '#0f051a',
        },
        paper: {
          100: '#F4ECD8',
          200: '#E8DEC0',
          300: '#DBCBA0',
          800: '#4A4238',
          900: '#2C241B',
        }
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
