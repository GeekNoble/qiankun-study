import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
// const postcssPluginNamespace = require('postcss-plugin-namespace')
// const postcssPresetEnv = require("postcss-preset-env") 
// import postcssPresetEnv from 'postcss-preset-env'
// console.log(postcssPluginNamespace)
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue-app', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       // postcssPluginNamespace('#app-container', {
  //       //   ignore: [
  //       //     'html', /body/, 'span', 'el-form-item'
  //       //   ]
  //       // }),
  //       postcssPresetEnv()
  //     ]
  //   }
  // },
  server: {
    port: '5174',
  }
})
