<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"></component>
  </section>
</template>

<script>
  export default {
    data () {
      return { story: { content: {} } }
    },
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
      let story = this.story
      return {
        title: story.name,
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: story.content.metadescription
          }
        ]
      }
    },
    asyncData (context) {
      const id = context.params.id ? context.params.id : 'home';
      return context.app.$storyapi.get(`cdn/stories/blog/${id}`, {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      }).then((res) => {
        return res.data
      }).catch((res) => {
        context.error({ statusCode: res.response.status, message: res.response.data })
      })
    }
  }
</script>

<style lang="scss">
</style>
