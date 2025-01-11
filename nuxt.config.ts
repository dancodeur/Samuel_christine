// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-easy-lightbox',
    '@nuxt/image',
    'nuxt-locomotive-scroll'
  ]
})