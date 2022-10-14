const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      primary: '#4F646F',
      secondary: '#000000',
      background: '#F4FAFF',
      surface: '#DEE7E7',
      accent: '#B7ADCF',
      error: '#D32F2F',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.app-container': {
          margin: theme('margin.auto'),
          paddingLeft: theme('padding.7'),
          paddingRight: theme('padding.7'),
          maxWidth: theme('maxWidth.7xl'),
          width: theme('width.full'),
        },
      })
    }),
  ],
}
