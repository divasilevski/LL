<script setup>
const props = defineProps({
  sticky: {
    type: Boolean,
    default: false,
  },
})

const classComputed = computed(() => ({
  'header--sticky': props.sticky,
}))
</script>

<template>
  <div class="header-space" />
  <div class="header" :class="classComputed">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.header {
  @apply absolute left-0 right-0 flex items-center h-16 bg-background z-30 md:h-20;
}

.header--sticky {
  @apply fixed shadow-md;
}

.header-space {
  @apply h-16 md:h-20;
}
</style>
