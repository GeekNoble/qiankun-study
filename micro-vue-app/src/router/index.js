import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let baseUrl = qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-vue' : '/';
console.log(baseUrl)
const router = createRouter({
  // history: createWebHistory(baseUrl),
  history: createWebHashHistory(baseUrl),
  routes: [{
      path: baseUrl,
      component: () => import("../views/Index.vue")
  }, {
    path: baseUrl + 'page1',
    name: 'page1',
    component: () => import('../views/Page1.vue')
  }]
})

export default router
