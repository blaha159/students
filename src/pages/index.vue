<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div class="card mb-3 bg-deep-blue widget-chart text-white card-border">
          <nuxt-link :to="localePath({name: 'weatherForecast'})" class="card-inner">
            <span>
              <i class="pe-7s-note2"></i>
            </span>
            <h2>{{ $t('common.weatherForecast') }}</h2>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  /**
   * Rozcestník modulů Students client
   * @name StudentsClient
   * @module pages/index
   */
export default {
  head: {
    title: 'Students client'
  },
  created() {
      this.$router.push(this.localePath({name: 'weatherForecast'}));
  },
}
</script>

<style lang="scss">

  .card {
    font-size: 2rem;
    padding: 0.125rem;
    text-align: center;

    .card-inner {
      align-items: center;
      background: white;
      color: #003E8C;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 200px;
      text-decoration: none;
      transition: all 0.5s;

      &:hover {
        background: none;
        color: white;
      }

      i {
        font-size: 3rem;
      }
    }
  }


.title {
  font-weight: 400;
  font-size: 100px;
  color: #003E8C;
  text-align: center;
}

</style>
