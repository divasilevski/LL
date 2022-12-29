<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <nav>
      <a href="https://github.com/divasilevski/folyod" target="_blank">© Folyod</a>
      <time>{{ year }}</time>
    </nav>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  @apply flex items-center h-10 bg-background;

  nav {
    @apply flex items-center justify-between text-sm app-container;
  }
}
</style>
