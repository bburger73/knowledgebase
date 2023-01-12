import { createRouter, createWebHistory, routeLocationKey } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },{
      path: "/signin",
      name: "signin",
      component: () => import("../views/SigninView.vue"),
    },{
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },{
      path: "/forgot",
      name: "forgot",
      component: () => import("../views/ForgotView.vue"),
    },{
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },{
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingView.vue"),
    }
  ],
});

export default router;
