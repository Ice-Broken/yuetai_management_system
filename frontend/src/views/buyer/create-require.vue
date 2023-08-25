<template>
  <el-form label-width="70px">
    <el-form-item label="负责人">
      <el-row>
        <el-col :span="7">
          <el-input type="text" v-model="name" placeholder="admin"></el-input>
        </el-col>
        <el-col :span="1">
          <el-date-picker v-model="date" type="date" placeholder="选择需求日期" format="YYYY-MM-DD" value-format="YYYY-MM-DD"> </el-date-picker>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="届数">
      <el-select v-model="sex" placeholder="请选择">
        <el-option v-for="item in sexs" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属行业">
      <el-select v-model="subject" placeholder="请选择">
        <el-option v-for="item in subjects" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="公司名称">
      <el-input type="text" v-model="company_name_ch" placeholder="填写 公司中文名称"></el-input>
      <el-input type="text" v-model="company_name_en" placeholder="填写 公司英文名称"></el-input>
    </el-form-item>
    <el-form-item label="联系人">
      <el-input type="text" v-model="contact_name" placeholder="填写 联系人姓名"></el-input>
      <el-input type="text" v-model="email" placeholder="填写 联系人电话"></el-input>
      <el-input type="text" v-model="tel" placeholder="填写 联系人电邮"></el-input>
    </el-form-item>
    <el-form-item label="需求详情">
      <el-input type="text" v-model="prodcts" placeholder="填写 采购产品"></el-input>
      <el-input type="text" v-model="amount" placeholder="填写 意向采购金额/数量"></el-input>
      <el-input type="text" v-model="require" placeholder="填写 硬性要求"></el-input>
      <el-input type="text" v-model="link" placeholder="填写 报名链接"></el-input>
    </el-form-item>

    <el-button type="primary" icon="el-icon-check" @click="create">添加需求</el-button>
  </el-form>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import createRequire from "@/modules/teacher/create-require";

let name = ref("");
let date = ref("");
let company_name_ch = ref("");
let company_name_en = ref("");
let contact_name = ref("");
let tel = ref("");
let email = ref("");
let prodcts = ref("");
let amount = ref("");
let require = ref("");
let link = ref("");

let time = ref(new Date().getTime());
let sex = ref("134");
let subject = ref("其他");
let sexs = ref([
  { label: "138" },
  { label: "137" },
  { label: "136" },
  { label: "135" },
  { label: "134" },
]);
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
  let isCreate = nullTest.test(name.value) && nullTest.test(tel.value);
  if (isCreate) {
    createRequire({
      name: name.value,
      sex: sex.value,
      subject: subject.value,
      time: time.value,
      company_name_ch: company_name_ch.value,
      company_name_en: company_name_en.value,
      contact_name: contact_name.value,
      tel: tel.value,
      email: email.value,
      prodcts: prodcts.value,
      amount: amount.value,
      require: require.value,
      link: link.value,
      date: date.value,
    }).then((res) => {
      ElMessage({
        message: `${name.value} 成功添加一条关于 ${prodcts.value} 的需求`,
        type: "success",
      });
      // name.value = "";
      // tel.value = "";
      // time.value = "";
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