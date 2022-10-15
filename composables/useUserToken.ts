export default function () {
  const userToken = useUserTokenState()
  const cookieToken = useCookie<string | null>('api_token')

  const loadUserToken = () => {
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

  return { userToken, loadUserToken, setUserToken, clearUserToken }
}
