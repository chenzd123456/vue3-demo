// 引入'node:url'模块内的'fileURLToPath'方法
import { fileURLToPath } from 'node:url'
// 引入'vite'模块内的'mergeConfig'方法
import { mergeConfig } from 'vite'
// 引入'vitest/config'模块内的'configDefaults'和'defineConfig'方法
import { configDefaults, defineConfig } from 'vitest/config'
// 引入'./vite.config'文件
import viteConfig from './vite.config'

// 输出一个合并了'viteConfig'和'test'属性的对象
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
