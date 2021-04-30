<template>
  <v-col
    cols="12" :lg="breakpoints.lg" :md="breakpoints.md" :sm="breakpoints.sm" :xl="breakpoints.xl"
  >
    <v-row>
      <v-col cols="6" class="pr-0 py-0">
        <v-menu
          ref="dateMenu"
          v-model="dateOpen"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="date"
          max-width="290px"
          min-width="290px"
          offset-y
          transition="scale-transition"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              append-icon="date_range"
              autocomplete="new"
              color="primary"
              :dense="dense"
              :id="field"
              :error="!!errorObject[field]"
              :error-messages="errorObject[field]"
              :label="labelDate"
              :required="required"
              :rules="[
                v => /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(v) || 'Zadejte prosím datum ve formátu YYYY-MM-DD',
              ]"
              placeholder="YYYY-MM-DD"
              :type="type"
              :value="date"
              @click:append="dateOpen = !dateOpen"
              @input="handleDateChange($event)"
            />
          </template>
          <v-date-picker
            color="primary"
            full-width
            no-title
            v-if="dateOpen"
            v-model="date"
            @click:date="$refs.dateMenu.save(date)"
          />
        </v-menu>
      </v-col>

      <v-col :class="`${updateBtn ? 'px-0' : 'pl-0'} py-0`" cols="4">
        <v-menu
          :close-on-content-click="false"
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
          offset-y
          ref="timeMenu"
          v-model="timeOpen"
          transition="scale-transition"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              append-icon="access_time"
              autocomplete="new"
              color="primary"
              :dense="dense"
              :id="field"
              :error="!!errorObject[field]"
              :error-messages="errorObject[field]"
              :label="labelTime"
              :required="required"
              :rules="[
                v => /^(2[0-3]|[0-1][\d]):[0-5][\d]$/.test(v) || 'Zadejte prosím platný čas (HH:MM)',
              ]"
              placeholder="HH:MM"
              :type="type"
              :value="time"
              @click:append="timeOpen = !timeOpen"
              @input="handleTimeChange($event)"
            />
          </template>
          <v-time-picker
            color="primary"
            format="24hr"
            full-width
            v-if="timeOpen"
            v-model="time"
            @click:minute="$refs.timeMenu.save(time)"
          />
        </v-menu>
      </v-col>
      <v-col class="pl-0 py-0" cols="2" v-if="updateBtn">
        <v-btn
          class="refresh-btn mt-1"
          small
          text
          @click="updateDateTimeValue($moment())"
        >
          <v-icon>refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  /**
   * Komponenta pro zadání data a času
   * @name DateTimeWidget
   * @module components/partials/DateTimeWidget
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - update data a času
   */

  export default {
    name: "DateTimeWidget",
    props: {
      breakpoints: {
        type: Object,
        required: false,
        default: () => ({
          sm: 12, md: 6, lg: 6, xl: 6
        })
      },
      dense: {
        type: Boolean,
        default: true
      },
      field: {
        type: String,
        required: false
      },
      labelDate: {
        type: String,
        default: 'Datum'
      },
      labelTime: {
        type: String,
        default: 'Čas'
      },
      py: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false,
      },
      rules: {
        type: Array,
        required: false
      },
      type: {
        type: String,
        default: 'text'
      },
      updateBtn: {
        type: Boolean,
        default: false
      },
      value: {
        required: true,
      },
    },
    computed: {
      ...mapState({
        errorObject: state => state.errors.errorObject
      }),
      datetime() {
        if (this.date && this.time)
          return this.$moment(`${this.date} ${this.time}`)
      }
    },
    data: () => ({
      date: null,
      dateOpen: null,
      time: null,
      timeOpen: false
    }),
    methods: {
      ...mapMutations({
        clearErrorObject: 'errors/clearErrorObject',
        setErrorObject: 'errors/setErrorObject',
      }),
      handleDateChange(value) {
        if (/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(value)) {
          this.date = value
        }
      },
      handleTimeChange(value) {
        if (/^(2[0-3]|[0-1][\d]):[0-5][\d]$/.test(value)) {
          this.time = value
        }
      },
      updateDateTimeValue(value) {        
        this.date = this.$moment(value).format('YYYY-MM-DD')
        this.time = this.$moment(value).format('HH:mm')
      }
    },
    created() {
      this.updateDateTimeValue(this.value)
    },
    watch: {
      datetime(newValue) {
        this.$emit('change', newValue)
      },
      value(newValue) {
        this.updateDateTimeValue(newValue)
      }
    }
  }
</script>

<style scoped>
  .refresh-btn {
    align-items: flex-end;
    border-bottom: 1px solid #777;
    display: flex;
    justify-content: center;
    width: 30px;
  }
</style>
