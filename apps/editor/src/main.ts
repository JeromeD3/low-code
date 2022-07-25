import { createApp } from 'vue'
import App from './App.vue'
import { Project } from '@zheqi/shared'
import { loadScript } from './utils'

console.log(Project.create())

loadScript('lc-image.umd.js').then(() => {
  console.log((window as any).LcImage)
})

const app = createApp(App)
app.mount('#app')
