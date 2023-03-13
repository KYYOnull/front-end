import { PiniaPluginContext } from "pinia";

// 插件可以监听到所有注册的 store上下文，并拿到state的变化

export function persistedstate(context: PiniaPluginContext){
    console.log('pinia 插件成功初始化', context.store)
    const currentState= JSON.parse(localStorage.getItem(context.store.$id) || '{}')
    context.store.$patch(currentState) 
    console.log('pinia 插件初始化完成', context.store)
    /**
     * 每次 state变化 保存在 localstorage中
     * 每次state 触发 subscribe
     * 参数： 当前被修改的store 上下文 状态
     */ 
    context.store.$subscribe((store, state)=>{
        console.log('store:', store, 'state:', state);
        localStorage.setItem(store.storeId, JSON.stringify(state))
    }, {
        detached: true
    })
    console.log('回调发生')
}