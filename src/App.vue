<template>
  <div>
    hello this is homepage of pinia
    {{ userStore.age }}
    <button @click="ageAdd"></button>
  </div>
  <div>
    计算属性
    {{ userStore.doubelAge }}
    {{ userStore.getNameAndDoubelAge }}
    {{ userStore.getNameAndAge }}
  </div>
  <div>
    计算属性传参
    {{ userStore.getAddAge(1) }}
  </div>
  <div @click="updateName">
    修改name {{ userStore.name }}

  </div>
  <div @click="updateName2">
    异步修改name {{ userStore.name }}
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from './store/user';

  const userStore= useUserStore()

  const ageAdd= ()=>{
    userStore.age+= 1;
  }

  const updateName= ()=>{
    userStore.saveName('demean');
    console.log(userStore.name);
  }

  const updateName2= ()=>{
    userStore.saveName2('demean2');
    console.log(userStore.name);
  }

</script>

<style lang="scss" scoped>
</style>
