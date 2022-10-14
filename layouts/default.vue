<template>
  <div class="layout">
    <LayoutHeader />
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex flex-col min-h-screen bg-background text-secondary;

  .main {
    @apply flex flex-1 app-container;
  }
}
</style>
