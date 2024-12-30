import { createRouter, createWebHistory } from 'vue-router'
import page1 from '@/views/main.vue'
import page2 from '@/views/page2.vue'
import page3 from '@/views/page3.vue'

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
    {
      path: '/page3',
      name: 'page3',
      component: page3,
    },
  ],
})

export default router
