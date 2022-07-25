import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/editor/index.vue')
  }
]

export default routes
