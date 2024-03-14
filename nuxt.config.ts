// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'LazyCast',
      htmlAttrs: {
        lang: 'zh-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/png", href: "" }
      ],
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: '輔大心理系邀請你一起做職涯探索' },
        { hid: 'og:title'  , property: 'og:title'  , content: '心理系職涯探索趣味測驗'},
        { hid: 'og:description' , property: 'og:description' , content: '輔大心理系邀請你一起做職涯探索'},
        { hid: 'og:url' , property: 'og:url' , content: 'https://fjupsy-career-quiz.pages.dev/'},
        { hid: 'og:image' , property: 'og:image' , content: 'https://res.cloudinary.com/dyqzurvuj/image/upload/f_auto,q_auto/v1/FJUPSY/og_img'},
        { hid: 'og:type' , property: 'og:type' , content: 'website'},
      ]
    }},

  devtools: { enabled: false },
  ssr: false,
  css: ['~/assets/sass/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: ''
    },
  },

});
