<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </WelcomeItem>

  <div class="human">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{ fullName }}</span> <br>
    <button @click="changeFullName">将全名改为li-si</button> <br>
  </div>

</template>

<script setup lang="ts" name="Human">

import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'

import { ref, computed } from 'vue'
import { type PersonInter } from '@/types'
// import引入具体的值，它是直接使用的，但是引入ts接口不行，它是是一个类型，不能当作值来使用
// ts接口约束生效，如果Person对象里没有包含id、name、age这三个属性，或者单词拼错，它就会提出警告提示
let per: PersonInter = { id: '111', name: 'kyyo', age: 24 }
let personList: Array<PersonInter> = [ // 数组的泛型
  { id: 'asyud7asfd01', name: '张三', age: 60 },
  { id: 'asyud7asfd02', name: '李四', age: 18 },
  { id: 'asyud7asfd03', name: '王五', age: 5 }
]

let firstName = ref('zhang') // 双向绑定的后台变量
let lastName = ref('san')

let fullName = computed(() => {
  // 只要它依赖的变量没有发生变化，它就不会重新计算
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
})

// 可读可写的computed属性，那就不要传回调函数，而是传一个对象
let fullName2 = computed({
  get() { // 当fullName被读取时，get调用
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) { // 当fullName被修改时，set调用，收到修改的值'li-si'
    const [str1, str2] = val.split('-')
    firstName.value = str1 // 变更计算依赖
    lastName.value = str2
  }
})
function changeFullName() {
  fullName2.value = 'li-si' // 触发set 
}

</script>