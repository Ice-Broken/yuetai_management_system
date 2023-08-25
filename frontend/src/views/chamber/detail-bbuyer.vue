<template>
  <div class="el-form-item">
    <el-form>
      <el-card>
        <h4>大采购商名称：{{ bbuyer_name_ch }}</h4>
        <h4>最后跟进时间：{{ time }}</h4>
      </el-card>
      <el-card>
        <h4>跟进情况：<p> {{ remark }}</p>
        </h4>

      </el-card>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import api from "@/modules/api";
import readUser from "@/modules/common/read-bbuyer";
let route = useRoute();
let bbuyer_name_ch = ref("");
let remark = ref("");
let time = ref("");

readUser({
  col: "prod_bbuyer",
  id: route.query.id,
}).then((res) => {
  let data = res.res[0];
  bbuyer_name_ch.value = data.bbuyer_name_ch;
  remark.value = data.remark;
  time.value = data.time;
});

api(`SELECT DISTINCT * FROM prod_bbuyer`).then((res) => {
  data.value = res.res;
  max.value = res.res.length;
});


</script>
<style scoped lang='scss'>
.el-form-item {
  width: 400px;
  margin: 10px auto;
  margin-top: 40px;
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