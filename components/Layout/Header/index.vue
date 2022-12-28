<script lang="ts" setup>
const { isStickyHeader } = useAppNavigation()
</script>

<template>
  <UIHeader :sticky="isStickyHeader">
    <div class="toolbar">
      <LayoutHeaderDrawer class="toolbar__left" />
      <LayoutHeaderTitle class="toolbar__center" />
      <LayoutHeaderAction class="toolbar__right" />
    </div>
  </UIHeader>
</template>

<style lang="postcss" scoped>
.toolbar {
  @apply grid grid-cols-3 items-center app-container px-3;
  @apply md:grid-cols-[min-content_min-content_1fr];

  .toolbar__left {
    @apply justify-self-start;
  }

  .toolbar__center {
    @apply justify-self-center;
    
  }

  .toolbar__right {
    @apply justify-self-end md:hidden;
  }
}
</style>
