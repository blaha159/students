<template>
  <div>
    <PageTitle
      :heading=heading :subheading=subheading :icon=icon
    />
    <v-card>
      <v-card-text>
        <SubjectTable/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import PageTitle from '~/components/partials/PageTitle'
  import SubjectTable from '~/components/subject/SubjectTable'

  /**
   * Přehled produktů využívající komponentu SubjectTable
   * @name Subject
   * @module pages/subject/index
   * @vue-computed {String} heading - Text nadpisu
   * @vue-computed {String} subheading - Text podnadpisu
   * @vue-data {String} icon - CSS třídy ikony
   */
  export default {
    name: 'Subject',
    layout: 'default_vt',    
    components: { PageTitle, SubjectTable },
    computed: {
      heading() { return this.$t('menu.subjects') },
      subheading() { return this.$t('subjectList.subtitle') }
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