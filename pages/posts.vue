<template>
  <div>
    {{ $store.state.posts }}
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Posts Listing'
      }
    },
    async fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      Posts () {
        return this.$store.state.posts
      }
    }
  }
</script>
