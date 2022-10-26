import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  vite: {
    plugins: [svgLoader({ defaultImport: 'component' })],
  },
})
