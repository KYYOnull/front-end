import { createPinia } from 'pinia'
import { persistedstate } from './plugin/test/persistedstate'

const pinia= createPinia()
// 注册并使用 pinia插件
pinia.use(persistedstate)

export default pinia