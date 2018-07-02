<template>
  <div>
    <input type="checkbox" class="Page-sidebarState" id="page-sidebarstate">
    <div class="Page">
      <div class="Page-sidebar u-backgroundColor--light u-colorDark">

        <label class="Page-close" for="page-sidebarstate">
          Close
        </label>

        <div class="Page-sidebarContent">
          <nuxt-link class="MobileNavigation-link"
                     :key="index" v-for="(navitem, index) in $store.state.settings.primary_navigation"
                     :to="'/' + navitem.link.cached_url"
                     @click.native="toggle">
            {{ navitem.title }}
          </nuxt-link>
        </div>
      </div>

      <div class="Page-main u-backgroundColor--light">
        <label class="Page-overlay" for="page-sidebarstate"></label>
        <div class="Page-header">
          <div class="Page-headerContent">
            <nuxt-link :to="'/'">
              <icon type="knuckles" class="large" />
            </nuxt-link>
            <label class="Page-hamburger" for="page-sidebarstate">
              <span>Open menu</span>
            </label>
            <div class="Navigation">
              <nuxt-link class="Navigation-link"
                         :key="index" v-for="(navitem, index) in $store.state.settings.primary_navigation"
                         :to="'/' + navitem.link.cached_url">
                {{ navitem.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="Page-content">
          <main class="main-content">
            <nuxt/>
          </main>
        </div>
        <div class="Page-footer">
          <div class="Wrapper large">
            <div class="Footer">
              <div class="Footer-left">
                <a href="https://twitter.com/designisdead" class="u-color--twitter">
                  <icon type="twitter" />
                </a>
                &nbsp;
                <a href="https://www.facebook.com/DesignisDead/" class="u-color--facebook">
                  <icon type="facebook" />
                </a>
                &nbsp;
                <a href="https://www.linkedin.com/company/design-is-dead" class="u-color--linkedin">
                  <icon type="linkedin" />
                </a>
              </div>
              <div class="Footer-right">
                <span class="Footer-copyright">&copy;  2018</span>
                &nbsp;
                <span class="Footer-knuckles">
              <icon type="knuckles" />
          </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg style="display: none;">
      <!-- Close -->
      <symbol id="svg-close" viewBox="0 0 100 100">
        <path fill="currentColor" d="M57.48,5.3H42.52C14.84,5.3,1,19.514,1,50.186c0,29.176,14.775,44.511,41.52,44.511H57.48
            C85.161,94.696,99,80.857,99,50.186C99,21.01,84.226,5.3,57.48,5.3z M79.645,75.427c-4.403,4.642-11.653,6.896-22.164,6.896H42.52
            c-9.819,0-17.146-2.495-21.776-7.419c-4.891-5.199-7.37-13.516-7.37-24.719c0-11.926,2.368-20.501,7.037-25.486
            c4.429-4.728,11.661-7.026,22.109-7.026H57.48c12.512,0,29.146,3.371,29.146,32.512C86.627,62.051,84.277,70.543,79.645,75.427z"/>
        <polygon fill="currentColor" points="64.398,28.602 50.001,42.999 35.603,28.602 28.604,35.6 43.001,49.998 28.604,64.396 35.603,71.395 50.001,56.997
            64.398,71.395 71.396,64.396 56.999,49.998 71.396,35.6"/>
      </symbol>

      <!-- Search -->
      <symbol id="svg-search" viewBox="0 0 18.207 17.582">
        <circle fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" cx="11.036" cy="7.171"
                r="5.829"/>
        <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="0.707" y1="16.875" x2="6.02"
              y2="11.563"/>
      </symbol>

      <!-- Twitter -->
      <symbol id="svg-twitter" viewBox="0 0 612 612">
        <path fill="currentColor" d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
			c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
			c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
			c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
			c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
			c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
			c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
      </symbol>

      <!-- Facebook -->
      <symbol id="svg-facebook" viewBox="88.428 12.828 107.543 207.085">
        <path fill="currentColor"
              d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>
      </symbol>

      <!-- LinkedIn -->
      <symbol id="svg-linkedin" viewBox="0 5 1036 990">
        <path fill="currentColor"
              d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
      </symbol>

      <!-- Knuckles -->
      <symbol id="svg-knuckles" viewBox="0 0 100 61">
        <path fill="currentColor" d="M14.461,59.2c0.825-2.102,3.405-2.551,5.278-3.441
		c1.841-0.876,4.195-1.754,5.507-3.213c4.019-4.468,1.548-13.749-3.441-14.684c-2.275-0.427-4.793,0.711-7.113,0.688
		C3.452,38.436-1.843,27.13,2.53,18.587c0.904-1.766,2.756-2.908,3.671-4.359c0.609-0.969,0.544-2.387,1.376-3.213
		c0.594-0.589,2.54-1.46,3.901-1.376c1.311,0.082,1.936,1.2,3.213,1.606c1.002,0.319,2.718,0.327,4.129,0.688
		c5.621,1.439,5.337-0.443,8.261-3.9c1.137-1.344,3.436-2.593,4.131-3.442c0.569-0.697,0.997-2.495,1.835-2.983
		c0.95-0.553,2.657-0.783,4.129-0.459c0.972,0.214,1.583,1.355,2.983,2.065c1.182,0.598,2.648,0.642,3.671,1.147
		c2.39,1.18,3.475,3.822,6.195,3.901c2.3,0.066,3.544-2.302,6.195-3.671c1.147-0.592,2.459-0.689,3.442-1.147
		c2.431-1.133,3.869-3.723,7.802-1.606c0.664,2.883,2.943,3.305,5.047,5.507c1.733,1.814,2.722,5.129,4.818,5.507
		c1.289,0.232,2.439-0.64,4.361-1.147c1.36-0.36,2.706-0.165,3.67-0.459c1.283-0.392,2.01-1.506,3.213-1.606
		c1.439-0.12,2.596,0.711,4.13,1.376c1.796,5.647,7.082,6.943,6.195,15.604c-0.54,5.286-5.258,11.822-13.309,11.932
		c-2.194,0.03-4.639-1.077-7.113-0.688c-4.968,0.779-7.886,9.253-3.9,14.226c1.673,2.087,5.565,3.388,8.719,5.048
		c0.738,0.388,2.376,1.273,2.295,2.064c-0.213,2.103-6.32,0.242-7.801,0c-17.346-2.831-38.159-2.901-55.528-0.229
		C19.69,59.367,16.656,61.035,14.461,59.2z M37.636,26.847c3.471,0.021,7.702-2.565,8.949-5.965
		c2.154-5.873-1.684-10.716-4.819-12.162c-1.406-0.648-3.864-0.898-5.507-0.688C25.429,9.416,25.522,26.772,37.636,26.847z
		 M53.927,13.08c-3.752,7.451,2.811,14.279,9.408,13.767C75.66,25.891,74.03,6.432,61.499,8.032
		C57.396,8.556,54.755,11.439,53.927,13.08z M5.512,25.7C6.546,39.031,28.42,35,23.41,21.341c-1.304-3.555-5.508-5.99-9.637-5.507
		C8.772,16.417,5.094,20.305,5.512,25.7z M76.185,26.159c1.391,11.763,20.354,9.579,18.355-2.982
		c-0.677-4.262-5.103-8.01-10.325-7.343C78.893,16.514,75.533,20.646,76.185,26.159z M43.143,30.978
		c-3.987,1.474-7.534,1.219-8.949,3.211c-2.852,4.016,1.935,12.317,3.901,13.768c4.383,3.233,19.908,2.606,23.635,0.23
		c2.04-1.302,7.011-10.172,4.129-14.227c-1.581-2.225-5.858-1.438-9.637-2.983c-3.061-1.254-4.054-3.44-7.342-2.753
		C46.626,28.695,45.774,30.004,43.143,30.978z"/>
      </symbol>

    </svg>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.documentElement.style.setProperty('--colorPrimary', this.$store.state.settings.colorprimary.color);
    },
    methods: {
      toggle() {
        document.getElementById('page-sidebarstate').checked = false;
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/styles";

  $pageHeaderHeight: 70px;
  $pageSidebarMinimumWidth: 310px;

  .Page-sidebarState {
    display: none;
  }

  .Page-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    color: white;
    z-index:  10;
    padding: 20px;
    width: $pageSidebarMinimumWidth;
    transform: translate3d($pageSidebarMinimumWidth, 0, 0);
    transition: 0.45s cubic-bezier(0.86, 0, 0.07, 1) transform;
    will-change: transform;
    &:before {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.4);
      opacity: 0;
      transition: 0.45s cubic-bezier(0.86, 0, 0.07, 1) opacity;
      will-change: opacity;
      z-index: -1;

      .Page-sidebarState:checked + .Page & {
        opacity: 1;
      }
    }

    .Page-sidebarState:checked + .Page & {
      transform: translate3d(0, 0, 0);
    }
  }

  .Page-sidebarContent {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 50px;
  }

  .Page-hamburger {
    width: 40px;
    height: 40px;
    cursor: pointer;
    user-select: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      display: block;
      text-indent: -9999px;
      width: 30px;
      height: 4px;
      background: black;
      margin: 4px 0;
    }

    &:before,
    &:after {
      display: block;
      content: ' ';
      width: 30px;
      height: 4px;
      background: color('dark');
      transition: 0.3s cubic-bezier(0.6, 0, 0.2, 1) transform;
      will-change: transform;
    }

    &:before {
      .Page-sidebarState:checked + .Page & {
        transform: translateX(-10px);
      }
    }

    &:after {
      .Page-sidebarState:checked + .Page & {
        transform: translateX(10px);
      }
    }
    @media screen and (min-width: size('medium')) {
      display: none;
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
    transition: 0.25s ease opacity, 0s 0.25s width;
    z-index: 9;
    .Page-sidebarState:checked + .Page & {
      opacity: 0.03;
      width: 100vw;
      transition: 0.25s ease opacity, 0s 0s width;
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
    font-weight: bold;
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

  .MobileNavigation-link {
    display: block;
    padding: $spacer/2 0;
    text-transform: uppercase;
    font-size: 1.4rem;
    transition: 0.25s ease opacity;
    will-change: opacity;
    &:hover {
      text-decoration: none;
      opacity: 0.5;
    }
  }

  .Page-close {
    position: absolute;
    top: $spacer/4;
    right: $spacer/4;
    width: 40px;
    height: 40px;
    text-indent: -9999px;
    &:before,
    &:after {
      position: absolute;
      content: ' ';
      display: block;
      background: color('dark');
      will-change: transform;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 3px;
      margin-top: -1.5px;
      margin-left: -12px;
    }

    &:before {
      transition: 0.3s 0.20s cubic-bezier(0.6, 0, 0.2, 1) transform;
      transform: rotate(45deg) translateX(-50px);
      .Page-sidebarState:checked + .Page & {
        transform: rotate(45deg) translateX(0);
      }
    }

    &:after {
      transition: 0.3s 0.25s cubic-bezier(0.6, 0, 0.2, 1) transform;
      transform: rotate(-45deg) translateX(50px);
      .Page-sidebarState:checked + .Page & {
        transform: rotate(-45deg) translateX(0);
      }
    }
  }

  .Footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }

  .Footer-right {
    display: flex;
    align-items: center;
  }

  .Footer-copyright {
    font-size: 10px;
  }

  .Footer-knuckles {
    margin-top: -2px;
    margin-left: 5px;
  }
</style>
