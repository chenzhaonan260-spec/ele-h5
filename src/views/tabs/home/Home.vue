<template>
  <div class="home-page">
    <TheTop :recomments="recomments"></TheTop>
  </div>
</template>

<script setup lang="ts">
import TheTop from './components/Top.vue'
const recomments = [
  {
    value: 11,
    label: '餐饮',
  },
  {
    value: 22,
    label: '西瓜',
  },
]
</script>

<style scoped></style>
