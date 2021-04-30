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
          :label="label"
          ref="dateField"
          readonly
          :required="required"
          placeholder="YYYY-MM-DD"
          v-model="dateRangeText"
          @click="dateOpen = !dateOpen"
        />
<!--                  :rules="[
            v => (!v && !required)  || isDateArrayValid(v) || 'Zadejte prosím datum ve formátu YYYY-MM-DD',
          ]"-->
      </template>
      <v-date-picker
        color="primary"
        :first-day-of-week="1"
        full-width
        no-title
        range
        readonly
        v-if="dateOpen"
        v-model="date"
      >
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="dateOpen = false">{{ $t('common.cancel') }}</v-btn>
        <v-btn color="primary" text @click="$refs[reference].save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
  import { mapState } from 'vuex'

/**
   * Komponenta pro zadání rozsahu data od a do
   * @name DateWidgetRange
   * @module components/partials/DateWidgetRange
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - update data
   */
  export default {
    name: 'DateWidgetRange',
    props: {
      breakpoints: {
        type: Object,
        required: false,
        default: () => ({
          sm: 12, md: 6, lg: 6, xl: 6
        })
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
        type: Array,
        required: true
      },
    },
    computed: {
      ...mapState({
        errorObject: state => state.errors.errorObject
      }),
      dateRangeText () {
        return this.date.join(' ~ ')
      },
    },
    data: () => ({
      date: null,
      dateOpen: null
    }),
    created() {
      this.date = this.value
    },
    watch: {
      date(dateArray) {
        this.$emit('change', dateArray)
      },
      value(newValue) {
        this.date = newValue
      }
    }
  }
</script>

<style scoped>

</style>
