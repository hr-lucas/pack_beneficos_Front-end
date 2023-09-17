/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,html,js}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': "#0067CB",
        'secondary': "#51AB00",
        'white': "#ffff",
      },
      fontSize: {
        title_lg: ['2rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        }],
        subtitle_lg: ['1rem', {
          lineHeight: '1.3rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
      },
      boxShadow: {
        xl: '0px 10px 25px rgba(0, 0, 0, 0.1)',
        radio: 'inset 1em 1em #0067CB'
      },
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  ],
}

