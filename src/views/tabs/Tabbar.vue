<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="order" icon="bars">订单</van-tabbar-item>
    <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('home')
</script>

<style scoped></style>
