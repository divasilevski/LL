<script lang="ts" setup>
const route = useRoute()
const computedSticky = computed(() => route.name !== 'index')

const isDrawer = ref(false)
const toggleDrawer = () => (isDrawer.value = !isDrawer.value)
</script>

<template>
  <UIHeader :sticky="computedSticky">
    <div class="toolbar">
      <UIDrawer v-if="isDrawer" @close="toggleDrawer">
        <NuxtLink to="/ui">UI</NuxtLink>
      </UIDrawer>

      <!-- <UIButton class="z-50" @click="toggleDrawer">Drawer</UIButton> -->

      <LayoutLogo />
      <LayoutNavigation />
    </div>
  </UIHeader>
</template>

<style lang="postcss" scoped>
.toolbar {
  @apply flex justify-between app-container;
}
</style>
