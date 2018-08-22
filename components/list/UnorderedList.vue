<template>
  <li>
    <nuxt-link :key="post.slug" :to="post.slug">
        {{ post.name }} - ul
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: ['post'],
  }
</script>
