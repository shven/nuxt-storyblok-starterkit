<template>
  <div class=""
    v-editable="blok">
    <div class="Wrapper"
      :class="{
         'tiny': blok.size == 'tiny',
         'small': blok.size == 'small',
         'medium': blok.size == 'medium',
         'large': blok.size == 'large',
         'huge': blok.size == 'huge',
      }">
      <div class="Wrapper-content">
        <component :key="blok._uid" v-for="blok in blok.elements" :blok="blok" :is="blok.component"></component>
      </div>
      <div class="Wrapper-background"
        v-if="blok.backgroundimage"
        v-lazy:background-image="$options.filters.imageApi(blok.backgroundimage, 'large')"
        :style="{
          backgroundColor: blok.backgroundcolor.color,
        }"
        :class="{
          'u-backgroundTopRight': blok.backgroundposition == 'top right',
          'u-backgroundCenterCenter': blok.backgroundposition == 'center center',
          'u-backgroundTopLeft': blok.backgroundposition == 'top left',
          'u-backgroundSizeCover': blok.backgroundsize == 'cover',
          'u-backgroundSizeContain': blok.backgroundsize == 'contain',
        }">
      </div>
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
  }

  .Wrapper-content {
    position: relative;
    margin: 0 auto;
    max-width: 900px;
    padding: 0 $spacer/2;
    z-index: 1;

    @each $key, $value in $sizes {
      &.#{$key} {
        max-width: $value;
      }
    }
  }

  .Wrapper-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
  }
</style>
