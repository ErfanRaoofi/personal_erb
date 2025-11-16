const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '1rem',
          xl: '5rem',
          '2xl': '20rem',
        },
      },
      colors: {
        primary: '#d92e27',
        background: '#111111',
        secundBackground: '#181818',
        card: '#2e2e2e',
        text: '#ffffff',
        subtext: '#999999',
        blackpure: '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
