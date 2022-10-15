<script lang="ts" setup>
const { loadUserAsync } = useAuth()
const { loadUserToken } = useUserToken()
const { loadDictionaryAsync } = useLocale()

useAsyncData(async () => {
  loadUserToken()

  await Promise.all([loadUserAsync(), loadDictionaryAsync()])
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
