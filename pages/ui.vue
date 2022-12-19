<script setup lang="ts">
import IconProfile from '@/assets/svg/profile.svg'
const isShow = ref(true)

const inputValue = ref('value123')

const clearValue = () => {
  inputValue.value = ''
}

const toggle = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <article>
    <div>{{ '&nbsp;' }}</div>
    <UIButton @click="toggle">TRY FREE</UIButton>
    <div>{{ '&nbsp;' }}</div>
    <div v-show="isShow">Показать скрыть</div>
    <div>{{ '&nbsp;' }}</div>
    <UIButton to="/">Link</UIButton>
    <div>{{ '&nbsp;' }}</div>
    <UIButton styleType="text">Text Style</UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIButton disabled>disabled</UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIButton loading>Some Styles</UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIButton disabled loading>Some Styles</UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIButton styleType="text" disabled loading>Some Styles</UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIButton>
      <div class="flex items-center justify-center space-x-2">
        <span>Иконка</span>
        <IconProfile class="w-6 h-6" />
      </div>
    </UIButton>

    <div>{{ '&nbsp;' }}</div>
    <UIInput placeholder="Search..." />

    <div>{{ '&nbsp;' }}</div>
    <UIInput v-model:value="inputValue" />
    <UIButton @click="clearValue">{{ inputValue }}</UIButton>
  </article>
</template>
