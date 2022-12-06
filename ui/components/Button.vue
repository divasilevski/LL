<script setup lang="ts">
import IconLoader from '../assets/svg/loader.svg'

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  styleType: {
    type: String as () => 'blue' | 'text',
    default: 'blue',
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
  `button style-${props.styleType}`,
  { 'button--disabled': props.disabled, 'button--loading': props.loading },
])

const tagComputed = computed(() => (props.to ? defineNuxtLink({}) : 'button'))
</script>

<template>
  <component :class="classComputed" :is="tagComputed" :to="props.to">
    <slot />
    <div v-if="props.loading" :class="`loader style-${props.styleType}`">
      <IconLoader class="loader__spin" />
    </div>
  </component>
</template>

<style lang="postcss" scoped>
.button {
  @apply relative py-3 px-10 font-medium rounded-sm cursor-pointer select-none;
  @apply after:absolute active:top-[2px] hover:after:left-0 hover:after:w-full;
}

.button::after {
  @apply top-0 right-0 h-full w-0 rounded-sm bg-white opacity-10;
  @apply transition-all duration-300 ease-in-out;
}

.button--disabled {
  @apply pointer-events-none opacity-60;
}

.button--loading {
  @apply pointer-events-none;
}

/* Button Styles */
.style-blue {
  @apply text-white uppercase bg-gradient-to-r from-gradient-from-blue to-gradient-to-blue drop-shadow-md;
}
.style-text {
  @apply text-black uppercase bg-background drop-shadow-none after:bg-black;
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
