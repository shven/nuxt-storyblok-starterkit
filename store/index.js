import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      settings: {
        primary_navigation: []
      },
      employees: [],
      posts: [],
      post: {}
    },
    actions: {
      /*
      async nuxtServerInit ({commit}, {params}) {
        if (process.server && params.id) {
          console.log(params.id, 'params id');
          return this.$storyapi.get(`cdn/stories/blog/${params.id}?cv=` + Date.now(), {
            version: 'published'
          }).then((res) => {
            commit('setPost', res.data.story)
          })
        }
        else {
          return this.$storyapi.get(`cdn/stories`, {
            starts_with: 'blog',
            version: 'published'
          }).then((res) => {
            commit('setPosts', res.data.stories)
          })
        }
      },
      */
      async loadSettings ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/_settings`, {
          version: context.version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      },
      async getEmployees ({commit}) {
        return this.$storyapi.get(`cdn/stories?cv=` + Date.now(), {
          starts_with: '_employees/',
          version: 'draft'
        }).then((res) => {
          commit('setEmployees', res.data.stories)
        })
      },
      async getPosts ({commit}) {
        return this.$storyapi.get(`cdn/stories?cv=` + Date.now(), {
          starts_with: 'blog/',
          version: 'draft'
        }).then((res) => {
          commit('setPosts', res.data.stories)
        })
      },
      async getPost ({commit}, id) {
        const post = await this.$storyapi.get(`cdn/stories/blog/${id}?cv=` + Date.now(), {
          version: 'published'
        })
        commit('setPost', post.data.story)
      },
    },
    mutations: {
      setSettings (state, settings) {
        state.settings = settings
      },
      setEmployees: (state, posts) => {
        state.employees = posts
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setPost: (state, post) => {
        state.post = post
      },
    }
  })
}

export default store
