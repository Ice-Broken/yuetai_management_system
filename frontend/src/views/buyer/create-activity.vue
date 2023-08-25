<template>
  <el-form label-width="70px">
    <el-form-item label="负责人">
          <el-input type="text" v-model="name" placeholder="jack"></el-input>
    </el-form-item>
    <el-form-item label="总部人员">
          <el-input type="text" v-model="head_name" placeholder="焦灼"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
          <el-date-picker v-model="dtm" type="datetime" placeholder="选择活动日期" 
          format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"> </el-date-picker>
    </el-form-item>
    <el-form-item label="届数">
      <el-select v-model="sex" placeholder="请选择">
        <el-option v-for="item in sexs" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="采购商">
      <el-input type="text" v-model="company_name_ch" placeholder="填写采购商公司中文名"></el-input>
    </el-form-item>
    <el-form-item label="供应商">
      <el-input type="text" v-model="supply_company_name" placeholder="填写供应商公司中文名"></el-input>
    </el-form-item>
    <el-form-item label="采购产品">
      <el-input type="text" v-model="prodcts" placeholder="填写采购产品"></el-input>
    </el-form-item>
    <el-form-item label="对接途径">
      <el-select v-model="contact_method" placeholder="请选择">
        <el-option v-for="item in contact_methods" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-form-item>

    <el-button type="primary" icon="el-icon-check" @click="create">添加活动</el-button>
  </el-form>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import createActivity from "@/modules/teacher/create-activity";

let name = ref("");
let head_name = ref("");
let dtm = ref("");
let company_name_ch = ref("");
let supply_company_name = ref("");
let prodcts = ref("");
let time = ref("");

let sex = ref("134");
let contact_method = ref("其他");
let sexs = ref([
  { label: "138" },
  { label: "137" },
  { label: "136" },
  { label: "135" },
  { label: "134" },
]);
let contact_methods = ref([
  { label: "视频" },
  { label: "微信" },
  { label: "电邮" },
  { label: "其他" },
]);

function create() {
  // let telTest = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate = nullTest.test(name.value) && nullTest.test(company_name_ch.value);
  if (isCreate) {
    createActivity({
      name: name.value,
      sex: sex.value,
      head_name: head_name.value,
      company_name_ch: company_name_ch.value,
      supply_company_name: supply_company_name.value,
      prodcts: prodcts.value,
      contact_method: contact_method.value,
      dtm: dtm.value,
      time: time.value,
    }).then((res) => {
      ElMessage({
        message: `${name.value} 成功添加一条关于 ${company_name_ch.value} 的活动`,
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