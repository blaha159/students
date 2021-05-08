<template>
  <div>
    <PageTitle
      :heading=heading :subheading=subheading :icon=icon
    />
    <v-card>
      <v-card-text>
        <PredmetTable/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import PageTitle from '~/components/partials/PageTitle'
  import PredmetTable from '~/components/predmet/PredmetTable'

  /**
   * Přehled produktů využívající komponentu PredmetTable
   * @name Predmet
   * @module pages/predmet/index
   * @vue-computed {String} heading - Text nadpisu
   * @vue-computed {String} subheading - Text podnadpisu
   * @vue-data {String} icon - CSS třídy ikony
   */
  export default {
    name: 'Predmet',
    layout: 'default_vt',    
    components: { PageTitle, PredmetTable },
    computed: {
      heading() { return this.$t('menu.predmet') },
      subheading() { return this.$t('predmetList.subtitle') }
    },
    data() {
      return {
        icon: 'pe-7s-cloud icon-gradient bg-amy-crisp'
      }
    },
  }
</script>

<style scoped>

</style>