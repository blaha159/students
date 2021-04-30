<template>
  <v-menu
    :ref="reference"
    v-model="monthWidgetShown"
    :close-on-content-click="false"
    :return-value="value"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        autocomplete="new"
        :label="label"
        :value="value"
        @change="$emit('change', $event)"
        v-on="on"
      />
    </template>
    <v-date-picker
      @input="monthWidgetShown = false"
      @change="$emit('change', $event)"
      color="primary"
      type="month"
      :value="value" no-title scrollable
    />
  </v-menu>
</template>

<script>
/**
   * Komponenta pro zadání měsíce
   * @name MonthWidget
   * @module components/partials/MonthWidget
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - update data
   */
  export default {
    name: "MonthWidget",
    props: {
      value: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      reference: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        monthWidgetShown: false
      }
    }
  }
</script>

<style scoped>

</style>
