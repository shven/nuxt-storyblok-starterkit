<template>
  <div>
    <input type="checkbox" class="Page-sidebarState" id="page-sidebarstate">
    <div class="Page">
      <PageSidebar />

      <div class="Page-main u-backgroundColor--light" id="scrollingPanel">
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

  .Page {
    position: fixed;
    height: 100%;
    width: 100%;
  }

  .Page-sidebar {
    position: fixed;
    height: 100vh;
    background: black;
    color: white;
    padding: 20px;
    width: $pageSidebarMinimumWidth;
    transform: translate3d(-$pageSidebarMinimumWidth + 50, 0, 0);
    transition: 0.45s cubic-bezier(.24, .54, .27, .99) transform;
    will-change: transform;

    @media screen and (min-width: size('small')) {
      width: $pageSidebarMinimumWidth+50;
      transform: translate3d(-$pageSidebarMinimumWidth + 100, 0, 0);
    }

    .Page-sidebarState:checked + .Page & {
      transform: translate3d(0, 0, 0);
    }
  }

  .Page-main {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    overflow-y: scroll;
    transition: 0.45s cubic-bezier(.24, .54, .27, .99) transform;
    will-change: transform;

    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    .Page-sidebarState:checked + .Page & {
      overflow-y: hidden;
      transform: translate3d($pageSidebarMinimumWidth, 0, 0);
      @media screen and (min-width: size('small')) {
        transform: translate3d($pageSidebarMinimumWidth+50, 0, 0);
      }
    }
  }

  .Page-toggle {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 20px;
    cursor: pointer;
    display: block;
    user-select: none;
    outline: none;
    text-indent: -999px;
    transform: translateY(-50%);

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
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    cursor: pointer;
    .Page-sidebarState:checked + .Page & {
      width: 100%;
      height: 150%;
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
</style>
