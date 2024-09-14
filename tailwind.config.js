/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        work: ['Work Sans Variable', ...defaultTheme.fontFamily.sans],
        noto: ['Noto Sans Variable', ...defaultTheme.fontFamily.sans],
        alkatra: ['Alkatra Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          background: '#ffedc9',
          foreground: '#332f28',
        },
        secondary: {
          background: '#ccbea1',
        },
      },
      keyframes: {
        'arrow-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(2px)' },
        },
        'arrow-left-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        'arrow-up-down': 'arrow-up-down 1s ease-in-out infinite',
        'arrow-left-right': 'arrow-left-right 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
