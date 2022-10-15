import { UserState, UserTokenState } from '@/types/user'
import { LocaleState, DictinaryState } from '@/types/locale'

export const useUserState = () => useState<UserState>('user')
export const useUserTokenState = () => useState<UserTokenState>('token')

export const useLocaleState = () => useState<LocaleState>('locale')
export const useDictionaryState = () => useState<DictinaryState>('dictionary')
