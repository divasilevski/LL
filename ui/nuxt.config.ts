import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  components: [{ path: './components', prefix: 'UI' }],
  vite: {
    plugins: [svgLoader({ defaultImport: 'component' })],
  },
})
