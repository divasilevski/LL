<script setup lang="ts">
import IconLoader from '../../assets/svg/loader.svg'

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const classComputed = computed(() => [
  'button-icon',
  { 'button--disabled': props.disabled, 'button--loading': props.loading },
])

const tagComputed = computed(() => (props.to ? defineNuxtLink({}) : 'button'))
</script>

<template>
  <component :class="classComputed" :is="tagComputed" :to="props.to">
    <slot />
    <div v-if="props.loading" :class="`loader`">
      <IconLoader class="loader__spin" />
    </div>
  </component>
</template>

<style lang="postcss" scoped>
.button-icon {
  @apply relative p-2 font-medium rounded-full cursor-pointer select-none;
  @apply after:absolute hover:after:scale-100 active:after:scale-100;
}

.button-icon::after {
  @apply top-0 right-0 h-full w-full rounded-full bg-black opacity-10 scale-0;
  @apply transition-all duration-300 ease-in-out;
}

.button--disabled {
  @apply pointer-events-none opacity-60;
}

.button--loading {
  @apply pointer-events-none;
}

/* Loader */
.loader {
  @apply absolute inset-0 flex justify-center items-center;
}

.loader__spin {
  @apply h-6 w-6 animate-spin;
}

.loader__spin :deep(circle) {
  @apply opacity-20;
}
</style>
