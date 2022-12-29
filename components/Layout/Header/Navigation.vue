<script lang="ts" setup>
const { tabs, hasTabBar } = useAppNavigation()
</script>

<template>
  <nav class="navigation">
    <div v-if="hasTabBar" class="navigation__items">
      <UIButtonIcon v-for="tab in tabs" :key="tab.name" :to="tab.name">
        <component :is="tab.icon" />
      </UIButtonIcon>
    </div>
    <LayoutHeaderAction />
  </nav>
</template>

<style lang="postcss" scoped>
.navigation {
  @apply flex;

  .navigation__items {
    @apply items-center gap-1 hidden md:flex;

    svg {
      @apply opacity-50;
    }

    .router-link-active svg {
      @apply opacity-100;
    }
  }
}
</style>
