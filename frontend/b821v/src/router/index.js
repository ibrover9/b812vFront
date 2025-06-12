import { createRouter, createWebHistory } from "vue-router";
import News from "@/views/News.vue";
import AuctionsCategory from "@/views/AuctionsCategory.vue";
import Auctions from "@/views/Auctions.vue";
import Profile from "@/views/Profile.vue";

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
    name: "AuctionsCategory",
    component: AuctionsCategory,
  },
  {
    path: "/auctions/:id",
    name: "NewsDetail",
    component: Auctions,
    props: true,
  },
  {
    path: "/auctions/:id",
    name: "NewsDetail",
    component: Auctions,
    props: true,
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
