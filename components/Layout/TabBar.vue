<script lang="ts" setup>
import IconHome from '@/assets/svg/home.svg'
import IconHistory from '@/assets/svg/history.svg'
import IconUser from '@/assets/svg/user.svg'

const tabs = [
  { name: 'home', icon: IconHome, to: '/sources' },
  { name: 'history', icon: IconHistory, to: '/history' },
  { name: 'user', icon: IconUser, to: '/user' },
]
</script>

<template>
  <UITabBar>
    <UIButtonIcon v-for="tab in tabs" :key="tab.name" :to="tab.to">
      <component :is="tab.icon" />
    </UIButtonIcon>
  </UITabBar>
</template>

<style lang="postcss" scoped>
a {
  @apply opacity-30;
}

.router-link-active {
  @apply opacity-100;
}
</style>
