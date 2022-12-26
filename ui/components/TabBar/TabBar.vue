<script setup></script>

<template>
  <div class="tabbar">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.tabbar {
  @apply fixed inset-x-0 bottom-0 flex justify-evenly items-center h-12 bg-background;
  @apply shadow-[0_4px_10px_rgba(0,0,0,0.2)];
}
</style>
