import 'vant/lib/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 移动端样式适配
const rootValue = 16

// 设计稿宽度
const rootWidth = 390

// 设备宽度
const deviceWidth = document.documentElement.clientWidth

document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
