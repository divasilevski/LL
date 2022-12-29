<template>
  <div class="layout">
    <nav>
      <LayoutFloatAction />
      <LayoutTabBar />
    </nav>

    <LayoutHeader />
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex flex-col min-h-screen bg-surface text-primary;

  .main {
    @apply flex flex-1 app-container;
  }
}
</style>
