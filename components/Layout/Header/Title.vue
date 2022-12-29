<script lang="ts" setup>
import { PagePath } from '@/config/navigation'

const { headerTitle } = useAppNavigation()
</script>

<template>
  <NuxtLink class="logo" :to="PagePath.Index">
    <span class="logo__text">FOLYOD</span>
    <span v-if="headerTitle" class="logo__title">{{ headerTitle }}</span>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.logo {
  @apply relative mx-2 flex flex-col items-center;

  .logo__text {
    @apply text-xl font-medium;
  }

  .logo__title {
    @apply absolute top-5 text-xs font-medium md:hidden;
  }
}
</style>
