export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tdd1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 3001,
    host: '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  env: {
    default_menu_img: '@/assets/images/food_default.png',
    left_menu_length: 2,
    defaultLocale: 'en-US',
    API_URL: 'https://sks-kiosk-api-thxmckzr2q-du.a.run.app',
    API_SECURE:
      '{ "id": "89a83a0f-d233-11eb-9eed-42010a15700a","secret": "d4333231-9a44-436f-aae9-402153489972"}',
    API_SECURE2:
      '{ "id": "2120d944-cd72-4b19-bc0d-6223d6282ad6","secret": "55f8594d-459b-4911-a8e7-f372a998497a"}',
    API_SECURE3:
      '{ "id": "7806dbde-86ec-4afe-a1e1-c5f78b93ee9d","secret": "7cbf0d79-4944-466f-85d7-a2ecc64abcee"}',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
