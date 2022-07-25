import { createApp } from 'vue'
import App from './App.vue'
import { Project, IMaterial } from '@zheqi/shared'
import { loadScript } from './utils'

console.log(Project.create())

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
    data: [
      {
        version: '0.0.1',
        source: '/lc-image.0.0.1.umd.js'
      }
    ]
  }
]

loadScript('lc-image.umd.js').then(() => {
  console.log((window as any).LcImage)
  const { render, editorProps } = (window as any).LcImage
  const app = createApp(App)
  app.component('LcImage', render)
  app.mount('#app')
})
