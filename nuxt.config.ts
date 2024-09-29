// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@formkit/auto-animate/nuxt', '@pinia/nuxt'],
  css: [
    '~/assets/styles/main.css'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://mikhail-martynenko.github.io/list-materials/'
    }
  }
})