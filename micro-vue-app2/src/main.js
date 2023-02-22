import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { Button, message, Space, DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import { useCounterStore } from './stores/counter'

import './assets/main.css'

const initQianKun = () => {
  renderWithQiankun({
      // 当前应用在主应用中的生命周期
      // 文档 https://qiankun.umijs.org/zh/guide/getting-started#

      mount(props) {
          render(props.container)
          //  可以通过props读取主应用的参数：msg
          // 监听主应用传值
          props.onGlobalStateChange((res) => {
              // store.count = res.count
              useCounterStore().count = res.count
              console.log(res.count, 'globalStatus改变')
          })
      },
      bootstrap() { },
      unmount() { },
  })
}

const render = (container) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地

  console.log(container, '看看容器')
  const appDom = container ? container.querySelector('#app') : "#app"
  const app = createApp(App)

  app.use(Button)
  app.use(Space)
  app.use(DatePicker)
  app.use(createPinia())
  app.config.globalProperties.$message = message


  app.use(router)
  app.mount(appDom)
}
console.log(import.meta.env.VITE_PUBLIC_PATH, 'kkk')

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()