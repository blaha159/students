<template>
  <div>    
    <v-data-table
      :headers="tableHeaders"
      :items="predmetList"
      ref="predmetTable"
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
   * @name PredmetTable
   * @module components/predmets/PredmetTable
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-computed {Object[]} tableHeaders - nastavení sloupců tabulky
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - get listu produktů
   */
  export default {
    name: 'PredmetTable',
    computed: {
      ...mapState({
        predmetList: state => state.predmets.predmetList
      }),
      tableHeaders() {
        return [
          {value: 'nazev', text: this.$t('predmetList.nazev')},
          {value: 'id', text: ''},
        ]
      }
    },
    data: () => ({
    }),
    methods: {
      ...mapActions({
        getPredmetList: 'predmets/getPredmetList'
      }),
    },
    created() {
      this.getPredmetList();
    },
  }
</script>


