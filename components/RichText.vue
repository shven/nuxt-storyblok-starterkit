<template>
  <div class="Text" v-editable="blok"
    v-bind:class="{
      'u-textAlignCenter' : blok.textalignment == 'center',
      'u-textAlignRight' : blok.textalignment == 'right'
    }">
      <vue-markdown>{{ blok.richtext }}</vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    props: ['blok'],
    components: {
      VueMarkdown
    }
  }
</script>

<style lang="scss">
</style>
