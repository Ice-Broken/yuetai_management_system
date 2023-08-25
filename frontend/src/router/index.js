import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      //   {
      //   path: '/admin',
      //   name: 'admin',
      //   component: () => import('../views/admin/admin.vue')
      // },
      // ---------------------- 总需求与活动 ---------------------- //
      {
        path: "/activity-require",
        name: "activityRequire",
        component: () => import("../views/buyer/activity-require.vue"),
      },
      // ---------------------- 添加需求/活动 ---------------------- //
      {
        path: "/create-require",
        name: "createRequire",
        component: () => import("../views/buyer/create-require.vue"),
      },
      {
        path: "/create-activity",
        name: "createActivity",
        component: () => import("../views/buyer/create-activity.vue"),
      },
      // ---------------------- 查看需求/活动 ---------------------- //
      {
        path: "/read-require",
        name: "readRequire",
        component: () => import("../views/buyer/read-require.vue"),
      },
      {
        path: "/read-activity",
        name: "readActivity",
        component: () => import("../views/buyer/read-activity.vue"),
      },
      // ----------------------- 更新备注 --------------------------- //
      {
        path: "/updata-remark",
        name: "updateRemark",
        component: () => import("../views/buyer/updata-remark.vue"),
      },
      {
        path: "/updata-bbuyer",
        name: "updateBBuyer",
        component: () => import("../views/chamber/updata-bbuyer.vue"),
      },
      {
        path: "/updata-chamber",
        name: "updataChamber",
        component: () => import("../views/chamber/updata-chamber.vue"),
      },
      // ----------------------创建修改用户信息-------------------- //
      {
        path: "/create-user",
        name: "createUser",
        component: () => import("../views/user/create-user.vue"),
      },
      {
        path: "/updata-user",
        name: "updataUser",
        component: () => import("../views/user/updata-user.vue"),
      },
      // ---------------------- 上传/下载采购商 ---------------------- //
      {
        path: "/create-buyer",
        name: "createBuyer",
        component: () => import("../views/buyer/create-buyer.vue"),
      },
      {
        path: "/upload-buyer",
        name: "uploadBuyer",
        component: () => import("../views/buyer/upload-buyer.vue"),
      },
      // -----------------------大采购商/商会------------------------ //
      {
        path: "/chamber-total",
        name: "chamberTotal",
        component: () => import("../views/chamber/chamber-total.vue"),
      },
      {
        path: "/create-chamber",
        name: "createChamber",
        component: () => import("../views/chamber/create-chamber"),
      },
      {
        path: "/b_buyer-total",
        name: "bBuyerTotal",
        component: () => import("../views/chamber/b_buyer-total.vue"),
      },
      {
        path: "/create-b_buyer",
        name: "createBBuyer",
        component: () => import("../views/chamber/create-b_buyer.vue"),
      },
      {
        path: "/detail-bbuyer",
        name: "detailBBuyer",
        component: () => import("../views/chamber/detail-bbuyer.vue"),
      },
      {
        path: "/detail-chamber",
        name: "detailChamber",
        component: () => import("../views/chamber/detail-chamber.vue"),
      },
      // --------------------------系统用户---------------------------- //
      {
        path: "/read-user",
        name: "readUser",
        component: () => import("../views/user/read-user.vue"),
      },
      {
        path: "/updata-admin",
        name: "updataAdmin",
        component: () => import("../views/admin/updata-admin.vue"),
      },
      {
        path: "/create-message",
        name: "createMessage",
        component: () => import("../views/admin/create-message.vue"),
      },
      {
        path: "/admin-message",
        name: "adminMessage",
        component: () => import("../views/admin/admin-message.vue"),
      },
      {
        path: "/settime",
        name: "settime",
        component: () => import("../views/admin/setTime.vue"),
      },
      {
        path: "/admin-score",
        name: "adminScore",
        component: () => import("../views/admin/admin-hotel.vue"),
      },
      {
        path: "/create-admin",
        name: "createAdmin",
        component: () => import("../views/admin/create-admin.vue"),
      },
      {
        path: "/teacher-hotel",
        name: "teacherHotel",
        component: () => import("../views/buyer/teacher-hotel.vue"),
      },
      {
        path: "/teacher-excel",
        name: "teacher-excel",
        component: () => import("../views/buyer/teacher-excel.vue"),
      },
      {
        path: "/read-message",
        name: "readMessage",
        component: () => import("../views/admin/read-message.vue"),
      },
      {
        path: "/user-hotel",
        name: "userHotel",
        component: () => import("../views/user/user-hotel.vue"),
      },
      {
        path: "/read-apply",
        name: "read-apply",
        component: () => import("../views/admin/read-apply.vue"),
      },
    ],
  },
  {
    path: "/logn",
    name: "logn",
    component: () => import("../views/logn.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
