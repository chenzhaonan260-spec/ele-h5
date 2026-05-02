import { createRouter, createWebHistory } from 'vue-router'
import Tabbar from '@/views/tabs/Tabbar.vue'
import Home from '@/views/tabs/home/Home.vue'
import My from '@/views/tabs/my/My.vue'
import Order from '@/views/tabs/order/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabbar,
      children: [
        { name: 'home', path: '/home', component: Home },
        { name: 'order', path: '/order', component: Order },
        { name: 'my', path: '/my', component: My },
      ],
    },
  ],
})

export default router
