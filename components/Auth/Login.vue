<script lang="ts" setup>
const { loginUserAsync } = useAuth()

const data = { email: '', password: '' }

const formData = ref({ ...data })
const loginData = ref({ ...data })

const { pending } = await loginUserAsync(loginData.value)
pending.value = false

const submit = () => {
  Object.assign(loginData.value, formData.value)
}
</script>

<template>
  <form @submit.prevent>
    <UIInput
      v-model:value="formData.email"
      name="loginEmail"
      label="Email"
      type="email"
    />
    <UIInput
      v-model:value="formData.password"
      name="loginPassword"
      label="Password"
      type="password"
    />
    <UIButton @click="submit" :loading="pending">Login</UIButton>
  </form>
</template>

<style lang="postcss" scoped>
form {
  @apply flex flex-col gap-4;
}
</style>
