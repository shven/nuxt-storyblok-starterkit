<template>
  <div class="u-backgroundRepeatNone"
    v-editable="blok"
    :style="{
       backgroundImage: 'url(' + blok.backgroundimage + ')',
       backgroundColor: blok.backgroundcolor.color,
    }"
    :class="{
      'u-backgroundTopRight': blok.backgroundposition == 'top right',
      'u-backgroundCenterCenter': blok.backgroundposition == 'center center',
      'u-backgroundTopLeft': blok.backgroundposition == 'top left',
      'u-backgroundSizeCover': blok.backgroundsize == 'cover',
      'u-backgroundSizeContain': blok.backgroundsize == 'contain',
    }">
    <div class="Wrapper"
      :class="{
         'tiny': blok.size == 'tiny',
         'small': blok.size == 'small',
         'medium': blok.size == 'medium',
         'large': blok.size == 'large',
         'huge': blok.size == 'huge',
      }">
      <component :key="blok._uid" v-for="blok in blok.elements" :blok="blok" :is="blok.component"></component>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss">
  .Wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 900px;
    padding: 0 $spacer/2;

    @each $key, $value in $sizes {
      &.#{$key} {
        max-width: $value;
      }
    }
  }
</style>
