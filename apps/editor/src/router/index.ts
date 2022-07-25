import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

// 遍历vite提供的接口下的所有路由文件，依次放入routes
const modules: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })
for (const path in modules) {
  routes.push(...modules[path].default)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, _, next) => {
// })

export default router
