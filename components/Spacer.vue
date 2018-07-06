<template>
  <div class="Spacer"
    v-editable="blok"
    v-bind:class="{
      'tiny' : blok.size == 'tiny',
      'small' : blok.size == 'small',
      'medium' : blok.size == 'medium',
      'large' : blok.size == 'large',
      'huge' : blok.size == 'huge',
    }">
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss">
.Spacer {
  @each $key, $value in $sizes {
    &.#{$key} {
      padding: ceil($value/20);
    }
  }
}
</style>
