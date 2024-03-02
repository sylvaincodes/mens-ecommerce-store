import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {

    colors:{

      // default colors 
      gray: colors.gray,
      black: colors.black,
      white: colors.white,

      // Official colors 
      primary:{

        // Haiti 
          50: '#edf0ff',
          100: '#dfe2ff',
          200: '#c4c9ff',
          300: '#a1a6ff',
          400: '#7e7bfe',
          500: '#6a5cf8',
          600: '#5c3eed',
          700: '#4f31d1',
          800: '#402ba8',
          900: '#372a85',
          950: '#161032'

      },
      secondary:{
          // contessa
          50: '#fbf6f5',
          100: '#f6ecea',
          200: '#f0dcd8',
          300: '#e4c3bd',
          400: '#d3a096',
          500: '#ba7264',
          600: '#aa6558',
          700: '#8e5347',
          800: '#77463d',
          900: '#643f38',
          950: '#351e1a', 
      }

    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '8rem',
      },
      screens: {

        'xs': '320px',
        'sm': '575px',
        'md': '768px',
        'lg': '1024px',
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
     
      keyframes: {
        wave: {
          '0%': { transform:  'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'wave': 'wave 1.5s linear infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config