<template>
  <div>
    <template v-for="post in Posts">
        <nuxt-link class="card" :key="post.id" :to="'/blog/'+post.slug">{{post.name}}</nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Posts Listing'
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      Posts () {
        return this.$store.state.posts
      }
    }
  }
</script>
