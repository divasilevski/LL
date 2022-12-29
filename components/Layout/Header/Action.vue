<script lang="ts" setup>
const { pageAction } = useAppNavigation()
</script>

<template>
  <UIButtonIcon v-if="pageAction" class="action" :to="pageAction.to">
    <component :is="pageAction.icon" />
  </UIButtonIcon>
</template>

<style lang="postcss" scoped>
.action {
  @apply md:hidden;
}
</style>
