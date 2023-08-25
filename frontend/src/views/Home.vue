<template>
  <component :is="nav"></component>
  <div class="title">
    {{ title }}
    <div class="back" title="点击退出系统" @click="back">
      <i class="el-icon-back"></i>
     退出系统 
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import admin from "@/components/nav-admin";
import teacher from "@/components/nav-staff";
import user from "@/components/nav-user";

import { useRouter } from "vue-router";

let nav =
  localStorage.id == "admin"
    ? admin
    : localStorage.id == "user"
    ? teacher
    : user;
let router = useRouter();
let title =
  localStorage.id == "admin"
    ? "当前身份：管理员"
    : localStorage.id == "user"
    ? "当前身份：用户"
    : "当前身份：员工";
let name = localStorage.user;
if (name == undefined) {
  router.replace("/logn");
}
document.body.style.paddingLeft = "200px";

onUnmounted(() => {
  document.body.style.paddingLeft = "0px";
  document.body.classList.add("logn");
});
function back() {
  localStorage.clear();
  router.replace("logn");
}
</script>
<style scoped>
.title {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #545c64;
  color: white;
}
.back {
  float: right;
  font-size: 14px;
  margin-right: 20px;
  color: white;
}
.number:hover {
  font-size: 32px;
	color: blue;
	cursor: pointer;
}
</style>
