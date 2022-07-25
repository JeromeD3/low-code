import { createApp } from 'vue'
import App from './App.vue'
import { Project, IMaterial } from '@zheqi/shared'
import { loadScript } from './utils'

import router from '@/router/index'
import { createPinia } from 'pinia'

import 'uno.css'
import '@unocss/reset/tailwind.css'

// console.log(Project.create())

const materialList: IMaterial[] = [
  {
    id: 1,
    type: 'component',
    category: {
      name: '基础组件'
    },
    version: '0.0.1',
    source: '/lc-image.0.0.1.umd.js',
    name: 'LcImage',
    title: '图片',
    thumbnail: '',
    data: [
      {
        version: '0.0.1',
        source: '/lc-image.0.0.1.umd.js'
      }
    ]
  }
]

Promise.all(materialList.map((material) => loadScript(material.source))).then(() => {
  const app = createApp(App)
  materialList.forEach((material) => {
    const { render, editorProps } = (window as any).LcImage
    app.component(material.name, render)
  })
  app.use(router).use(createPinia())
  app.mount('#app')
})
