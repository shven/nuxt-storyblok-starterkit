<template>
  <li>
    <nuxt-link :key="post.slug" :to="post.slug">
        {{ post.name }}
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: ['post'],
  }
</script>
