type Request<T> = Parameters<typeof useFetch<T>>[0]
type Options<T> = Parameters<typeof useFetch<T>>[1]

export default function <T>(request: Request<T>, options?: Options<T>) {
  const runtimeConfig = useRuntimeConfig()
  const { baseURL } = runtimeConfig.public

  const { userToken } = useUserToken()
  const headers: HeadersInit = {}

  if (userToken.value) {
    headers.authorization = userToken.value
  }

  return useFetch<T>(request, { baseURL, headers, ...options })
}
