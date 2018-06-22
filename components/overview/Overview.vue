<template>
  <div v-editable="blok">
    <spinner :loading="loading">
      <!-- If list type is masonry -->
      <masonry v-if="blok.listtype == 'masonry'"
        :cols="{default: 4, 1400: 3, 700: 2, 400: 1}"
        :gutter="0">
          <div v-for="(post, index) in blok.overviewcontent" :key="index">
            <brick
              :key="post.full_slug"
              :post="post"
              :name="post.name"
              :author="post.content.author"
              :published="post.content.published"
              :primaryimage="post.content.primaryimage"
              :secondaryimage="post.content.secondaryimage"
              :slug="post.full_slug" />
          </div>
      </masonry>

      <!-- else -->
      <ul class="Overview"
          v-else
          :class="['Overview--' + blok.listtype]">
        <component
          v-for="post in blok.overviewcontent"
          :key="post.full_slug"
          :post="post"
          :is="blok.listtype" />
      </ul>
    </spinner>
  </div>
</template>

<script>
import moment from 'moment';

export default {
    data () {
      return {
        stories: [] ,
        loading: true,
      }
    },
    props: ['blok'],
    head () {
      return {
         title: `Overview of ${this.blok.contenttype}`
      }
    },
    methods: {
      getStories: function() {
        return this.$storyapi.get(`cdn/stories?cv=` + moment().format('YYYYMMDDHHmm'), {
          starts_with: this.blok.contenttype,
          is_startpage: false, // exclude start pages (fe: blog overview)
          version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        }).then(data => {
          //console.log('Loaded stories starting with: ' this.blok.contenttype)
          this.stories = data.data.stories;
          this.loading = false;
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.stories = this.getStories()
      })
    }
  }
</script>

<style lang="scss">
  .Overview {
    position: relative;
  }

  .Overview--loading {
    min-height: 300px;
    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.9;
    }
  }

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

