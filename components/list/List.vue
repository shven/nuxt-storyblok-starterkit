<template>
  <div v-editable="blok">
    <spinner :loading="loading">

      <!-- If list type is masonry -->
      <masonry v-if="blok.listtype == 'masonry'"
               :cols="{default: 4, 1400: 3, 700: 2, 400: 1}"
               :gutter="0">
        <div v-for="(post, index) in blok.listcontent" :key="index">
          <brick :post="post" />
        </div>
      </masonry>

      <!-- else -->
      <ul class="List"
          v-else
          :class="['List--' + blok.listtype]">
        <component
          v-for="post in blok.listcontent"
          :key="post.full_slug"
          :post="post"
          :is="blok.listtype" />
      </ul>

      <div class="u-textAlignCenter" v-if="showLoadMoreButton">
        <a class="Button" @click="nextPage">Load more</a>
      </div>
    </spinner>
  </div>
</template>

<script>
  import storyblokSettings from '~/plugins/storyblokSettings';

  export default {
    data () {
      console.log(this.blok);

      return {
        page: 1,
        perPage: this.blok.perpage,
        showLoadMoreButton: false,
        stories: this.blok.listcontent,
        loading: false,
      }
    },
    props: ['blok'],
    methods: {
      nextPage: function () {
        this.loading = true;
        this.page += 1;
        this.showLoadMoreButton = false;

        return this.$storyapi.get('cdn/stories', {
          version: storyblokSettings.version,
          cv: storyblokSettings.cv,
          starts_with: this.blok.contenttype,
          sort_by: this.blok.sortby ? this.blok.sortby : 'created_at:desc',
          page: this.page,
          per_page: this.blok.perpage,
          is_startpage: false, // exclude start pages (fe: blog list)
        }).then(data => {
          // Hide load more button when there are no more results
          if(this.page * this.blok.perpage < data.total) {
            this.showLoadMoreButton = true;
          }

          /*
            Merge serverside listcontent with new stories
            Because components do not have an asyncData method,
            you cannot directly fetch async data server side within a component.
            https://nuxtjs.org/faq/async-data-components/
          */
          this.blok.listcontent = [
            ...this.blok.listcontent,
            ...data.data.stories
          ];
          this.loading = false;
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.nextPage();
      })
    }
  }
</script>

<style lang="scss">
  .List {
    position: relative;
  }

  .List--loading {
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

  .List--card {
    margin: 0 (-$spacer/2);
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

