<template>
  <div class="Grid" v-editable="blok">
    <component class="Grid-column" :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss">
  .Grid {
    background: red;
    display: flex;
  }

  .Grid-column {
    flex: 1;
  }
</style>
