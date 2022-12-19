<script setup></script>

<template>
  <div class="input">
    <input
      class="input__textfield"
      v-bind="$attrs"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<style lang="postcss" scoped>
.input {
  @apply relative;

  .input__textfield {
    @apply flex items-center h-10 px-4 bg-white drop-shadow-md;
    @apply focus:outline-none;
  }
}
</style>
