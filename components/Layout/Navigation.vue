<script setup>
import { routes } from '@/config/navigation'

const { translate } = useLocale()
</script>

<template>
  <nav>
    <ul class="navigation">
      <li v-for="route in routes" :key="route.to" class="navigation__item">
        <NuxtLink :to="route.to">{{ translate(route.tname) }}</NuxtLink>
      </li>
      <LayoutUserMenu />
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.navigation {
  @apply flex;

  .navigation__item {
    @apply capitalize px-2;
  }
}
</style>
