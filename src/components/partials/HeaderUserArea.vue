<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left d-flex align-items-center">
            <span
              v-for="locale in availableLocales"
              :key="locale.code"
              class="v-btn v-btn--contained theme--light v-size--default text-decoration-none"
              @click="$i18n.setLocale(locale.code)"
            >
              {{ locale.title }}
            </span>            
          </div>
          <div class="widget-content-left d-flex align-items-center" v-if="loggedIn">
            <strong class="color-brand display-inline-block mr-3" v-if="user">
              {{ user.firstName }} {{ user.lastName }}
            </strong>

            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <div slot="button-content" v-on="on">
                  <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <i class="pe-7s-user"/>
                    <v-icon>mdi-chevron-down</v-icon>
                  </div>
                </div>
              </template>
              <div class="user-dropdown">
                <span
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  class="v-btn v-btn--contained theme--light v-size--default text-decoration-none"
                  @click="$i18n.setLocale(locale.code)"
                >
                  {{ locale.title }}
                </span>
                <v-btn @click="logout" color="error">
                  {{ $t('auth.logout') }}
                </v-btn>
              </div>
            </v-menu>
          </div>
          <div v-else>
            <nuxt-link
              :to="localePath('auth-login')"
              class="v-btn v-btn--contained theme--light v-size--default text-decoration-none"
            >
              {{ $t('auth.login') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
  //import { LdapControllerService } from "~/service/ldap";

  /**
   * Komponenta pro uživatelské části horního panelu
   * @name HeaderUserArea
   * @module components/partials/HeaderUserArea
   * @vue-computed {Object[]} availableLocales - dostupné jazykové mutace
   * @vue-computed {Boolean} loggedIn - boolean, zda je uživatel přihlášen
   * @vue-computed {Object} user - aktuální uživatel
   * @vue-event {} logout - metoda pro odhlášení uživatele pomocí nuxt-auth
   */
  export default {
    name: 'HeaderUserArea',
    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
      ...mapState({
        loggedIn: state => state.auth.loggedIn,
        user: state => state.auth.user,
      }),
    },
    methods: {
      ...mapActions({
        //getUser: 'ldap/getUser',
        //isAdmin: 'ldap/isAdmin',              
      }),
      async logout() {
        await this.$auth.logout()
        this.$toast.success(this.$t('auth.logoutSuccess'))
      },
    },
    async mounted() {
      /*const response = await LdapControllerService.getUserDetailUsingPost({ userDetailRequest: { username: undefined }})
      this.$auth.setUser(response)
      this.getUser()
      this.isAdmin()*/
    },
    async created() {      
    },
    watch: {
      'user': function (newValue, oldValue) {
        if (JSON.stringify(newValue) != JSON.stringify(oldValue)) {          
          //this.getUser();
          //this.isAdmin();          
        }

      }
    },
  }
</script>

<style lang="scss">
  .icon-wrapper {
    align-items: center;
    display: flex;
    font-size: 1.5rem;

    i {
      font-size: 2rem;
    }
  }

  .role-select {
    max-width: 200px;
  }

  .user-dropdown {
    background: white;
    padding: 1rem;
  }
</style>
