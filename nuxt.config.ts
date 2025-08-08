// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,
  css: [
    '@/assets/css/main.css',
    '@/assets/css/common.css',
  ],
  app: {
    head: {
      title: '뉴스피릿 공모전',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
