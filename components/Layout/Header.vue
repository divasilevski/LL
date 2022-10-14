<template>
  <header class="header">
    <div class="header__container">
      <LayoutLogo />
      <LayoutNavigation />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex items-center h-20 bg-surface;

  .header__container {
    @apply flex justify-between app-container;
  }
}
</style>
