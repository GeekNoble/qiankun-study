import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
const postcssPluginNamespace = require('postcss-plugin-namespace')
const postcssPresetEnv = require("postcss-preset-env")
console.log(fileURLToPath(new URL('./src', import.meta.url)))



// https://vitejs.dev/config/
export default ({ mode }) => {

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  console.log(process.env.VITE_PUBLIC_PATH)
  return defineConfig({
    plugins: [
      vue(),
      qiankun('vue-app', { // 微应用名字，与主应用注册的微应用名字保持一致
        useDevMode: true
      })
    ],
    base: process.env.VITE_PUBLIC_PATH,
    css: {
      postcss: {
        plugins: [
          postcssPluginNamespace('.app', {
            ignore: [
              'html', /body/, ':root', '*, *::before, *::after', 'el-form-item'
            ]
          }),
          postcssPresetEnv()
        ]
      }
    },
    server: {
      port: '5174',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '_': 'http://localhost:5174/src'
      }
    }
  })
} 

