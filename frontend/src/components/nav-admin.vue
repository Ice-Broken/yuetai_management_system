<template>
  <el-row>
    <el-col>
      <el-menu :router="true" default-active="/Home" class="el-menu-vertical-demo" background-color="#545c64"
        text-color="#ffffff" active-text-color="#ffd04b">
        <el-menu-item> <i class="el-icon-info"> 悦泰管理系统 </i> </el-menu-item>
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-s-comment"></i>
            <span>通告</span>
          </template>
          <el-menu-item index="/create-message">
            <template #title>发布通告</template>
          </el-menu-item>
          <el-menu-item index="/admin-message">
            <template #title>管理公告</template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-user-solid"></i>
            <span>采购商管理</span>
          </template>
          <el-menu-item index="/activity-require">
            <template #title>采购商管理</template>
          </el-menu-item>
          <el-menu-item index="/read-require">
            <template #title>需求表记录</template>
          </el-menu-item>
          <el-menu-item index="/read-activity">
            <template #title>对接活动记录</template>
          </el-menu-item>
          <!-- <el-menu-item index="/create-require">
            <template #title>添加需求表</template>
          </el-menu-item>
          <el-menu-item index="/create-activity">
            <template #title>添加活动</template>
          </el-menu-item> -->
        </el-submenu>
        <el-submenu index="3">
          <template #title>
            <i class="el-icon-user"></i>
            <span>商会及大采购商</span>
          </template>
          <el-menu-item index="/b_buyer-total">
            <template #title>大采购商管理</template>
          </el-menu-item>
          <el-menu-item index="/chamber-total">
            <template #title>商会管理</template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template #title>
            <i class="el-icon-phone"></i>
            <span>酒店预订</span>
          </template>
          <el-menu-item index="/hotel-total">
            <template #title>酒店管理</template>
          </el-menu-item>
          <el-menu-item index="/create-hotel">
            <template #title>添加酒店</template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>修改及设定</span>
          </template>
          <el-menu-item index="/updata-admin">
            <template #title>修改管理员信息</template>
          </el-menu-item>
          <el-menu-item index="/updata-user">
            <template #title>修改用户信息</template>
          </el-menu-item>
          <el-menu-item index="/create-admin">
            <template #title>添加管理员</template>
          </el-menu-item>
          <el-menu-item index="/create-user">
            <template #title>添加用户</template>
          </el-menu-item>

        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
</script>
<style scoped lang='scss'>
.el-row {
  user-select: none;
  width: 200px;
  height: 100vh;
  background: #545c64;
  position: fixed;
  top: 0px;
  left: 0px;
}

.el-menu {
  border: 0px;
}
</style>