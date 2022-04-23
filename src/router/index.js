import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserProfile from "@/views/UserProfile.vue";
import CustomFilter from "@/views/AdvancedTopicView/CustomFilter";
import CustomDirective from "@/views/AdvancedTopicView/CustomDirective";
import ResuableComponent from "@/views/AdvancedTopicView/ResuableComponent";
import TwoWaysBindingComponent from "@/views/AdvancedTopicView/TwoWaysBindingComponent";
import UsingAxios from "@/views/AdvancedTopicView/UsingAxios";

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
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/advanced-topic",
    name: "advanced",
    component: () => import("../views/AdvancedTopicView/AdvancedTopicView.vue"),
    children: [
      { path: "custom-filter", component: CustomFilter },
      { path: "custom-directive", component: CustomDirective },
      { path: "resuable-component", component: ResuableComponent },
      { path: "twoways-binding", component: TwoWaysBindingComponent },
      { path: "using-axios", component: UsingAxios },
    ],
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
