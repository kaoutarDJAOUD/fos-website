export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;700&Aleo:wght@300;400;700&Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
      }],
    }
  }
})
