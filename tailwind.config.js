module.exports = {
  purge: [
    './src/**/*.jsx',
  ],
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1800px',
          },
        }
      })
    }
  ],
}
