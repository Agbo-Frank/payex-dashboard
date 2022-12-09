/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#12131E',
        border: '#F3F2F0',
        orange: '#F4A85D',
        copy: 'rgba(205, 205, 205, 0.26)',
        logout: '#F07459'
      },
      boxShadow: {
        shadow1: '0px 2px 7px rgba(0, 0, 0, 0.07)',
      },
      width: {
        w16: '16%',
        w18: '18%',
        w23: '23%',
      },
      spacing: {
        s16: '16%',
        s18: '18%',
        s20: '20%',
        s23: '23%',
        s25: '25%',
      },
      translate: {
        'M100': '-100%',
      },
    },
  },
  plugins: [],
}
