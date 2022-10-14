<script setup>
import { routes } from '@/config/navigation'
</script>

<template>
  <nav>
    <ul class="navigation">
      <li v-for="route in routes" :key="route.to" class="navigation__item">
        <NuxtLink :to="route.to">{{ route.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.navigation {
  @apply flex;

  .navigation__item {
    @apply px-2;
  }
}
</style>
