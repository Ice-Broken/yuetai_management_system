<template>
  <el-form label-width="70px">
    <el-form-item label="负责人">
      <el-input type="text" v-model="name" placeholder="请填写 您的姓名"></el-input>
    </el-form-item>
    <el-form-item label="采购商">
      <el-input type="text" v-model="company_name_ch" placeholder="请填写 采购商中文名"></el-input>
      <el-input type="text" v-model="company_name_en" placeholder="请填写 采购商英文名"></el-input>
    </el-form-item>
    <el-form-item label="所属行业">
      <el-select v-model="subject" placeholder="请选择">
        <el-option v-for="item in subjects" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="联系人">
      <el-input type="text" v-model="source" placeholder="请填写 采购商来源"></el-input>
      <el-input type="text" v-model="contact_name" placeholder="请填写 联系人姓名"></el-input>
      <el-input type="text" v-model="position" placeholder="请填写 联系人职位"></el-input>
      <el-input type="text" v-model="tel" placeholder="请填写 联系人电话"></el-input>
      <el-input type="text" v-model="email" placeholder="请填写 联系人电邮"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" rows="4" v-model="remark" placeholder="请填写 备注"></el-input>
    </el-form-item>
    <el-button type="primary" icon="el-icon-check" @click="create">添加采购商</el-button>
  </el-form>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import createBuyer from "@/modules/teacher/create-buyer";

let company_name_ch = ref("");
let company_name_en = ref("");
let source = ref("");
let contact_name = ref("");
let position = ref("");
let tel = ref("");
let name = ref("");
let email = ref("");
let remark = ref("");
let subject = ref("其他");
let subjects = ref([
  { label: "礼品" },
  { label: "日用消费品" },
  { label: "电子及家电" },
  { label: "纺织服装" },
  { label: "家居装饰品" },
  { label: "办公、箱包及休闲用品" },
  { label: "五金工具" },
  { label: "照明" },
  { label: "建材" },
  { label: "机械" },
  { label: "鞋" },
  { label: "车辆及配件" },
  { label: "医药及医疗保健" },
  { label: "能源" },
  { label: "化工产品" },
  { label: "食品" },
  { label: "农产品" },
  { label: "其他" },
]);

function create() {
  // let telTest = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  let nullTest = /^[\s\S]*.*[^\s][\s\S]*$/;
  let isCreate = nullTest.test(company_name_ch.value);
  if (isCreate) {
    createBuyer({
      name: name.value,
      company_name_ch: company_name_ch.value,
      company_name_en: company_name_en.value,
      subject: subject.value,
      source: source.value,
      contact_name: contact_name.value,
      position: position.value,
      tel: tel.value,
      email: email.value,
      remark: remark.value,
    }).then((res) => {  
      ElMessage({
        message: `管理员成功添加一条关于 ${company_name_ch.value} 的活动`,
        type: "success",
      });
      // name.value = "";
      // tel.value = "";
      // dtm.value = "";
    });
  } else {
    ElMessage.warning({
      message: "请按照正确格式请填写全部内容",
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