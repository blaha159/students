import axios from 'axios'

export default function getAxiosInstance(baseUrl: string) {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
  })

  axiosInstance.interceptors.request.use(request => {
    request.headers.Authorization = localStorage.getItem('auth._token.local')
    return request
  })

  axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('i18n_redirected') || navigator.language
  return axiosInstance
}
