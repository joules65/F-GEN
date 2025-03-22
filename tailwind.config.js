/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'burgundy': 'oklch(0.396 0.141 25.723)',
        'golden': '#FFD700',
      },
    },
  },
  plugins: [],
};
