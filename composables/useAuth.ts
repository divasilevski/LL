import { Api } from '@/config/api'
import { User } from '@/types/user'

export default function () {
  const user = useUserState()
  const { clearUserToken } = useUserToken()

  const loadUserAsync = async () => {
    const { data } = await useApiFetch<User>(Api.GetMe)

    user.value = data.value

    if (!data.value) {
      clearUserToken()
    }
  }

  const registerUserAsync = async () => {}

  const loginUserAsync = async () => {}

  const logoutUserAsync = async () => {}

  return {
    registerUserAsync,
    logoutUserAsync,
    loginUserAsync,
    loadUserAsync,
    user,
  }
}
