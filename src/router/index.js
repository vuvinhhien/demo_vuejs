import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserProfile from "@/views/UserProfile.vue";
import CustomFilter from "@/views/AdvancedTopicView/CustomFilter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/advanced-topic",
    name: "advanced",
    component: () => import("../views/AdvancedTopicView/AdvancedTopicView.vue"),
    children: [{ path: "custom-filter", component: CustomFilter }],
  },
  {
    path: "/user/:id",
    name: "userDetail",
    component: () => import("../views/UserDetail.vue"),
    children: [{ path: "profile", component: UserProfile }],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
