<script>
  import defaultLayout from './default'

  /**
   * Default layout VT
   * @name DefaultLayoutVt
   */
  export default {
     name: 'DefaultLayoutVt',
    ...defaultLayout,
    computed: {
      title() {
        return this.$t('common.students')
      }
    },
    head() {
     return {
       title: this.$t('common.students')
     }
    }
  };
</script>
