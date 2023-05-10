// 导入模块中的两个对象
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite' // 导入 defineConfig 函数
import vue from '@vitejs/plugin-vue' // 导入 vue 插件

// 导出默认配置对象
export default defineConfig({
  plugins: [vue()], // 配置插件，vue()返回一个插件对象
  resolve: {
    alias: {
      // 配置对 "@/" 路径的别名，使用 fileURLToPath 和 URL 来获取项目根目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    loaderOptions: {
      sass: { // 配置 sass 的附加数据
        additionalData: `@import "@/styles/main.scss";`
      }
    }
  },
})
