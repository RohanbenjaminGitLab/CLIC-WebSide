/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf3f7',
          100: '#f8e8f0',
          200: '#f2d1e2',
          300: '#e5adc9',
          400: '#d37ea6',
          500: '#bd5384',
          600: '#9d3b6a',
          700: '#751c58', // BRAND PRIMARY Plum/Burgundy
          800: '#641b4b',
          900: '#531b40',
          950: '#340a25',
          DEFAULT: '#751c58',
        },
        primary: {
          DEFAULT: '#751c58',
          hover: '#922971',
          light: '#fbf3f7',
        },
        secondary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#38BDF8',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
