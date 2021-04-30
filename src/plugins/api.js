import getAxiosInstance from '~/helpers/getAxiosInstance'
import handleErrorResponse from '~/helpers/handleErrorResponse'

import {serviceOptions as studentsServiceOptions} from '~/service/studentsBack.ts'

/**
 * Globální nastavení axiosu
 * @param $axios instance axiosu
 * @param redirect
 */

export default function ({ $axios }) {
  $axios.onError(err => {
    const handledError = handleErrorResponse(err.response)

    if (window.$nuxt) {
      if (handledError.errorObject) window.$nuxt.$store.commit('errors/setErrorObject', handledError.errorObject)
      // if (handledError.message) window.$nuxt.$toast.error(handledError.message)

      if(err.response.status === 401) return Promise.resolve(handledError)
      return Promise.reject(handledError)
    }

    return Promise.reject(err)
  })

  if (!process.env.API_DOMAIN_STUDENTS) {
    console.error('ENV properties API_DOMAIN_STUDENTS not set, app will cannot join necessary services');
  }

  $axios.defaults.withCredentials = true
  $axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('i18n_redirected') || navigator.language
  $axios.defaults.baseURL = process.env.API_DOMAIN_STUDENTS
  studentsServiceOptions.axios = $axios

  //nextServiceOptions.axios = getAxiosInstance(process.env.API_DOMAIN_NEXT)
  //nextServiceOptions.axios.defaults.timeout = 1000 * 6; // 6s, timeout is set in milliseconds  
}
