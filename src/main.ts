import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


// 把这个根组件 传入到createApp方法 去创建 Vue3的应用 挂载在 id为app的dom元素上
createApp(App).mount('#app')
