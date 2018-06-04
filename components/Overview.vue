<template>
  <div>
    <h2>Overview</h2>
    <ul>
      <li v-for="post in Posts">
        <nuxt-link class="card" :key="post.id" :to="'/blog/'+post.slug">{{post.name}}</nuxt-link><br>
      </li>
    </ul>
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

