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
        overlayIn: 'overlay 0.3s ease-in-out',
        overlayOut: 'overlay 0.3s ease-in-out reverse',
        drawerIn: 'drawer 0.3s ease-in-out',
        drawerOut: 'drawer 0.3s ease-in-out reverse',
      },
      keyframes: (theme) => ({
        overlay: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.60') },
        },
        drawer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }),
    },
  },
}
