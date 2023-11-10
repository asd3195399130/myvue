import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/Teacher/manage",
    children: [
      {
        path: "/home/HelloWorld",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
      },
      {
        path: "/home/Package",
        name: "Package",
        component: () => import("../views/PackageView.vue"),
      },
      {
        path: "/home/Mycheck/:id",
        name: "Mycheck",
        component: () => import("@/components/MycheckView.vue"),
      },
      {
        path: "/home/shopp",
        name: "shopp",
        component: () => import("../views/ShoppLing.vue"),
      },
      {
        path: "/home/CompuTn",
        name: "CompuTn",
        component: () => import("../views/CompuTn.vue"),
      },
      {
        path: "/home/RegisterView",
        name: "Register",
        component: () => import("../views/RegisterView.vue"),
      },
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
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    children: [],
  },{
    path:"/Teacher",
    name: "teacher",
    component: () => import("../views/TeacherView.vue"),
    children:[
      {
        path:"/Teacher/manage",
        name: "manage",
        component: () => import("../views/TeacherManageView.vue"),
      }

    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
