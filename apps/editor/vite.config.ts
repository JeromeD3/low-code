import { URL, fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss()
  ],
  define: {
    // 关闭选项api，降低打包体积
    __VUE_OPTIONS_API__: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd()).VITE_APP_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}))
