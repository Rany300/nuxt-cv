/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        'light-gray': '#f7f7f7',
        green: {
          DEFAULT: '#7fb069',
          '100': '#e6f1e1',
          '200': '#bfddc2',
          '300': '#99c9a3',
          '400': '#72b484',
          '500': '#5C9B6A',
          '600': '#4d8357',
          '700': '#3d6b43',
          '800': '#2e5230',
          '900': '#1e3a1c',
        },
        blue: '#0077c2',
        orange: {
          DEFAULT: '#ff9b4e',
          '100': '#fff4e6',
          '200': '#ffe4bf',
          '300': '#ffd599',
          '400': '#ffc474',
          '500': '#ff9b4e',
          '600': '#e6803d',
          '700': '#bf642c',
          '800': '#993f1b',
          '900': '#661f0b',
        },
      },
    },
  },
  plugins: [],
};
