
<template>
  <div class="loginbox">
    <div class="container">
      <el-input class="input" v-model="name" placeholder="用户账号" />
      <el-input class="input" v-model="tel" placeholder="用户电话号码" />
      <el-input class="input" type="password" v-model="password" placeholder="用户密码" />
      <el-button class="input" :disabled="!disabled" type="primary" @click="create">添加</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import createStudent from "@/modules/student/create-student";
let name = ref("");
let tel = ref("");
let stuClass = ref("");

// 将成绩表和学生绑定
function create() {
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate =
    nullTest.test(name.value) &&
    nullTest.test(tel.value);
  let id = "s" + new Date().getTime();
  if (isCreate) {
    createStudent({
      name: name.value,
      sex: sex.value,
      class: stuClass.value,
      tel: tel.value,
    }).then((res) => {
      ElMessage({
        message: `成功添加学生:${name.value},学号：${res.id}`,
        type: "success",
      });
      name.value = "";
      tel.value = "";
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
.loginbox {
  width: 600px;
  height: 260px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 0px 0px 7px black;
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
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
  ;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  .input {
    width: 400px;
    margin-top: 20px;
  }
}
</style>