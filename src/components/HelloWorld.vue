<template>
  <div class="greetings">
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="#" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <h2 ref="title">北京</h2>
    <!-- 变量名 -->

    <h2>当前用户：年龄{{ person.age }} 姓名{{ person.name }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}, {{ nl }}</h2>
    <h2>地址：{{ address }}</h2>
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>

    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeBrand">换车</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="showLog">点我输出title2这个元素</button>

    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame"> 改动第一个游戏 </button>

  </div>
</template>

<!-- 在<script>标签添加setup 里面的内容就相当于setup(){}函数，而且还return返回 -->
<script lang="ts">

export default {
  // 之前的<script>用来配置组件名
  name: 'Person',

  beforeCreate() {
    console.log('beforeCreate')
  }, // setup执行时机比beforeCreat更快  Vue3中，setup是最快执行的函数
  // 因此不能读取外界变量
  // setup() {
  //   // 定义的变量和方法，给模板使用 return到模板中 才可以使用
  //   return { name, age, tel, changeName, changeAge, showTel }
  //   // 也可以返回函数，直接指定渲染的内容，覆盖掉<template>模板的内容 jsx
  //   // return () => '哈哈'
  // }
}
</script>


<script setup lang="ts" name="Person">

import { ref, toRefs, reactive, toRef } from 'vue'
console.log('setup 所有变量和函数');

let a = 666
let tel = '13888888888'
let address = '北京昌平区宏福苑·宏福科技园'
// let car = reactive({
//   brand:'奔驰',price:100
// }) // Proxy实例 target属性就是存放着对象的属性值

let car = ref({ // 用ref定义对象
  brand: '奔驰', price: 100
})

let games = reactive([
  { id: 'kyyo-1', name: '原神' },
  { id: 'kyyo-2', name: '三国杀' },
  { id: 'kyyo-3', name: '崩铁' },
])

let person = reactive({
  name: '张三',
  age: 18
})
let { name, age } = toRefs(person) // 响应式解构  依然会联动改变对象的属性值
// 输出name和person.name，发现它们的值是一样的，会联动修改
// toRefs是把整个对象的所有属性 都变成了响应式
// name和age的值是ref类型，其value值 指向的是person.name和person.age
let nl = toRef(person, 'age')

let title = ref() // 存储ref标记的内容 用ref类型先把ref标签保存起来，然后再使用ref元素

function changeName() {
  name.value = 'zhang-san';
  console.log(name, name.value); // person.name
}
function changeAge() {
  age.value += 1
  console.log(age, age.value); // person.age
}

function changeBrand() {
  car.value.brand = '奥迪'
  console.log(car.value.brand);
  car.value = { brand: '奥拓', price: 1 }
}
function changePrice() {
  car.value.price += 10
  console.log(car.value)
}
function changeFirstGame() {
  games[0].name = '原来你也玩原神'
  Object.assign(games, { brand: '奥拓', price: 1 })
  // 将后面的对象属性 合并到第一个对象里
  console.log(games);

}
function showLog() {
  console.log(title.value)
}

// 子组件 属性的对外暴露
defineExpose({car,person,title})
</script>



<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
