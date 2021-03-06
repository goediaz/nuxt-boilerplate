export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-boiler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['nuxt-fontawesome', {
      component: 'Font-awesome', 
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronRight', 'faHeart']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faLinkedinIn', 'faFacebook', 'faTwitter', 'faInstagram' ]
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faHeart']
          },
      ]
   }],
   '@nuxt/content'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
    '@/assets/scss/variables.scss',
    '@/assets/scss/fonts.scss'
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http//production-url' : 'http://localhost:3000')
  }
}
