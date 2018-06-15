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
  export default {
    props: ['blok']
  }
</script>
