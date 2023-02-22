import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let baseUrl = qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-vue' : '/';
// import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHashHistory(baseUrl),
  routes: [
    {
      path: baseUrl,
      name: 'home',
      component: HomeView
    },
    {
      path: baseUrl + '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
