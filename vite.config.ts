import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入插件，解决setup name问题
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 自动导入vue3语法糖
import AutoImport from 'unplugin-auto-import/vite'

const createAutoImport = () => {
  return AutoImport({
    dts: 'src/auto-imports.d.ts',
    imports: ['vue']
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    createAutoImport()
  ]
})
