<script setup lang="ts">
import DealsSlider from "@/components/sliders/DealsSlider.vue";
import DealsInfomationCar from "@/components/deals/DealsInfomationCar.vue";
import DealsInformationSalesman from "@/components/deals/DealsInformationSalesman.vue";
import DealsPrice from "@/components/deals/DealsPrice.vue";
import DealsDocuments from "@/components/deals/DealsDocuments.vue";
import UiButton from "@/components/ui/UiButton.vue";

import { onMounted, onUnmounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

import axios from "axios";
import DealsCard from "../components/deals/DealsCard.vue";
import { useUserStore } from "../stores/user";
import { io } from "socket.io-client";

const route = useRoute();
const dealerId = route.params.id;
const auctions = ref([]);
const userStore = useUserStore();
const dealAll = ref(null);
const fetchedUser = ref(null);
const userDeals = ref([]);
const userDeal = ref(null);

const filterUserDeals = () => {
  if (!dealAll.value || !fetchedUser.value || !fetchedUser.value.deals) return;

  const userDealIds = fetchedUser.value.deals.map((d) =>
    typeof d === "string" ? d : d._id
  );

  userDeals.value = dealAll.value.filter(
    (deal) =>
      userDealIds.includes(deal._id.toString()) &&
      deal.dealerId?.toString() === dealerId
  );

  console.log("🔍 Сделки пользователя у текущего дилера:", userDeals.value);
};

const fetchUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/auth/user/${userStore.id}`,
      {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      }
    );

    fetchedUser.value = response.data;
    console.log("👤 Пользователь получен:", fetchedUser.value);
  } catch (error) {
    console.error("❌ Ошибка при получении пользователя:", error);
  }
};

const getAllDeal = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/deal/all",
      {
        auctionId: "6854f153d70a439aa1413621",
        buyerId: "684f1374d1dd5b3638ac34ae",
        finalPrice: 1,
        role: "admin",
      },
      {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      }
    );

    const allDeals = response.data;

    console.log("📦 Все сделки:", allDeals);

    // 💥 ВАЖНО: сохранить результат
    dealAll.value = allDeals;

    fetchUser();
  } catch (error) {
    console.error("❌ Ошибка при получении сделок:", error);
  }
};

// Очистка событий
onUnmounted(() => {
  console.log("🧹 Отключение слушателя new_bid");
});

// Запуск загрузки после получения токена
watch(
  () => userStore.token,
  (newToken) => {
    if (newToken) {
      getAllDeal();
    }
  },
  { immediate: true }
);

watch(
  [dealAll, fetchedUser],
  () => {
    if (dealAll.value && fetchedUser.value && fetchedUser.value.deals) {
      const userDealIds = fetchedUser.value.deals; // массив ID сделок

      // фильтрация сделок, принадлежащих пользователю
      userDeals.value = dealAll.value.filter((deal) =>
        userDealIds.includes(deal._id)
      );

      console.log("🔍 Сделки пользователя:", userDeals.value);
      const targetId = dealerId;
      userDeal.value = userDeals.value.find((deal) => deal._id === targetId);

      console.log(userDeal.value.auctionId);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="payment main-wrapper">
    <h1 class="payment__title">{{ userDeal.auctionId.carName }}</h1>
    <DealsSlider />
    <DealsInfomationCar :userDeal="userDeal" />
    <DealsInformationSalesman :userDeal="userDeal" />
    <div>
      <div class="payment__price-information">
        <DealsPrice :userDeal="userDeal" />
        <DealsDocuments :userDeal="userDeal" />
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.payment
    padding-top 40px !important
    padding-bottom 40px !important
    &__title
        font-size 48px
        font-family "PlayfairDisplaySC"
        text-transform uppercaset
        text-align center
    &__price-information
        margin-top 20px
        margin-bottom 20px
        display grid
        grid-template-columns 1fr 1fr
        gap 40px
    &__price-uibutton
        height 70px
        width 25%
</style>
