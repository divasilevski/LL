<script lang="ts" setup>
const { loadUserAsync } = useAuth()
const { loadUserToken } = useUserToken()
const { loadDictionaryAsync } = useLocale()

useAsyncData(async () => {
  loadUserToken()

  await Promise.all([loadUserAsync(), loadDictionaryAsync()])

  return true
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
* {
  font-family: 'Inter';
  @apply tracking-wide;
}
</style>
