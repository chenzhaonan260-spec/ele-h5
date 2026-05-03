import { createRouter, createWebHistory } from 'vue-router'
import Tabbar from '@/views/tabs/Tabbar.vue'
import Home from '@/views/tabs/home/Home.vue'
import Mall from '@/views/tabs/mall/Mall.vue'
import Message from '@/views/tabs/message/Message.vue'
import My from '@/views/tabs/my/My.vue'

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
        { name: 'mall', path: '/mall', component: Mall },
        { name: 'message', path: '/message', component: Message },
        { name: 'my', path: '/my', component: My },
      ],
    },
  ],
})

export default router
