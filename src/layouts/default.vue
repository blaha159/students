<template>
  <v-app class="app-container app-theme-white">
    <transition name="fade" mode="out-in" appear>
      <Header :title="title"/>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <Sidebar/>
    </transition>
    <div class="app-main__outer">
      <div class="app-main__inner">
        <Nuxt/>
      </div>
    </div>
  </v-app>
</template>

<script>
  import Header from '~/components/Header'
  import Sidebar from '~/components/Sidebar'

  /**
   * Default layout
   * @name DefaultLayout
   */
  export default {
    name: 'DefaultLayout',
    components: { Header, Sidebar },
    computed: {
      title() {
        return this.$t('common.students')
      }
    },
    head() {
     return {
       title: this.$t('common.students')
     }
    }
  }
</script>
