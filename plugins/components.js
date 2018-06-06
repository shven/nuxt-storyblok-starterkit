import Vue from 'vue'

import Page from '~/components/Page.vue'
import Post from '~/components/Post.vue'
import Card from '~/components/overview/Card.vue'
import Hero from '~/components/Hero.vue'
import Teaser from '~/components/Teaser.vue'
import RichText from '~/components/RichText.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import Wrapper from '~/components/Wrapper.vue'
import Spacer from '~/components/Spacer.vue'
import ImageUpload from '~/components/ImageUpload.vue'
import Overview from '~/components/Overview/Overview.vue'


Vue.component('post', Post)
Vue.component('card', Card)
Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('richtext', RichText)
Vue.component('hero', Hero)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('wrapper', Wrapper)
Vue.component('spacer', Spacer)
Vue.component('imageupload', ImageUpload)
Vue.component('overview', Overview)
