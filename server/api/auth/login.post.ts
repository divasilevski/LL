import { LoginData } from '@/types/user'

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginData>(event)
  await wait(1000)

  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      name: 'Bad Request',
      message: 'Bad user email',
      data: {
        email: 'Enter the correct email',
      },
    })
  }

  if (body.password.length < 8) {
    throw createError({
      statusCode: 400,
      name: 'Bad Request',
      message: 'Bad password',
      data: {
        password: 'Enter the correct password',
      },
    })
  }
  
  return { token: 'fake_token' }
})
