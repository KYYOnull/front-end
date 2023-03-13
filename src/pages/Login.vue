<template>
  <div class="login-box">
    <a-card style="width: 300px">
      <h2 class="title">千锋客服平台</h2>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="login"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import TIMCore from "../store/plugin/TIM-plugin/TIM-core";
import { genTestUserSig } from "./../../debug";
import { useTIMStore } from "./../store/chat";

const formState = reactive({
  username: "",
  password: "",
});

const router = useRouter();

const TIMStore = useTIMStore();

const login = async () => {
  console.log("登录了吗");
  /**
   * 生成密钥
   * 要注意源码里面有个bug
   * 不能使用es6的方式
   */
  const { userSig } = genTestUserSig({
    userID: formState.username,
    SDKAppID: 1400778576,
    secretKey:
      "3c06b81b3c1fb94b87abb05182f19748b1e122eaacc0eec6464876056e7c406b",
  });
  await TIMStore.timCore.timLogin({
    userSig,
    userID: formState.username
  });
  router.push("/home");
};
</script>

<style>
.login-box {
  background-color: #2f3447;
  width: 100%;
  height: 100vh;

  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
