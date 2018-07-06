<template>
  <li class="Card">
    <nuxt-link :key="post.full_slug" :to="'/' + post.full_slug">
      <article>
        <div class="Card-image"
          v-if="post.content.primaryimage"
          v-lazy:background-image="$options.filters.imageApi(post.content.primaryimage, 'small')">
        </div>
        <div class="Card-content">
          <header class="Card-header">
            <h2 class="tiny">
              <span v-if="post.content.published">Posted on {{ post.content.published }} </span>
              <span v-if="post.content.author">by {{ post.content.author }}</span>
            </h2>
            <h1 class="medium">{{ post.name }}</h1>
          </header>
        </div>
      </article>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: ['post']
  }
</script>

<style lang="scss" scoped>

  .Card {
    background: white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    padding: 0;
    margin: 0 $spacer/2 $spacer;
    list-style-type: none;
    > a:hover {
      text-decoration: none;
    }
  }

  .Card-content {
    padding: $spacer/2 $spacer/2 0 $spacer/2;
  }

  .Card-image {
    width: 100%;
    height: 180px;
    background-size: cover;
    background-position: center center;
  }

</style>
