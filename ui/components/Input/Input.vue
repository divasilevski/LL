<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="input">
    <label v-if="props.label" :for="name">{{ props.label }}</label>
    <input
      class="input__textfield"
      v-bind="$attrs"
      :id="name"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<style lang="postcss" scoped>
.input {
  @apply relative;

  label {
    @apply text-xs;
  }

  .input__textfield {
    @apply flex items-center h-10 px-4 bg-white drop-shadow-md;
    @apply focus:outline-none;
  }

}
</style>
