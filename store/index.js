import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      settings: {
        primary_navigation: []
      }
    },
    mutations: {
      setSettings (state, settings) {
        console.log(state, 'state');
        console.log(settings, 'settings');
        state.settings = settings
      }
    },
    actions: {
      loadSettings ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/_settings`, {
          version: context.version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      }
    }
  })
}

export default createStore
