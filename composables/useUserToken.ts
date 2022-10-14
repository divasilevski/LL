export default function () {
  const userToken = useUserTokenState()
  const cookieToken = useCookie<string | null>('api_token')

  const initUserToken = () => {
    if (cookieToken.value) {
      userToken.value = 'Token ' + cookieToken.value
    }
  }

  const setUserToken = (token: string) => {
    userToken.value = 'Token ' + token
    cookieToken.value = token
  }

  const clearUserToken = () => {
    userToken.value = null
    cookieToken.value = null
  }

  return { userToken, initUserToken, setUserToken, clearUserToken }
}
