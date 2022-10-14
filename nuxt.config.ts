// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
})
