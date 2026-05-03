<template>
  <RouterView />
  <van-tabbar v-model="active" class="tab-bar-container">
    <van-tabbar-item name="home">首页</van-tabbar-item>
    <van-tabbar-item name="mall">商城</van-tabbar-item>
    <van-tabbar-item name="add" icon="add-square" color="black"></van-tabbar-item>
    <van-tabbar-item name="message">消息</van-tabbar-item>
    <van-tabbar-item name="my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const router = useRouter()
const active = ref(route.name)
watch(active, (newValue) => {
  router.push({
    name: newValue,
  })
})
</script>

<style scoped>
.van-tabbar-item {
  font-size: 16px;
}
</style>
