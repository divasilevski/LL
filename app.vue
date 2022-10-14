<script lang="ts" setup>
const { initUserToken } = useUserToken()
const { initUserAsync } = useAuth()

useAsyncData(async () => {
  initUserToken()
  await Promise.all([initUserAsync()])
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
