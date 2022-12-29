const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      primary: '#6E7B8D',
      secondary: '#E1E5E8',
      background: '#FFFFFF',
      surface: '#F9F9F9',

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
          paddingLeft: theme('padding.5'),
          paddingRight: theme('padding.5'),
          maxWidth: theme('maxWidth.4xl'),
          width: theme('width.full'),
        },
      })
    }),
  ],
}
