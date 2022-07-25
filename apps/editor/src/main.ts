import { createApp } from 'vue'
import App from './App.vue'
import { loadScript } from './utils';

loadScript('lc-image.umd.js').then(() => {
  console.log((window as any).LcImage)
})

const app = createApp(App)
app.mount('#app')
