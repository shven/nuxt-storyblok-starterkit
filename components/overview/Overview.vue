<template>
  <div v-editable="blok">
    <!-- If list type is masonry -->
    <masonry v-if="blok.listtype == 'masonry'"
      :cols="{default: 4, 1400: 3, 700: 2, 400: 1}"
      :gutter="0">
      <div v-for="(post, index) in stories" :key="index">
        <brick
          :key="post.full_slug"
          :post="post"
          :name="post.name"
          :author="post.content.author"
          :published="post.content.published"
          :primaryimage="post.content.primaryimage"
          :slug="post.full_slug" />
      </div>
    </masonry>

    <!-- else -->
    <ul class="Overview"
        v-else
        :class="['Overview--' + blok.listtype]">
      <component
        v-for="post in stories"
        :key="post.full_slug"
        :post="post"
        :is="blok.listtype" />
    </ul>

  </div>
</template>

<script>
export default {
    data () {
      return {
        stories: [] ,
        test: 'yoyo'
      }
    },
    props: ['blok'],
    head () {
      return {
         title: `Overview of ${this.blok.contenttype}`
      }
    },
    methods: {
      getDummyText: function() {
        return 'dummy text'
      },
      getStories: function() {
        return this.$storyapi.get(`cdn/stories?cv=` + Date.now(), {
          starts_with: this.blok.contenttype,
          is_startpage: false, // exclude start pages (fe: blog overview)
          version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        }).then(function(result) {
          // all loaded
          return result;
        }).then(data => {
          console.log(data);
          //console.log('Loaded stories starting with: ' this.blok.contenttype)
          this.stories = data.data.stories;
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.stories = this.getStories()
        this.test = this.getDummyText()
      })
    }
  }
</script>

<style lang="scss">
  .Overview--card {
    margin: 0 -($spacer/2);
    // grid-auto-rows: repeat(2, 1fr);
    @media screen and (min-width: size('medium')) {
      display: grid;
      // grid-gap: $spacer * 0.75;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: size('large')) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

