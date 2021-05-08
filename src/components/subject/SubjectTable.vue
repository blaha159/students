<template>
  <div>    
    <v-data-table
      :headers="tableHeaders"
      :items="subjectList"
      ref="subjectTable"
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
   * @name SubjectTable
   * @module components/subjects/SubjectTable
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-computed {Object[]} tableHeaders - nastavení sloupců tabulky
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - get listu produktů
   */
  export default {
    name: 'SubjectTable',
    computed: {
      ...mapState({
        subjectList: state => state.subjects.subjectList
      }),
      tableHeaders() {
        return [
          {value: 'nazev', text: this.$t('subjectList.name')},
          {value: 'id', text: ''},
        ]
      }
    },
    data: () => ({
    }),
    methods: {
      ...mapActions({
        getSubjectList: 'subjects/getSubjectList'
      }),
    },
    created() {
      this.getSubjectList();
    },
  }
</script>


