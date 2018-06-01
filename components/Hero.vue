<template>
  <section class="Hero"
    v-editable="blok"
    v-lazy:background-image="blok.image"
    :class="{
      'tiny': blok.size == 'tiny',
      'small': blok.size == 'small',
      'medium': blok.size == 'medium',
      'large': blok.size == 'large',
      'huge': blok.size == 'huge',
      'fullscreen': blok.size == 'fullscreen',
    }">
    <div class="Hero-content">
      <!-- Hero content starts here -->
      <div class="Wrapper medium">
        <h1 class="Hero-title u-color--light u-textAlignCenter">
          {{ blok.headline }}
        </h1>
      </div>
      <!-- Hero content ends here -->
    </div>
  </section>
</template>

<script>
  export default {
    props: ['blok']
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
  }

  .Hero-title {
    font-style: italic;
    font-size: 3.75rem;
    font-weight: normal;
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
      font-size: 4vw;
    }

    @media screen and (min-width: size('huge')) {
      font-size: 58px;
    }
  }
</style>
