<template>
  <v-col cols="12" :lg="breakpoints.lg" :md="breakpoints.md" :sm="breakpoints.sm" :xl="breakpoints.xl">
    <v-menu
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="date"
      max-width="290px"
      min-width="290px"
      offset-y
      :ref="reference"
      transition="scale-transition"
      v-model="dateOpen"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          append-icon="date_range"
          autocomplete="new"
          :class="required ? 'required' : ''"
          color="primary"
          :id="field"
          :error="!!errorObject[field]"
          :error-messages="errorObject[field]"
          :label="label"
          ref="dateField"
          :required="required"
          :rules="[
            v => (!v && !required)  || /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(v) || 'Zadejte prosím datum ve formátu YYYY-MM-DD',
          ]"
          placeholder="YYYY-MM-DD"
          v-model="date"
          @click:append="dateOpen = !dateOpen"
        />
      </template>
      <v-date-picker
        color="primary"
        :first-day-of-week="1"
        full-width
        no-title
        v-if="dateOpen"
        v-model="date"
        @click:date="$refs[reference].save(date)"
      />
    </v-menu>
  </v-col>
</template>

<script>
  import { mapState } from 'vuex'

 /**
   * Komponenta pro zadání data
   * @name DateWidget
   * @module components/partials/DateWidget
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - update data
   */
  export default {
    name: "DateWidget",
    props: {
      breakpoints: {
        type: Object,
        required: false,
        default: () => ({
          sm: 12, md: 6, lg: 6, xl: 6
        })
      },
      field: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      reference: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        required: true
      },
    },
    computed: {
      ...mapState({
        errorObject: state => state.errors.errorObject
      }),
    },
    data: () => ({
      date: null,
      dateOpen: null
    }),
    created() {
      this.date = this.value
    },
    watch: {
      date(newValue) {
        this.$emit('change', { field: this.field, value: newValue })
      }
    }
  }
</script>

<style scoped>

</style>
