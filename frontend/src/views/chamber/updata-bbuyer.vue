<template>
  <el-form label-width="100px">
    <el-form-item label="大采购商名称">
      <el-input type="text" v-model="route.query.id" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="跟进情况">
      <el-input type="textarea" rows="6" v-model="remark" placeholder="填写新的跟进情况" :disabled="isStudent"></el-input>
    </el-form-item>
    <el-button type="primary" icon="el-icon-check" @click="create">确认修改</el-button>
  </el-form>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import api from "@/modules/api";
import readUser from "@/modules/common/read-bbuyer";
let route = useRoute();
let isStudent = ref(localStorage.id == "student");
let bbuyer_name_ch = ref("");
let remark = ref("");
let id = ref("");

readUser({
  col: "prod_bbuyer",
  id: route.query.id,
}).then((res) => {
  let data = res.res[0];
  bbuyer_name_ch.value = data.bbuyer_name_ch;
  remark.value = data.remark;
});

api(`SELECT DISTINCT * FROM prod_bbuyer`).then((res) => {
    data.value = res.res;
    max.value = res.res.length;
});


function create() {
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate =
    nullTest.test(remark.value);
  if (isCreate) {
    api(
      `UPDATE prod_bbuyer SET remark='${remark.value}', time = CURRENT_TIMESTAMP WHERE bbuyer_name_ch='${bbuyer_name_ch.value}';`
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