/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        work: ['Work Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          background: '#ffedc9',
          foreground: '#332f28',
        },
      },
    },
  },
  plugins: [],
};
