const axios = require("axios");

module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: 'AJwMQue3YmvF9GhvSrecTQtt', cacheProvider: 'memory'}],
    ['nuxt-sass-resources-loader', '@/assets/scss/styles.scss'],
  ],
  plugins: [
    '~/plugins/components'
  ],
  router: {
    middleware: 'settings'
  },
  css: [
    '@/assets/scss/styles.scss'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'designisdead',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Design is Dead'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#E7199D'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      let posts = axios
        .get('https://api.storyblok.com/v1/cdn/links?version=published&token=O2r6aDSsF6m26lYt5NNMzQtt&cv=' + Math.floor(Date.now()))
        .then((res) => {
          var pages = [];

          for (var key in res.data.links) {
            // skip loop if the property is from prototype
            if (!res.data.links.hasOwnProperty(key)) continue;

            var obj = res.data.links[key];
            if(obj.hasOwnProperty('slug')) {
              pages.push(obj.slug)
            }
          }

          // add other pages
          return [
            '/',
            ...pages
          ];
        });

      return Promise.all([posts]).then(values => {
        return values.join().split(',');
      });
    }
  },
}
