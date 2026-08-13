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
          50: '#fdf2f5',
          100: '#fbe5eb',
          200: '#f8cad7',
          300: '#f09eb8',
          400: '#e36990',
          500: '#d43e6f',
          600: '#b72555',
          700: '#8F173D',
          800: '#781636',
          900: '#651631',
          950: '#3b091a',
          DEFAULT: '#651631',
        },
        primary: {
          DEFAULT: '#651631',
          hover: '#781636',
          light: '#fdf2f5',
        },
        secondary: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        accent: {
          DEFAULT: '#651631',
          light: '#f09eb8',
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
