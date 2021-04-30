<template>
  <div class="app-header header-shadow">
    <div class="app-header__content">
      <div class="app-header-left">
        <h2>{{ title }}</h2>
      </div>
            <div class="app-header-right">
        <HeaderUserArea/>
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                :class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
          <span class="hamburger-box">
              <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <v-btn size="sm" @click="toggleMobile2('header-menu-open')">
        <i class="pe-7s-more"/>
      </v-btn>
    </div>
  </div>
</template>

<script>  
 import HeaderUserArea from './partials/HeaderUserArea'
  /**
   * Komponenta hlavního horního panelu obsahující pouze metody pro přepínání tříd pro mobilní zobrazení
   * @name Header
   * @module components/Header
   */
  export default {
    name: 'Header',
    components: { HeaderUserArea },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isOpen: false,
        isOpenMobileMenu: false,
      }
    },
    methods: {
      toggleMobile(className) {
        const el = document.body;
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      },

      toggleMobile2(className) {
        const el = document.body;
        this.isOpenMobileMenu = !this.isOpenMobileMenu;

        if (this.isOpenMobileMenu) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      },
    }
  };
</script>

<style lang="scss">
  .app-header-left h2 {
    color: #003E8C;
    letter-spacing: 4px;
  }
</style>
