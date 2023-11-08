import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/login",
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
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
    redirect: "/HelloWorld/ContentView",
    children: [
      {
        path: "/HelloWorld/BaseTable",
        name: "BaseTable",
        component: () => import("@/components/BaseTable.vue"),
      },
      {
        path: "/HelloWorld/ContentView",
        name: "ContentView",
        component: () => import("@/components/ContentView.vue"),
      },
      {
        path: "/HelloWorld/DetailsView/:id",
        name: "DetailsView",
        component: () => import("@/components/DetailsView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LoginView.vue"),
  },
  {
    path: "/RegisterView",
    name: "RegisterView",
    component: () => import("@/components/RegisterView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// 路由守卫设置
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/RegisterView") {
    // 如果要访问的路径是登录或注册页面，则直接放行
    next();
  } else {
    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");
    if (username && password) {
      // 用户已经登录，允许导航
      next();
    } else {
      // 用户未登录，重定向到登录页面
      alert("请登录账户");
      next("/login");
    }
  }
});

export default router;
