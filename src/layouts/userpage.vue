<template>
  <v-app class="app-container app-theme-white">
    <Nuxt/>
  </v-app>
</template>

<script>

/**
   * Userpage layout
   * @name UserPageLayout
   */
  export default {
    name: 'UserPageLayout',
    components: {
    },
    data() {
      return {
      }
    },
    methods:{

    },
    // middleware: 'notAuthenticated'
  }
</script>

<style>
  .app-login-box img.logo {
    display: block;
    margin: 10px auto;
    width: 80%;
  }
  .orange.darken-3 {
    color: white;
  }
</style>
