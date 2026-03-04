/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#c6a46a',
        'bg-main': '#ffffff',
        'bg-dark': '#0f0f0f',
        'bg-card': '#ffffff',
        heading: '#111111',
        paragraph: '#6f6f6f',
        muted: '#9a9a9a',
        border: '#e5e5e5',
        hover: '#c6a46a',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
