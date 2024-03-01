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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config