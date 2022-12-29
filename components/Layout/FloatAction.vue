<script lang="ts" setup>
const { pageAction } = useAppNavigation()
</script>

<template>
  <div class="float-action">
    <UIButtonIcon v-if="pageAction" class="fab" :to="pageAction.to">
      <component :is="pageAction.icon" />
    </UIButtonIcon>
  </div>
</template>

<style lang="postcss" scoped>
.float-action {
  @apply fixed inset-x-0 bottom-0 app-container;

  .fab {
    @apply absolute bottom-12 right-4 p-4 bg-background rounded-full shadow-md;
    @apply hidden md:flex items-center justify-center hover:rotate-6;
  }
}
</style>
