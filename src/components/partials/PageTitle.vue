<template>
  <div class="app-page-title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div class="page-title-icon">
          <i :class="icon"/>
        </div>
        <div>
          {{heading}}
          <div class="page-title-subheading">
            {{subheading}}
          </div>
        </div>
      </div>
      <div class="page-title-actions" v-if="buttonText">
        <v-btn @click="$emit('btnClick')" color="primary" large>
          {{ buttonText }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * Komponenta používaná napříc aplikací pro headery jednotlivých stránek
   * @name PageTitle
   * @module components/partials/PageTitle
   * @vue-prop {String} icon - CSS třída pro ikonu
   * @vue-prop {String} heading - Nadpis
   * @vue-prop {String} subheading - Podnadpis
   * @vue-prop {String} subheading - Text tlačítka
   */
  export default {
    props: {
      icon: String,
      heading: String,
      subheading: String,
      buttonText: String
    }
  }
</script>
