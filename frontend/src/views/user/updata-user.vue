<template>
  <div class="loginbox">
    <el-form label-width="80px">
    <el-form-item label="用户账号">
      <el-input type="text" v-model="name" placeholder="填写用户账号"></el-input>
    </el-form-item>
    <el-form-item label="用户电话">
      <el-input type="text" v-model="tel" placeholder="填写用户电话号码" maxlength="13"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
      <el-input type="text" v-model="tel" placeholder="填写用户密码" maxlength="13"></el-input>
    </el-form-item>
    <el-button type="primary" icon="el-icon-check" @click="create">确认修改</el-button>
  </el-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import api from "@/modules/api";
import readUser from "@/modules/common/read-user";
let route = useRoute();
let isStudent = ref(localStorage.id == "student");
let id = ref("");
let name = ref("");
let tel = ref("");
let password = ref("");

readUser({
  col: "student",
  id: route.query.id,
}).then((res) => {
  let data = res.res[0];
  name.value = data.name;
  id.value = data.id;
  tel.value = data.tel;
  sex.value = data.sex;
  stuClass.value = data.class;
  password.value = data.password;
});

function create() {
  let telTest = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate =
    nullTest.test(name.value) &&
    nullTest.test(tel.value) &&
    telTest.test(tel.value);
  if (isCreate) {
    api(
      ` UPDATE student SET name='${name.value}',tel='${tel.value}',sex='${sex.value}',class='${stuClass.value}',password='${password.value}' WHERE id='${id.value}';`
    ).then((res) => {
      if (res.res) {
        ElMessage({
          message: `修改成功`,
          type: "success",
        });
      } else {
        ElMessage({
          message: `修改失败`,
          type: "error",
        });
      }
    });
  } else {
    ElMessage.warning({
      message: "请按照正确格式填写全部内容",
      type: "warning",
    });
  }
}
</script>
<style scoped lang='scss'>
.loginbox{
	width: 600px;
	height: 300px;
	border: 1px solid black;
	border-radius: 3px;
	box-shadow: 0px 0px 7px black;
	position: absolute;
	top: 45%;
	left:60%;
	transform: translate(-50%,-50%);
}

.el-form-item {
  width: 400px;
  margin: 0px auto;
  margin-top: 30px;
}

.el-button {
  width: 400px;
  margin: 0px auto;
  margin-top: 30px;
  display: block;
}

.el-select {
  margin-top: 0px !important;
  margin-left: 0px !important;
}
</style>