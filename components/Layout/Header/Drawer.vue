<script lang="ts" setup>
import IconMenu from '@/assets/svg/menu.svg'

const isDrawer = ref(false)
const toggleDrawer = () => (isDrawer.value = !isDrawer.value)
</script>

<template>
  <div>
    <LazyUIDrawer :visible="isDrawer" @close="toggleDrawer">
      <NuxtLink to="/history/ui">UI</NuxtLink>
      <NuxtLink to="/auth">Auth</NuxtLink>
    </LazyUIDrawer>

    <UIButtonIcon @click="toggleDrawer">
      <IconMenu />
    </UIButtonIcon>
  </div>
</template>

<style lang="postcss" scoped></style>
