<template>
  <div class="Overview" :class="['Overview--' + blok.listtype]">
    <component
      v-for="post in posts"
      :key="post.full_slug"
      :name="post.name"
      :author="post.content.author"
      :published="post.content.published"
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

<style lang="scss">
  .Overview--card {
    // grid-auto-rows: repeat(2, 1fr);
    @media screen and (min-width: size('medium')) {
      display: grid;
      grid-gap: $spacer * 0.75;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: size('large')) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

