export interface User {
  id: number
  name: string
  username: string
}

export type UserState = User | undefined | null

export type UserTokenState = string | undefined | null

export interface LoginData {
  email: string
  password: string
}
