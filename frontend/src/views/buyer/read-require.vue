<template>
    <el-select v-model="stuClass" placeholder="请选择查看的行业" @change="select">
        <el-option v-for="item in setClass" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
    </el-select>
    <el-input placeholder="请输入中文公司名称" v-model="compName" class="company_name_ch" clearable v-if="isAdmin">
    </el-input>
    <el-button icon="el-icon-search" @click="search" class="search-btn" circle v-if="isAdmin"></el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <el-button type="primary" icon="el-icon-plus" @click="add"> 新增需求 </el-button>
    <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'time', order: 'descending' }">
        <el-table-column prop="name" label="负责人" width="70" text-align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="date" label="日期" width="100" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="sex" label="届数" width="60" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="company_name_ch" label="公司中文名称" width="130" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="company_name_en" label="公司英文名称" width="130" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="contact_name" label="联系人" width="70" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="tel" label="联系人电话" width="100" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="email" label="联系人电邮" width="100" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="prodcts" label="采购产品" width="120" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="amount" label="意向采购量" width="90" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="require" label="硬性要求" width="80" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="link" label="报名链接" width="220" show-overflow-tooltip> </el-table-column>
        <el-table-column label="删除" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="danger" icon="el-icon-delete" circle
                    @click="remove(scope.row.id, scope.$index)"></el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="footer">
        <el-pagination background layout="prev, pager, next" :page-size="10" :total="max" @current-change="page($event)">
        </el-pagination>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import api from "@/modules/api";
import deleteUser from "@/modules/common/delete-user";
import { useRouter } from "vue-router";
let isAdmin = localStorage.id == "admin";
let isTeacher = localStorage.id;
let router = useRouter();
let data = ref([]);
let max = ref(0);
let index = ref(0);
let tableData = computed(() =>
    data.value.slice(0 + index.value * 10, 0 + (index.value + 1) * 10)
);

function page(page) {
    index.value = page - 1;
}
function add() {
    router.push({ path: "/create-require"});
}
api(`select * from prod_requirement`).then((res) => {
    data.value = res.res;
    max.value = res.res.length;
});
function change(data) {
    if (localStorage.id == "admin") {
        router.push({ path: "/updata-student", query: { id: data.row.id } });
    }
}
function remove(id, index) {
    deleteUser({ col: "prod_requirement", id: id }).then((res) => {
        if (res.res) {
            api(`DELETE FROM achievement WHERE stucode='${id}';`).then((res) => {
                router.go(0);
            });
        }
    });
}
let stuClass = ref("");
let setClass = ref([
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

function select() {
    api(`select * from prod_requirement where subject='${stuClass.value}';`).then((res) => {
        data.value = res.res;
    });
}
let compName = ref("");
function search() {
    let sql = `SELECT * from prod_requirement WHERE company_name_ch LIKE '%${compName.value}%';`;
    api(sql).then((res) => {
        data.value = res.res;
    });
}


</script>
<style scoped lang='scss'>
.el-select {
    margin-top: 20px;
    margin-left: 30px;
}

.footer {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
}

.company_name_ch {
    width: 200px;
    margin-left: 20px;
}

.search-btn {
    margin-left: 10px;
}
</style>