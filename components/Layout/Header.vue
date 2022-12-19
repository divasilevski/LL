<script lang="ts" setup>
const route = useRoute()
const computedSticky = computed(() => route.name !== 'index')
</script>


<template>
  <UIHeader :sticky="computedSticky">
    <div class="toolbar">
      <LayoutLogo />
      <LayoutNavigation />
    </div>
  </UIHeader>
</template>

<style lang="postcss" scoped>
.toolbar {
  @apply flex justify-between app-container text-primary;
}
</style>
