import { Api } from '@/config/api'
import { User } from '@/types/user'

export default function () {
  const user = useUserState()
  const { clearUserToken } = useUserToken()

  const initUserAsync = async () => {
    const { data } = await useApiFetch<User>(Api.GetMe)

    user.value = data.value

    if (!data.value) {
      clearUserToken()
    }
  }

  const loginUserAsync = async () => {}

  const registerUserAsync = async () => {}

  const logoutUserAsync = async () => {}

  return {
    user,
    initUserAsync,
    loginUserAsync,
    registerUserAsync,
    logoutUserAsync,
  }
}
