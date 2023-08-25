<template>
  <div style="width: 98%; margin: 0px auto; margin-top: 10px">
    <el-alert
      v-if="student.length"
      :title="`${studentName}先生：您有${student.length}一个酒店订单，请及时联系我们`"
      type="warning"
    >
    </el-alert>
    <el-collapse style="margin-top: 10px">
      <el-collapse-item
        :title="item.title"
        v-if="tableData.length"
        v-for="(item, index) in tableData"
        :key="item.title + index"
      >
        <div class="mes-text">{{ item.text }}</div>
      </el-collapse-item>
      <!-- 不及格提示 -->
      <el-collapse-item
        :title="`关于${item.key}有一个酒店订单`"
        v-if="student.length && isStudent && isWatch == 'true'"
        v-for="(item, index) in student"
        :key="item.key + index"
      >
        <div class="mes-text">
          {{ studentName }}先生：
          <p>您的{{ item.key }}酒店编号为{{ item.value }}分。请联系我们</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from "vue";
import api from "@/modules/api";
let tableData = ref("");
let student = ref([]);
let isStudent = ref(localStorage.id == "student");
let studentName = ref(localStorage.student);
let isWatch = ref("");
api(`select * from isshow`).then(res => {
  isWatch.value = res.res[0].watch;
});
if (localStorage.id == "student") {
  api(`select * from achievement where stucode='${localStorage.student}';`).then(res => {
    studentName.value = res.res[0].name;
    tableData.value = res.res;
    let data = res.res[0];
    if (+data.vue < 60) {
      student.value.push({
        key: " ",
        value: data.vue,
      });
    }
    if (+data.node < 60) {
      student.value.push({
        key: " ",
        value: data.node,
      });
    }
    if (+data.marx < 60) {
      student.value.push({
        key: " ",
        value: data.marx,
      });
    }
    if (+data.innovate < 60) {
      student.value.push({
        key: " ",
        value: data.innovate,
      });
    }
    if (+data.mysql < 60) {
      student.value.push({
        key: " ",
        value: data.mysql,
      });
    }
    if (+data.math < 60) {
      student.value.push({
        key: " ",
        value: data.math,
      });
    }
  });
}
api(`select * from message`).then(res => {
  tableData.value = res.res;
});
</script>
<style scoped lang="scss">
.mes-box {
  padding: 20px 0px;
  border-bottom: 1px solid black;
}
.mes-title {
  font-weight: 700;
}
</style>
