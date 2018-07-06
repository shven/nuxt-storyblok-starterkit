<template>
  <div class="Image" v-editable="blok">
    <img
      :src="blok.image"
      :width="blok.width"
      :alt="blok.alt"
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
