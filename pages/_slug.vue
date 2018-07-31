<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :pagetitle="story.name"
      :blok="story.content"
      :is="story.content.component" />
  </section>
</template>

<script>
import moment from 'moment';
import storyblokSettings from '~/plugins/storyblokSettings';

export default {
  data () {
    return {
      story: {
        content: {}
      }
    }
  },
  mounted () {
    this.$storyblok.init()
    this.$storyblok.on('change', () => {
      location.reload(true)
    })
    this.$storyblok.on('published', () => {
      location.reload(true)
    })
  },
  head () {
    let story = this.story
    return {
      title: story.name,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: story.content.metadescription
        }, {
          hid: 'canonical',
          name: 'canonical',
          content: 'https://www.designisdead.com' + this.$route.path
        },
      ]
    }
  },
  async asyncData (context) {

    /*
     * Get data for overview components
     */
    async function getOverviewContent(overviewObject) {
      console.log('overviewObject');
      console.log(overviewObject);
      return await context.app.$storyapi.get('cdn/stories' , {
        version: storyblokSettings.version,
        cv: Date.now(), // storyblokSettings.cv,
        starts_with: overviewObject.contenttype,
        sort_by: overviewObject.sortby ? overviewObject.sortby : 'created_at:desc',
        per_page: overviewObject.perpage ? overviewObject.perpage : '50',
        page: '1',
        is_startpage: false, // exclude start pages (fe: blog overview)
      }).then(data => {
        console.log(`${moment().format('YYYYMMDDHHmm')}: Get overview content for ${overviewObject.contenttype}`);
        return data.data.stories;
      });
    }

    /*
     * Recursively loop through page components (hero, teaser,...)
     * Enrich overview component data ~ blogposts, employees,... (for server side rendering)
     */
    async function enrichJsonObject(obj) {
      let richObj = [];
      for(var i in obj) {
        if(obj[i].hasOwnProperty('elements')) {
          obj.elements = await enrichJsonObject(obj[i].elements);
        }
        else if(obj[i].component == 'overview'){
          obj[i].overviewcontent = await getOverviewContent(obj[i]);
        }
        richObj.push(obj[i]);
      }

      return richObj;
    }

    // Load page slug from the API
    const slug = context.params.slug ? context.params.slug : '/home';
    let page = await context.app.$storyapi.get(`cdn/stories/${slug}`, {
      cv: moment().format('YYYYMMDDHHmm'),
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    });

    page.story.content.body = await enrichJsonObject(page.story.content.body);

    return page;
  }
}
</script>
