import Vuex from 'vuex';
import moment from 'moment';

import storyblokSettings from '~/plugins/storyblokSettings';

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
      async nuxtServerInit ({commit}, {params}) {
        if(process.server) {
          if (params.folder && params.subslug) {
            return this.$storyapi.get(`cdn/stories/${params.folder}/${params.subslug}?cv=` + Date.now(), {
              version: storyblokSettings.version
            }).then((res) => {
              commit('setPost', res.data.story)
            })
          }
          else if(params.slug) {
            return this.$storyapi.get(`cdn/stories/${params.slug}?cv=` + Date.now(), {
              version: storyblokSettings.version
            })
          }
        }
      },
      async loadSettings ({ commit }) {
        return this.$storyapi.get(`cdn/stories/_settings`, {
          cv: storyblokSettings.cv,
          version: storyblokSettings.version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      },
      async getEmployees ({commit}) {
        return this.$storyapi.get('cdn/stories', {
          cv: storyblokSettings.cv,
          starts_with: '_employees/',
          version: storyblokSettings.version
        }).then((res) => {
          console.log(res.data.stories);
          commit('setEmployees', res.data.stories)
        })
      },
      async getPosts ({commit}) {
        return this.$storyapi.get('cdn/stories', {
          cv: storyblokSettings.cv,
          starts_with: 'blog/',
          version: 'draft'
        }).then((res) => {
          commit('setPosts', res.data.stories)
        })
      },

      async getPost ({commit}, id) {
        const post = await this.$storyapi.get('cdn/stories/blog/${id}', {
          cv: storyblokSettings.cv,
          version: storyblokSettings.version
        })
        commit('setPost', post.data.story)
      },
    },
    mutations: {
      setSettings (state, settings) {
        state.settings = settings
      },
      setEmployees: (state, posts) => {
        console.log('SET EMPLOYEES')
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
