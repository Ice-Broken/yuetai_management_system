<template>
  <div class="loginbox">
  <el-form>
    <el-form-item label="管理员账号">
      <el-input v-model="user" clearable placeholder="填写管理员账号"></el-input>
    </el-form-item>
    <el-form-item label="管理员密码">
      <el-input v-model="password" clearable placeholder="填写管理员密码"></el-input>
    </el-form-item>
    <el-button type="primary" icon="el-icon-check" @click="updata">确认修改</el-button>
  </el-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "@/modules/api";
import readStudent from "@/modules/common/read-user";
let router = useRouter();
let user = ref("");
let password = ref("");
let test = /^[\s\S]*.*[^\s][\s\S]*$/;

readStudent({ col: "admin", id: localStorage.admin }).then((res) => {
  user.value = res.res[0].id;
  password.value = res.res[0].password;
});

function updata() {
  let isUpdata = test.test(user.value) && test.test(password.value);
  api(
    `UPDATE admin SET id='${user.value}', password='${password.value}' where id='${localStorage.admin}';`
  ).then((res) => {
    localStorage.clear();
    router.replace('/logn')
  });
}
</script>
<style scoped lang='scss'>
.loginbox{
	width: 650px;
	height: 260px;
	border: 1px solid black;
	border-radius: 3px;
	box-shadow: 0px 0px 7px black;
	position: absolute;
	top: 45%;
	left:60%;
	transform: translate(-50%,-50%);
}
.el-form-item {
  width: 400px !important;
  display: flex;
  margin: 0px auto;
  margin-top: 30px;
}
.el-button {
  width: 400px;
  margin: 0px auto;
  margin-top: 30px;
  display: block;
}
</style>