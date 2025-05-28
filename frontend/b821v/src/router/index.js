import { createRouter, createWebHistory } from "vue-router";
import Authorization from "../views/Authorization.vue";
import News from "@/views/News.vue";

const routes = [
  {
    path: "/",
    name: "default",
    component: News,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
