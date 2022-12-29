<script lang="ts" setup>
const { tabs, hasTabBar } = useAppNavigation()
</script>

<template>
  <UITabBar v-if="hasTabBar" class="tabbar">
    <UIButtonIcon v-for="tab in tabs" :key="tab.name" :to="tab.name">
      <component :is="tab.icon" />
    </UIButtonIcon>
  </UITabBar>
</template>

<style lang="postcss" scoped>
.tabbar {
  @apply md:hidden;

  a {
    @apply opacity-30;
  }

  .router-link-active {
    @apply opacity-100;
  }
}
</style>
