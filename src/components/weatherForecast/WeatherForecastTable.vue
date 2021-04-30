<template>
  <div>    
    <v-data-table
      :headers="tableHeaders"
      :items="weatherForecastList"
      ref="weatherForecastTable"
    >      
      <template v-slot:item.id="{ item }">      
      </template>
    </v-data-table>    
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  /**
   * List všech produktů aplikace
   * @name WeatherForecastTable
   * @module components/weatherForecasts/WeatherForecastTable
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-computed {Object[]} tableHeaders - nastavení sloupců tabulky
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - get listu produktů
   */
  export default {
    name: 'WeatherForecastTable',
    computed: {
      ...mapState({
        weatherForecastList: state => state.students.weatherForecastList
      }),
      tableHeaders() {
        return [
          {value: 'date', text: this.$t('weatherForecastList.date')},
          {value: 'temperatureC', text: this.$t('weatherForecastList.temperatureC')},  
          {value: 'temperatureF', text: this.$t('weatherForecastList.temperatureF')},  
          {value: 'summary', text: this.$t('weatherForecastList.summary')},  
          {value: 'id', text: ''},
        ]
      }
    },
    data: () => ({
    }),
    methods: {
      ...mapActions({
        getWeatherForecastList: 'students/getWeatherForecastList'
      }),
    },
    created() {
      this.getWeatherForecastList();
    },
  }
</script>


