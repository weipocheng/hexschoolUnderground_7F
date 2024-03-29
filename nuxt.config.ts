// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  devtools: { enabled: true },
  css: ['~/assets/scss/index.scss'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/hexschoolUnderground_7F/' : '/',
  }
})
