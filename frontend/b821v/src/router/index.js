import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import News from "@/views/News.vue";
import AuctionsCategory from "@/views/AuctionsCategory.vue";
import Auctions from "@/views/Auctions.vue";
import Profile from "@/views/Profile.vue";
import Deals from "@/views/Deals.vue";
import Payments from "@/views/Payment.vue";
import Documents from "@/views/Documents.vue";

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
    meta: { requiresAuth: true },
  },
  {
    path: "/auctions/:id",
    name: "AuctionDetail",
    component: Auctions,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Deals,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/orders/payments/:id",
    name: "Payments",
    component: Payments,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/orders/documents/:id",
    name: "Documents",
    component: Documents,
    props: true,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: "News" });
  } else {
    next();
  }
});

export default router;
