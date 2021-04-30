export default function handleErrorResponse(response) {

  if ([401, 403].includes(response.status)) {
    if(window.$nuxt) window.$nuxt.$router.push(window.$nuxt.localePath({name: 'auth-login'}));
    return {message: response.data?.message || '', errorObject: {}}
  }

  if (![400, 417].includes(response.status) || !response.data) {
    return {message: 'Server error', errorObject: {}}
  }

  return {message: response.data.message, errorObject: {}}
}
