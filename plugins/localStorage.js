import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'nuxt-storyblok-starterkit',
    paths: []
  })(store)
}
