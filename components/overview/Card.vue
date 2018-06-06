<template>
  <nuxt-link class="card" :key="slug" :to="slug">
    <article class="post-preview">
      <div
        v-if="primaryimage"
        :style="{backgroundImage: 'url(' + primaryimage + ')'}"
        class="post-preview-thumbnail">

      </div>
      <div class="post-preview-content">
        <h1>{{ name }}</h1>
        <p>{{ primaryimage }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
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

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.post-preview {
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
  width: 90%;
  margin: auto;
  height: 20rem;
}

.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}

.post-preview-content {
  text-align: center;
  padding: 1rem;
}

@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
    margin: 1rem;
  }
}
</style>
