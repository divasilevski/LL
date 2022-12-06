import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700',
          rel: 'stylesheet',
        },
      ],
    },
  },
  extends: ['./ui'],
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
