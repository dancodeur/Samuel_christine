// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-easy-lightbox', '@nuxt/image', 'nuxt-locomotive-scroll', 'nuxt-aos'],
  tailwindcss: { 
    config: {
      theme: {
        extend: {
          colors: {
            'dodger-blue': {  DEFAULT: '#3B82F6',  50: '#EBF2FE',  100: '#D7E6FD',  200: '#B0CDFB',  300: '#89B4FA',  400: '#629BF8',  500: '#3B82F6',  600: '#0B61EE',  700: '#084BB8',  800: '#063583',  900: '#041F4D',  950: '#021532'},
          }
        }
      }
    }
  }
  

});