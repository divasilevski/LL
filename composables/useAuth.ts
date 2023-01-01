import { Api } from '@/config/api'
import { PagePath } from '@/config/navigation'
import { LoginData, User } from '@/types/user'

export default function () {
  const user = useUserState()
  const router = useRouter()
  const { clearUserToken, setUserToken } = useUserToken()

  const loadUserAsync = async () => {
    const { data } = await useApiFetch<User>(Api.GetMe)

    user.value = data.value

    if (!data.value) {
      clearUserToken()
    }
  }

  const registerUserAsync = async () => {}

  const loginUserAsync = (loginData: LoginData) => {
    return useApiFetch(Api.PostLogin, {
      method: 'POST',
      body: loginData,
      immediate: false,
      onResponse({ response }) {
        const { token } = response._data
        if (token) setUserToken(token)
        router.push(PagePath.Home)
        return response._data
      },
    })
  }

  const logoutUserAsync = async () => {}

  return {
    registerUserAsync,
    logoutUserAsync,
    loginUserAsync,
    loadUserAsync,
    user,
  }
}
