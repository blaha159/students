<template>
  <div>
    <PageTitle
      :heading=heading :subheading=subheading :icon=icon
    />
    <v-card>
      <v-card-text>
        <WeatherForecastTable/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import PageTitle from '~/components/partials/PageTitle'
  import WeatherForecastTable from '~/components/weatherForecast/WeatherForecastTable'

  /**
   * Přehled produktů využívající komponentu WeatherForecastTable
   * @name WeatherForecast
   * @module pages/weatherForecast/index
   * @vue-computed {String} heading - Text nadpisu
   * @vue-computed {String} subheading - Text podnadpisu
   * @vue-data {String} icon - CSS třídy ikony
   */
  export default {
    name: 'WeatherForecast',
    layout: 'default_vt',    
    components: { PageTitle, WeatherForecastTable },
    computed: {
      heading() { return this.$t('menu.weatherForecast') },
      subheading() { return this.$t('weatherForecastList.subtitle') }
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