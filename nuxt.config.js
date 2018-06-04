const axios = require("axios");

module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: 'AJwMQue3YmvF9GhvSrecTQtt', cacheProvider: 'memory'}],
    ['nuxt-sass-resources-loader', '@/assets/scss/_config.scss'],
  ],
  plugins: [
    { src: '~/plugins/components'},
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  router: {
    middleware: 'settings',
    base: '/nuxt-storyblok-starterkit/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Page title',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt + Storyblok'}
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
    */
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
            // do not generate empty folder
            if(
              obj.hasOwnProperty('slug') &&
              obj.slug.substr(0,1) !== '_' &&
              // obj.slug.indexOf('/') < 1 &&
              !obj.is_folder
            ) {
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
