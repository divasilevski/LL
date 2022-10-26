<script setup>
import IconProfile from '@/assets/svg/profile.svg'
</script>

<template>
  <div class="user-menu">
    <NuxtLink to="/profile">
      <IconProfile />
    </NuxtLink>
  </div>
</template>

<style lang="postcss" scoped>
.user-menu {
  @apply flex items-center justify-center h-6 w-6 mx-2;
}
</style>
