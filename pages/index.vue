<script setup>
const user = useUserState()
</script>

<template>
  <article>
    Главная страница
    <pre>{{ user }}</pre>
  </article>
</template>
