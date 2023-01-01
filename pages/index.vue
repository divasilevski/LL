<script setup>
const user = useUserState()

</script>

<template>
  <article>
    Главная страница
    <pre>{{ user && user.email }}</pre>
  </article>
</template>
