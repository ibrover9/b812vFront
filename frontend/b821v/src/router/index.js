import { createRouter, createWebHistory } from "vue-router";
import News from "@/views/News.vue";
import Auctions from "@/views/Auctions.vue";

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
  {
    path: "/auctions",
    name: "Auctions",
    component: Auctions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
