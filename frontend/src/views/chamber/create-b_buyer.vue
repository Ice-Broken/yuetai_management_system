<template>
  <el-form label-width="70px">
    <el-form-item label="大采购商">
        <el-input type="text" v-model="bbuyer_name_ch" placeholder="填写 大采购商中文名"></el-input>
        <el-input type="text" v-model="bbuyer_name_en" placeholder="填写 大采购商英文名"></el-input>
        <el-input type="text" v-model="address" placeholder="填写 大采购商地址"></el-input>
        <el-input type="text" v-model="fax" placeholder="填写 大采购商传真"></el-input>
    </el-form-item>
    <el-form-item label="联系人">
      <el-input type="text" v-model="contact_name" placeholder="填写 联系人姓名"></el-input>
      <el-input type="text" v-model="position" placeholder="填写 联系人职位"></el-input>
      <el-input type="text" v-model="tel" placeholder="填写 联系人电话"></el-input>
      <el-input type="text" v-model="email" placeholder="填写 联系人电邮"></el-input>
    </el-form-item>
    <!-- <el-form-item label="最后时间">
          <el-date-picker  type="datetime" v-model="time" placeholder="填写 最新跟进时间" 
          format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"> </el-date-picker>
    </el-form-item> -->
    <el-form-item label="跟进情况">
      <el-input type="textarea" rows="6" v-model="remark" placeholder="请在此填写跟进情况"></el-input>
    </el-form-item>

    <el-button type="primary" icon="el-icon-check" @click="create">添加大采购商</el-button>
  </el-form>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import createBBuyer from "@/modules/teacher/create-b_buyer";

let bbuyer_name_ch = ref("");
let bbuyer_name_en = ref("");
let address = ref("");
let fax = ref("");
let contact_name = ref("");
let position = ref("");
let tel = ref("");
let email = ref("");
let remark = ref("");

function create() {
  // let telTest = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate = nullTest.test(bbuyer_name_ch.value);
  if (isCreate) {
    createBBuyer({
      bbuyer_name_ch: bbuyer_name_ch.value,
      bbuyer_name_en: bbuyer_name_en.value,
      address: address.value,
      fax: fax.value,
      contact_name: contact_name.value,
      position: position.value,
      tel: tel.value,
      email: email.value,
      remark: remark.value,
    }).then((res) => {
      ElMessage({
        message: `成功添加一条新的大采购商：${bbuyer_name_ch.value} 的记录`,
        type: "success",
      });
      // name.value = "";
      // tel.value = "";
      // dtm.value = "";
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