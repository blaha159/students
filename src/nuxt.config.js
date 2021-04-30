export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'RestApi client' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#003E8C' },
  /*
  ** Global CSS
  */
  css: [
    'assets/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/api.js' },
    { src: '~plugins/vue-shortkey.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  auth: {
    redirect: {
      logout: '/auth/logout/'
    },
    strategies: {
      local: {
        endpoints: {
          home: '/',
          login: {url: `${process.env.API_DOMAIN_LDAP}/${process.env.API_DOMAIN_LDAP_SERVICE}/v1.0/login`, method: 'post', propertyName: 'accessToken'},
          logout: false,
          user: false
        }
      }
    }
  },

  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.js', title: 'English'},
      {code: 'cs', iso: 'cs-CZ', file: 'cs.js', title: 'Česky'},
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    useCookie: true
  },

  router: {
    base: '/students/',
    mode: 'hash',
    trailingSlash: true
  },

  toast: {
    duration: 4000,
    position: 'top-center',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#003E8C',
        }
      }
    },
    treeShake: true
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
    },
    babel: {
      presets({isServer}) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [ require.resolve("@babel/preset-env"), { targets }  ]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    },
  },

  env: {
    API_DOMAIN: process.env.API_DOMAIN,
    API_DOMAIN_STUDENTS: process.env.API_DOMAIN_STUDENTS
  }
}
