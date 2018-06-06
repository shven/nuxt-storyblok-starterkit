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
    background: black;
    color: white;
    z-index: 10;
    padding: 20px;
    width: $pageSidebarMinimumWidth;
    transform: translate3d(-$pageSidebarMinimumWidth, 0, 0);
    transition: 0.45s cubic-bezier(.24, .54, .27, .99) transform;
    will-change: transform;

    .Page-sidebarState:checked + .Page & {
      transform: translate3d(0, 0, 0);
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
</style>
