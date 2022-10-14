import { UserState, UserTokenState } from '@/types/user'

export const useUserState = () => useState<UserState>('user')
export const useUserTokenState = () => useState<UserTokenState>('token')
