const URL = 'https://randomuser.me/api/'

interface RandomUserData {
  results: Array<unknown>
}

export default defineEventHandler(async (event) => {
  if (event.node.req.headers.authorization) {
    const data = await $fetch<RandomUserData>(URL)
    return data.results[0]
  }

  return null
})
