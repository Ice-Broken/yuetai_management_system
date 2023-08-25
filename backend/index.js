const express = require('express');
const app = express();
// 资源跨域
const cors = require('cors');
app.use(cors())
// 接收post请求
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 文件上传包
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use('/excel',express.static('excel'));

app.use('/', require('./route/api')); //复用接口
app.use('/', require('./route/logn')); //登录
app.use('/', require('./route/delete-user')); //删除用户（复用）
app.use('/', require('./route/read-user')); //查询用户（复用）
app.use('/', require('./route/read-bbuyer')); //查询大采购商
app.use('/', require('./route/read-chamber')); //查询商会
app.use('/', require('./route/updata-score')); //修改分数

app.use('/', require('./buyer/create-buyer')); //创建采购商
app.use('/', require('./student/create-student')); //创建stu

app.use("/", require("./buyer/import")); //导入excel录入成绩
app.use('/', require('./buyer/create-require')); //创建需求
app.use('/', require('./buyer/create-activity')); //创建活动
app.use('/', require('./buyer/create-b_buyer')); //创建大采购商
app.use('/', require('./buyer/create-chamber')); //创建商会
app.use('/', require('./buyer/teacher-print')); //打印
app.use("/", require("./buyer/statistics")); //散点图统计数据
app.use('/', require('./buyer/teacher-excel')); //读取excel





















const port = 6789;
app.listen(port, () => console.log(`监听端口:${port}`));