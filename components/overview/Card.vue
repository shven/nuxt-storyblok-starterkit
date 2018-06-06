<template>
  <nuxt-link class="Card" :key="slug" :to="slug">
    <article>
      <div class="Card-image"
        v-if="primaryimage"
        :style="{backgroundImage: 'url(' + primaryimage + ')'}">

      </div>
      <div class="Card-content">
        <header class="Card-header">
          <h2 class="tiny">
            <span v-if="published">Posted on {{ published }} </span>
            <span v-if="author">by {{ author }}</span>
          </h2>
          <h1 class="medium">{{ name }}</h1>
        </header>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      author: {
        type: String,
      },
      published: {
        type: String,
      },
      name: {
        type: String,
        required: true
      },
      primaryimage: {
        type: String,
        default: ''
      },
      slug: {
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="scss" scoped>

  .Card {
    background: white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    &:hover {
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
