<template>
  <section>
    <component
      v-if="post.content.component"
      :key="post.content._uid"
      :blok="post.content"
      :is="post.content.component"></component>
  </section>
</template>

<script>
  export default {
    mounted () {
      this.$storyblok.init()
      this.$storyblok.on('change', () => {
        location.reload(true)
      })
      this.$storyblok.on('published', () => {
        location.reload(true)
      })
    },
    head () {
      let post = this.post
      return {
        title: post.name,
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: post.content.metadescription
          }
        ]
      }
    },
    async fetch ({ store, params }) {
      if (store.state.post.slug !== params.id) {
        await store.dispatch('getPost', params.id)
      }
    },
    computed: {
      post () {
        return this.$store.state.post
      }
    }
  }
</script>

<style lang="scss">
</style>
