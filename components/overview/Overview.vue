<template>
  <div class="Overview" :class="['Overview-' + blok.listtype]">
    <component
      v-for="post in posts"
      :key="post.full_slug"
      :name="post.name"
      :primaryimage="post.content.primaryimage"
      :slug="post.full_slug"
      :is="blok.listtype" />
  </div>
</template>

<script>
  export default {
    props: ['blok'],
    head () {
      return {
        title: 'Posts Listing'
      }
    },
    async fetch ({store}) {
      await store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
  }
</script>

