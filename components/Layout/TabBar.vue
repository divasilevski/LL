<script lang="ts" setup>
const { tabs, hasTabBar } = useAppNavigation()
</script>

<template>
  <nav v-if="hasTabBar" class="tabbar">
    <UIButtonIcon v-for="tab in tabs" :key="tab.name" :to="tab.name">
      <component :is="tab.icon" />
    </UIButtonIcon>
  </nav>
</template>

<style lang="postcss" scoped>
.tabbar {
  @apply fixed inset-x-0 bottom-0 flex justify-evenly items-center h-12 bg-background;
  @apply md:hidden shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-30;

  a {
    @apply opacity-30;
  }

  .router-link-active {
    @apply opacity-100;
  }
}
</style>
