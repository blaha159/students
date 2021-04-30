
<template>
  <div
    :class="theme" class="app-sidebar sidebar-shadow"
    @mouseover="toggleSidebarHover('add','closed-sidebar-open')"
    @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')"
  >
    <div class="app-header__logo">
      <img src="~/assets/img/logo.png" alt="logo" class="logo"/>
      <span class="color-brand font-weight-bold" style="white-space: nowrap">Students</span>
      <div class="header__pane ml-auto">
        <button
          class="hamburger close-sidebar-btn hamburger--elastic"
          :class="{ 'is-active' : isOpen }"
          type="button"
          @click="toggleBodyClass('closed-sidebar')"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-sidebar-content">
      <VuePerfectScrollbar class="app-sidebar-scroll">
        <SidebarMenu
          :menu="menu"
          :showChild="true"          
          @item-click="toggleHamburger"
        />
        <p class="version p-2 mb-2 text-right">
          Petr Blaha v{{ version }}
        </p>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
  import { SidebarMenu } from 'vue-sidebar-menu'
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

  import getMenuItems from '~/helpers/getMenuItems'

  /**
   * Komponenta postranního panelu s menu včetně metod pro responzivní chování
   * @name Sidebar
   * @module components/Sidebar
   */
  export default {
    components: {
      SidebarMenu,
      VuePerfectScrollbar
    },
    props: {
      theme: {
        type: String,
        default: ''
      },
    },
    computed: {
      menu() {
        return this ? getMenuItems(this) : [];
      }
    },
    data() {
      return {        
        isOpen: false,
        sidebarActive: true,
        windowWidth: 0,
        version: '1.0'
      }
    },
    methods: {      
      ...mapActions({
      }),
      toggleBodyClass(className) {
        const el = document.body;
        this.isOpen = !this.isOpen;
        this.isOpen ? el.classList.add(className) :el.classList.remove(className)
      },
      toggleHamburger(event, item, node) {
        document.querySelector('.close-sidebar-btn').click()  // for some reason '$refs' not working
      },
      toggleSidebarHover(add, className) {
        const el = document.body;
        this.sidebarActive = !this.sidebarActive;

        this.windowWidth = document.documentElement.clientWidth;

        if (this.windowWidth > '992') {
          add === 'add' ? el.classList.add(className) : el.classList.remove(className);
        }
      },
      getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)
        this.getWindowWidth()
      });   
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth)
    }
  }
</script>

<style lang="scss">
  .app-header__logo {
    padding: 5px;

    .logo {
      margin-right: 18px;
      min-width: 50px;
      max-width: 50px;
    }
  }

  .version { display: block }
  .closed-sidebar .version { display: none }
  .closed-sidebar-open .version { display: block }

</style>
