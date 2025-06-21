<template>
  <div class="documents main-wrapper">
    <h1 class="documents__title">{{ userDeal.auctionId.carName }}</h1>
    <DealsSlider />
    <DealsInfomationCar :userDeal="userDeal" />
    <DealsInformationSalesman :userDeal="userDeal" />
    <div class="documents__price">
      <DealsPrice :userDeal="userDeal" />
      <div class="documents__price-button">
        <RouterLink :to="`/orders/payments/${dealerId}`">
          <UiButton
            class="documents__price-uibutton"
            size="lg"
            @click="handlePayment"
          >
            ОПЛАТИТЬ АВТО
          </UiButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DealsSlider from "@/components/sliders/DealsSlider.vue";
import DealsInfomationCar from "@/components/deals/DealsInfomationCar.vue";
import DealsInformationSalesman from "@/components/deals/DealsInformationSalesman.vue";
import DealsPrice from "@/components/deals/DealsPrice.vue";
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

const handlePayment = async () => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/api/deal/${dealerId}`,
      { status: "paid" }, // или любые нужные данные для обновления
      {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      }
    );

    console.log("✅ Успешная оплата:", response.data);
  } catch (error) {
    console.error("❌ Ошибка при оплате:", error);
  }
};

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

<style lang="stylus">
.documents
    padding-top 40px
    padding-bottom 40px
    &__price
        display grid
        grid-template-columns: 1fr 1fr
    &__price-button
        display flex
        justify-content right
        margin-top 80px
        margin-bottom 0px
    &__price-uibutton
        font-size 22px !important
    &__title
        font-size 48px
        font-family "PlayfairDisplaySC"
        text-transform uppercaset
        text-align center
</style>
