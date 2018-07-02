<template>
  <section class="Hero"
    v-editable="blok"
    v-lazy:background-image="$options.filters.imageApi(blok.image, 'large')"
    :class="[blok.size]">
    <div class="Hero-content u-color--light u-textAlignCenter">
      <!-- Hero content starts here -->
      <div class="Wrapper medium">
        <markdown>{{ blok.headline }}</markdown>
      </div>
      <!-- Hero content ends here -->
    </div>
  </section>
</template>

<script>
  export default {
    props: ['blok'],
    computed: {
      background() {
        return this.blok.image;
      }
    }
  }
</script>

<style lang="scss">
  .Hero {
    height: 50vw;
    max-height: 80vh;
    display: flex;
    background-size: cover;
    background-position: center center;
    &.tiny {
      height: 10vh;
    }
    &.small {
      height: 20vh;
    }
    &.medium {
      height: 40vh;
    }
    &.large {
      height: 60vh;
    }
    &.huge {
      height: 80vh;
    }
    &.fullscreen {
      height: 100vh;
      max-height: 100vh;
    }
  }

  .Hero-content {
    flex: 1;
    align-self: center;
    padding: 0 $spacer/4;

    h1,h2,h3 {
      font-style: italic;
      font-size: 3.5rem;
      font-weight: 100;
      text-shadow: 0 2px 10px rgba(color('dark'), 0.35);
      text-transform: none;
      font-size: 8vw;


      @media screen and (min-width: size('small')) {
        font-size: 6vw;
      }

      @media screen and (min-width: size('medium')) {
        font-size: 5vw;
      }

      @media screen and (min-width: size('large')) {
        font-size: 40px;
      }

      @media screen and (min-width: size('huge')) {
        font-size: 50px;
      }
    }
  }
</style>
