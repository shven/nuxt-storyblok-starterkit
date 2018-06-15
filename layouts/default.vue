<template>
  <div>
    <input type="checkbox" class="Page-sidebarState" id="page-sidebarstate">
    <div class="Page">
      <PageSidebar />

      <div class="Page-main u-backgroundColor--light">
        <label class="Page-overlay" for="page-sidebarstate"></label>
        <PageHeader />
        <PageContent />
        <PageFooter/>
      </div>
    </div>
    <PageIcons/>
  </div>
</template>

<script>
  import PageContent from '@/layouts/default/PageContent';
  import PageFooter from '@/layouts/default/PageFooter';
  import PageHeader from '@/layouts/default/PageHeader';
  import PageIcons from '@/layouts/default/PageIcons';
  import PageSidebar from '@/layouts/default/PageSidebar';

  export default {
    components: {
      PageContent,
      PageFooter,
      PageHeader,
      PageIcons,
      PageSidebar,
    },
    mounted() {
      // console.log('card mounted');
      console.log(this.$store.state.settings.colorprimary.color, 'color');
      document.documentElement.style.setProperty('--colorPrimary', this.$store.state.settings.colorprimary.color);
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/styles";

  $pageHeaderHeight: 75px;
  $pageSidebarMinimumWidth: 280px;

  .Page-sidebarState {
    display: none;
  }

  .Page-sidebar {
    position: fixed;
    height: 100vh;
    background: var(--colorPrimary);
    color: white;
    z-index:  10;
    padding: 20px;
    width: $pageSidebarMinimumWidth;
    transform: translate3d(-$pageSidebarMinimumWidth, 0, 0);
    transition: 0.45s cubic-bezier(.24, .54, .27, .99) transform;
    will-change: transform;

    .Page-sidebarState:checked + .Page & {
      transform: translate3d(0, 0, 0);
    }
  }

  .Page-hamburger {
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: block;
    user-select: none;
    outline: none;
    text-indent: -999px;

    @media screen and (min-width: size('medium')) {
      display: none;
    }

    &:after {
      content: ' ';
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      z-index: 0;
      display: block;
    }

    > svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .Page-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    cursor: pointer;
    background: black;
    opacity: 0;
    transition: 0.25s cubic-bezier(.24, .54, .27, .99) opacity, 0s 0.25s width;
    z-index: 9;
    .Page-sidebarState:checked + .Page & {
      opacity: 0.25;
      width: 100vw;
      transition: 0.25s cubic-bezier(.24, .54, .27, .99) opacity, 0s 0s width;
    }
  }

  .Page-header {
    position: relative; // IE11
    position: sticky;
    width: 100%;
    height: $pageHeaderHeight;
    background: color('light');
    z-index: 1;
    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .Page-content {
    position: relative;
    z-index: 0;
  }

  .Page-headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: size('large');
    margin: 0 auto;
    height: 100%;
    padding: $spacer/2;
  }

  .Navigation {
    display: none;
    text-align: right;
    line-height: $pageHeaderHeight;
    @media screen and (min-width: size('medium')) {
      display: block;
    }
  }

  .Navigation-link {
    display: inline-block;
    padding: 7px 10px;
    margin: 0 5px;
    text-decoration: none !important;
    transition: 0.25s ease opacity;
    opacity: 0.5;
    line-height: 1;
    text-transform: uppercase;
    font-size: 0.85rem;
    border-radius: 20px;

    &.nuxt-link-active {
      background: color('primary');
      color: color('light');
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
</style>
