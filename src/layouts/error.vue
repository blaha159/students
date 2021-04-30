<template>
  <v-app>
    <div class="h-100 bg-royal bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <v-col md="8" class="mx-auto app-login-box">
          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h1 v-if="error.statusCode === 404">404 Page not found</h1>
                  <h1 v-else>
                    {{ $t('common.errorPageTitle') }}
                    <br>
                    <small>
                      {{ $t('common.letsHeadTo') }}
                      <nuxt-link :to="localePath({name: 'index'})">
                        {{ $t('common.homepage') }}
                      </nuxt-link>...
                    </small>
                  </h1>
                </div>
                <div class="divider"/>
                <h6 class="mb-0 text-center">
                  <nuxt-link :to="localePath({name: 'index'})">
                    {{ $t('common.homepage') }}
                  </nuxt-link>
                </h6>
              </div>
            </div>
          </div>
        </v-col>
      </div>
    </div>
  </v-app>
</template>

<script>
/**
 * Error layout
 * @name ErrorLayout
 */
export default {
  name: 'ErrorLayout',
  props: ['error'],
  layout: 'userpage'
}
</script>

<style scoped lang="scss">
  .modal-body a {
    color: #003E8C;

    &:hover {
      text-decoration: none;
    }
  }
</style>
