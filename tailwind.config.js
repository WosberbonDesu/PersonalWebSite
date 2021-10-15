module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          twitter: "blue"
        },
        spacing: {
          '15': '3.75rem'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
