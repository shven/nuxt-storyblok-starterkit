<template>
  <div class="Image">
    <img
      :src="blok.image"
      :width="blok.width"
      :class="{
       'u-centered' : blok.alignment == 'center',
       'u-floatRight' : blok.alignment == 'right',
      }"
    />
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss">
  .Image::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
