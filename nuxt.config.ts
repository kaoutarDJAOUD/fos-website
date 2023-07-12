export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
  ],
  tailwindcss: {
      cssPath: '~/assets/css/input.css'
  }
})
