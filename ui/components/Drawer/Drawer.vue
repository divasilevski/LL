<script lang="ts" setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <Transition :duration="250">
    <div v-if="props.visible" class="drawer" @click.native="$emit('close')">
      <div class="drawer__overlay" />
      <div class="drawer__body" @click.self.stop>
        <div class="drawer__content" @click.self.stop>
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.drawer {
  @apply absolute z-40;

  .drawer__overlay {
    @apply fixed inset-0 bg-black opacity-60 cursor-pointer;
  }

  .drawer__body {
    @apply fixed inset-y-0 px-7 pt-24 left-0 w-72 bg-background shadow-md;
    @apply md:left-[unset] sm:w-80 md:-mx-2 md:px-4;

    .drawer__content {
      @apply flex flex-col;
    }
  }
}

/* Animations */
.drawer.v-leave-active {
  .drawer__overlay {
    @apply animate-overlayOut;
  }
  .drawer__body {
    @apply animate-drawerOut;
  }
}

.drawer.v-enter-active {
  .drawer__overlay {
    @apply animate-overlayIn;
  }
  .drawer__body {
    @apply animate-drawerIn;
  }
}
</style>
