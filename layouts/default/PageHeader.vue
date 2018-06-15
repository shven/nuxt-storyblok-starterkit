<template>
  <div class="Page-header">
    <div class="Page-headerContent">
      <label class="Page-hamburger" for="page-sidebarstate">
        <icon type="menu" />
      </label>
      <icon type="knuckles" class="large" />
      <div class="Navigation">
        <nuxt-link class="Navigation-link"
           :key="index" v-for="(navitem, index) in $store.state.settings.primary_navigation"
           :to="'/' + navitem.link.cached_url">
          {{ navitem.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
