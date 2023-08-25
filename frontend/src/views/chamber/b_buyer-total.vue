<template>
    <el-select v-model="stuSource" placeholder="是否激活" @change="selectSex">
        <el-option v-for="item in setSource" :key="item.label" :label="item.label" :value="item.label">
        </el-option>
    </el-select>
    <el-input placeholder="请输入大采购商名称" v-model="compName" class="company_name" clearable v-if="isAdmin">
    </el-input>
    <el-button icon="el-icon-search" @click="search" class="search-btn" circle v-if="isAdmin"></el-button>
    &nbsp;&nbsp;&nbsp;&nbsp; 
    <el-button type="primary" icon="el-icon-plus" @click="upload"> 新增大采购商 </el-button>
    <el-table :data="tableData" style="width:100%" :default-sort="{ prop: 'time', order: 'descending' }">
        <el-table-column prop="bbuyer_name_ch" label="采购商中文名称" width="160" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="bbuyer_name_en" label="采购商英文名称" width="160" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="contact_name" label="联系人" width="130" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tel" label="联系人电话" width="130" text-align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="email" label="联系人电邮" width="130" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="time" label="最后联系时间" width="150" text-align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="remark" label="跟进情况" width="150" text-align="center">
            <template v-slot="scope">
                <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="top">
                    <div>触碰察看内容</div>
                </el-tooltip>
            </template>
        </el-table-column>

        <el-table-column label="修改情况" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="info" icon="el-icon-edit" circle
                    @click="change(scope)"></el-button>
            </template>
        </el-table-column>
        <el-table-column label="查看详情" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="success" icon="el-icon-search" circle
                    @click="detail(scope)"></el-button>
            </template>
        </el-table-column>
        <el-table-column label="删除" v-if="isTeacher != 'teacher'">
            <template v-slot="scope">
                <el-button type="danger" icon="el-icon-delete" circle
                    @click="remove(scope.row.bbuyer_name_ch)"></el-button>
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

api(`SELECT DISTINCT * FROM prod_bbuyer`).then((res) => {
    data.value = res.res;
    max.value = res.res.length;
});

function change(data) {
    if (localStorage.id == "admin") {
        router.push({ path: "/updata-bbuyer", query: { id: data.row.bbuyer_name_ch } });
    }
}

function detail(data) {
    if (localStorage.id == "admin") {
        router.push({ path: "/detail-bbuyer", query: { id: data.row.bbuyer_name_ch } });
    }
}

function upload() {
    router.push({ path: "/create-b_buyer"});
}

function remove(id, index) {
    api(`DELETE FROM prod_bbuyer WHERE bbuyer_name_ch='${id}';`).then((res) => {
        router.go(0);
    });
}
let stuClass = ref("");
let stuSource = ref("");

let setSource = ref([
    { label: "是" },
    { label: "否" },
]);

function selectSub() {
    api(`select * from prod_bbuyer where subject='${stuClass.value}';`).then((res) => {
        data.value = res.res;
    });
}

let compName = ref("");
function search() {
    let sql = `SELECT * FROM prod_bbuyer
    WHERE bbuyer_name_ch LIKE '%${compName.value}%'
    OR bbuyer_name_en LIKE '%${compName.value}%';`;
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

.company_name {
    width: 200px;
    margin-left: 20px;
}

.search-btn {
    margin-left: 10px;
}</style>