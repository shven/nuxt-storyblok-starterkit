<template>
  <div class="Page-sidebar u-backgroundColor--primary u-colorWhite">
    <div class="Title small">Primary navigation:</div>
    <div :key="index" v-for="(navitem, index) in $store.state.settings.primary_navigation">
      <nuxt-link
        :to="'/' + navitem.link.cached_url"
        @click.native="toggle">
          {{ navitem.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toggle() {
        document.getElementById('page-sidebarstate').checked = false;
      }
    }
  }
</script>
