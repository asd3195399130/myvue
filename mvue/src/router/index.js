import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/Popual",
    children: [
      {
        path: "/Popual",
        name: "Popual",
        component: () => import("@/components/PopualView.vue"),
      },
      {
        path: "/QunChuangJian",
        name: "QunChuangJian",
        component: () => import("@/components/QunChuangJian.vue"),
      },
      {
        path: "/QunTianJia",
        name: "QunTianJia",
        component: () => import("@/components/QunTianJia.vue"),
      },
      {
        path: "/QunGuanLi",
        name: "QunGuanLi",
        component: () => import("@/components/QunGuanLi.vue"),
      },
      {
        path: "/ChengYuanBiaoQian",
        name: "ChengYuanBiaoQian",
        component: () => import("@/components/ChengYuanBiaoQian.vue"),
      },
      {
        path: "/Group",
        name: "Group",
        component: () => import("@/components/GroupView.vue"),
        children: [],
      },
      {
        path: "/GuanLiQuan",
        name: "GuanLiQuan",
        component: () => import("@/components/GuanLiQuan.vue"),
      },
      {
        path: "/QunDengJi",
        name: "QunDengJi",
        component: () => import("@/components/QunDengJi.vue"),
      },
      {
        path: "/QunGuiMO",
        name: "QunGuiMO",
        component: () => import("@/components/QunGuiMO.vue"),
      },
      {
        path: "/QunZiLiao",
        name: "QunZiLiao",
        component: () => import("@/components/QunZiLiao.vue"),
      },
      {
        path: "/GongNeng",
        name: "GongNeng",
        component: () => import("@/components/GongNeng.vue"),
      },
      {
        path: "/JianChu",
        name: "JianChu",
        component: () => import("@/components/JianChu.vue"),
      },
      {
        path: "/QunYing",
        name: "QunYing",
        component: () => import("@/components/QunYing.vue"),
      },
      {
        path: "/QunZhuan",
        name: "QunZhuan",
        component: () => import("@/components/QunZhuan.vue"),
        children: [],
      },
      {
        path: "/QunSou",
        name: "QunSou",
        component: () => import("@/components/QunSou.vue"),
        children: [],
      },
      {
        path: "/RenZheng",
        name: "RenZheng",
        component: () => import("@/components/RenZheng.vue"),
        children: [],
      },
      {
        path: "/QunFei",
        name: "QunFei",
        component: () => import("@/components/QunFei.vue"),
        children: [],
      },
      {
        path: "/QunFenghao",
        name: "QunFenghao",
        component: () => import("@/components/QunFenghao.vue"),
        children: [],
      },
      {
        path: "/YuanCheng",
        name: "YuanCheng",
        component: () => import("@/components/YuanCheng.vue"),
        children: [],
      },
      {
        path: "/powernm",
        name: "powernm",
        component: () => import("@/components/PowernmView.vue"),
      },
      {},
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
