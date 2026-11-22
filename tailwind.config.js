/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#091428',
          800: '#0d1f3c',
          700: '#132850',
          600: '#1a3464',
        },
        gold: {
          100: '#f5e6c8',
          200: '#e8cc8a',
          300: '#d4a843',
          400: '#c49020',
          500: '#a07818',
        },
        cream: '#f0e6d0',
        parchment: '#e8d8b8',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
