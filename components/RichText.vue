<template>
  <div class="Text" v-editable="blok"
    v-bind:class="{
      'u-textAlignCenter' : blok.textalignment == 'center',
      'u-textAlignRight' : blok.textalignment == 'right'
    }">
      <markdown>{{ blok.richtext }}</markdown>
  </div>
</template>

<script>
  import highlightjs from 'highlightjs';
  export default {
    props: ['blok'],
    mounted() {
      let targets = this.$el.querySelectorAll('code')
      targets.forEach((target) => {
          highlightjs.highlightBlock(target)
      });
    },
  }
</script>
