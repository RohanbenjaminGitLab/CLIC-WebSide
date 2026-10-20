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
          DEFAULT: '#8F173D',
          light: '#f09eb8',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(101, 22, 49, 0.3)',
        'brand-lg': '0 20px 40px -15px rgba(101, 22, 49, 0.35)',
        'glow': '0 0 25px -5px rgba(143, 23, 61, 0.4)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
