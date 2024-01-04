// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  vuetify: {
    treeShake: true
  },
  app: {
    head: {
      script: [
        {
          src: 'https://kit-pro.fontawesome.com/releases/v6.5.1/js/pro.min.js'
        }
      ]
    }
  },
  devServer: {
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }

})