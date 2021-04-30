<template>
  <v-menu
        :close-on-content-click="false"
        min-width="290px"
        max-width="290px"
        offset-y
        :ref="reference"
        transition="scale-transition"
        v-model="timeWidgetShown"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            :label="label"
            :rules="[
              v => /^(2[0-3]|[0-1][\d]):[0-5][\d]$/.test(v) || $t('errors.timeFormat'),
            ]"
            style="max-width: 290px"
            :value="value"
            v-on="on"
            @change="$emit('change', $event)"
          />
        </template>
        <v-time-picker
          color="primary"
          :value="value"
          v-if="timeWidgetShown"
          @change="$emit('change', $event)"
          @click:minute="timeWidgetShown = false"
        />
      </v-menu>
</template>

<script>
/**
   * Komponenta pro zadání času
   * @name TimeWidget
   * @module components/partials/TimeWidget
   * @vue-computed {Object} ...mapState - napamované potřebné stavy Vuexu
   * @vue-event {} ...mapActions - napamované potřebné akce Vuexu
   * @vue-event {} created - Vue Lifecycle hook - update data a času
   */
  export default {
    name: "TimeWidget",
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
        timeWidgetShown: false
      }
    },
    methods: {
      handleChangeMinute(value) {
        this.$emit('change', value)
        this.timeWidgetShown = false
      }
    }
  }
</script>

<style scoped>

</style>
