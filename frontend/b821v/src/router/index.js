import { createRouter, createWebHistory } from "vue-router";
import News from "@/views/News.vue";
import AuctionsCategory from "@/views/Auctions.vue";

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
    path: "/auctions-categories",
    name: "Auctions",
    component: AuctionsCategory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
