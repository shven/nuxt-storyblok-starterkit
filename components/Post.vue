<!--
Post.vue
This component is used to render the Post content type on Storyblok
-->
<template>
  <main>
    <article>
      <header class="Wrapper u-textAlignCenter u-backgroundColor--light">
        <spacer size="medium"></spacer>
        <h1>{{ blok.title }}</h1>
        <div class="Title tiny uppercase" v-if="blok.published">
          <small>Posted <time :datetime="dataTime">{{ fromNow }}</time> by <em><author v-if="blok.author" :uuid="blok.author"></author></em></small>
        </div>
        <spacer size="medium"></spacer>
      </header>

      <wrapper size="medium">
        <img class="Image stretch"
          :alt="blok.title"
          :src="$options.filters.imageApi(blok.primaryimage, 'large')" />
      </wrapper>

      <div v-editable="blok" class="page">
        <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
      </div>
    </article>
  </main>
</template>

<script>
  import moment from 'moment';
  export default {
    props: ['blok'],
    computed: {
      dataTime() {
        return moment(this.blok.published).format('YYYY-MM-DD HH:mm');
      },
      fromNow() {
        return moment(this.blok.published).fromNow();
      }
    }
  }
</script>
