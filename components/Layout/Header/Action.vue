<script lang="ts" setup>
const { pageAction } = useAppNavigation()
</script>

<template>
  <UIButtonIcon v-if="pageAction" :to="pageAction.to">
    <component :is="pageAction.icon" />
  </UIButtonIcon>
</template>

<style lang="postcss" scoped></style>
