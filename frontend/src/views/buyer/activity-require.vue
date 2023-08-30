<template>
    <el-select v-model="stuSource" placeholder="请选择查看的来源" @change="selectSex">
        <el-option v-for="item in setSource" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
    </el-select>
    <el-select v-model="stuClass" placeholder="请选择查看的行业" @change="selectSub">
        <el-option v-for="item in setClass" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
    </el-select>
    <el-input placeholder="请输入公司名称" v-model="compName" class="company_name_ch" clearable v-if="isAdmin">
    </el-input>
    <el-button icon="el-icon-search" @click="search" class="search-btn" circle v-if="isAdmin"></el-button>
    &nbsp;&nbsp;&nbsp;&nbsp; 
    <!-- <el-button type="success" icon="el-icon-upload" @click="upload"> 导入excel </el-button> -->
    &nbsp;&nbsp;&nbsp;
    <el-button type="primary" icon="el-icon-plus" @click="add"> 新增采购商 </el-button>
    <el-table :data="tableData" style="width:100%" :default-sort="{ prop: 'time', order: 'descending' }">
        <el-table-column prop="name" label="负责人" width="120" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="company_name_ch" label="公司中文名称" width="130" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="company_name_en" label="公司英文名称" width="150" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="subject" label="行业" width="120" text-align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="source" label="来源" width="90" text-align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="contact_name" label="联系人" width="90" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tel" label="联系人电话" width="120" text-align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="email" label="联系人电邮" width="120" text-align="center" show-overflow-tooltip>
        </el-table-column>

        <el-table-column prop="remark" label="备注" text-align="center">
            <template v-slot="scope">
                <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="top">
                    <div>触碰察看内容</div>
                </el-tooltip>
            </template>
        </el-table-column>

        <el-table-column label="修改备注" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="info" icon="el-icon-edit" circle
                    @click="change(scope)"></el-button>
            </template>
        </el-table-column>

        <el-table-column label="删除" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="danger" icon="el-icon-delete" circle
                    @click="remove(scope.row.company_name_en, scope.row.company_name_ch)"></el-button>
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

api(`SELECT DISTINCT * FROM prod_buyer`).then((res) => {
    data.value = res.res;
    max.value = res.res.length;
});


function change(data) {
    if (localStorage.id == "admin") {
        router.push({ path: "/updata-remark", query: { id: data.row.company_name_en } });
    }
}

function upload() {
    router.push({ path: "/upload-buyer"});
}

function add() {
    router.push({ path: "/create-buyer"});
}

function remove(id, index) {
    api(`DELETE FROM prod_buyer WHERE company_name_en='${id}';`).then((res) => {
        router.go(0);
    });
}
let stuClass = ref("");
let stuSource = ref("");
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
let setSource = ref([
    { label: "网络" },
    { label: "自拓" },
    { label: "往届" },
]);
function selectSub() {
    api(`select * from prod_buyer where subject='${stuClass.value}';`).then((res) => {
        data.value = res.res;
    });
}
function selectSex() {
    api(`select * from prod_buyer where sex='${stuSex.value}';`).then((res) => {
        data.value = res.res;
    });
}

let compName = ref("");
function search() {
    let sql = `SELECT * FROM prod_buyer
    WHERE company_name_ch LIKE '%${compName.value}%'
    OR company_name_en LIKE '%${compName.value}%';`;
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
}</style>