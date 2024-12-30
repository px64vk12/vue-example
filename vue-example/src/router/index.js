import { createRouter, createWebHistory } from 'vue-router'
import page1 from '@/views/main.vue'
import page2 from '@/views/second.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
    },
  ],
})

export default router
