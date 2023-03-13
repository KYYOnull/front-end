<template>
  <div>购物车</div>
  <div>
    全选 由于绑定是双向的 input选定变为true时 isAllSelected也是 true status也是 true
    change 能够监听到input变化，实现li与 isAllSelected同步
    <input v-model="shopStore.isAllSelected" 
        type="checkbox" 
        @change="selectedChange"
        name="">
    
  </div>
  <div>
    <div v-for="item,index in shopStore.goods" :key="index">
        对于所有li input 每次change都判断是否所有li 都被选中
        <input @change="singleChange"
            v-model="item.select" 
            type="checkbox">
        商品名： {{ item.name }} ===
        商品价格： {{ item.price }} ===
        <button @click="updateAmount(index, 1)">+</button>
        {{ item.num || 1 }}
        <button @click="updateAmount(index, -1)">-</button>
        小计{{ item.price* (item.num || 1) }}
    </div>
  </div>
  <div>
    总价: {{ shopStore.getTotal }}
  </div>

  <div>
    <button @click="userStore.age+=1">age+1</button>
      {{ userStore.age }}
    <button>age-1</button>
  </div>
</template>

<script setup lang="ts">
import { useShopStore } from './store/shop';
import { useUserStore } from './store/user';

const shopStore= useShopStore();
const userStore= useUserStore();

const updateAmount= (index: number, num: number)=>{
    // 我们不希望 vue文件中有逻辑的计算，只要有业务分发
    shopStore.updateAmount(index, num);
}

const selectedChange= ()=>{
  // 事件使得组件能控制status 当 CheckBox变化时，触发
    shopStore.selectedChange()
}

const singleChange= ()=>{
    shopStore.singleChange();
}
</script>

<style lang="scss" scoped>
</style>
