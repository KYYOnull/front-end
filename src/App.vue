<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 自定义组件 -->
      <!-- ref标签 不只是用在html元素，还用在组件标签上 -->
      <!-- 在父组件App里 对子组件Person标签 使用ref，获取的是子组件所有暴露出的示例 -->
      <Person msg="You did it!" ref="child" />
      <button @click="showLog">测试</button>
    </div>
  </header>

  <main>
    <Human />
  </main>

</template>

<script setup lang="ts" name="App">

import Person from './components/HelloWorld.vue'
import Human from './components/TheWelcome.vue'
import { ref } from 'vue'

let child = ref()
function showLog() {
  console.log(child.value) // person 暴露出的所有变量
}

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
