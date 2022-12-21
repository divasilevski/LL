module.exports = {
  theme: {
    colors: {
      background: '#FFFFFF',

      white: '#FFFFFF',
      black: '#000000',
      gradient: {
        'from-blue': '#4FAAFF',
        'to-blue': '#87C5FF',
      },
    },

    extend: {
      animation: {
        fade: 'fade 0.3s ease-in-out',
      },
      keyframes: (theme) => ({
        fade: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.100') },
        },
      }),
    },
  },
}
