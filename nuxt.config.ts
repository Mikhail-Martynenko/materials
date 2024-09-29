// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@formkit/auto-animate/nuxt', '@pinia/nuxt'],
  css: [
    '~/assets/styles/main.css'
  ],
  app: {
    baseURL: "/materials/", // "" - локально
  },
})