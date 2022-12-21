<template>
  <div class="drawer">
    <div class="drawer__overlay" @click="$emit('close')" />
    <div class="drawer__body">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.drawer {
  @apply z-40 animate-fade;

  .drawer__overlay {
    @apply fixed inset-0 bg-black opacity-60;
  }

  .drawer__body {
    @apply fixed inset-y-0 left-0 w-72 bg-background shadow-md;
    @apply md:left-[unset] sm:w-80;
  }
}
</style>
