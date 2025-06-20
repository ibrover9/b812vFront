<template>
  <div class="main-wrapper deals">
    <h1 class="deals__title">Оформление заказов</h1>
    <DealsCard v-for="deal in userDeals" :key="deal.id" :auction="deal" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import axios from "axios";
import DealsCard from "../components/deals/DealsCard.vue";
import { useUserStore } from "../stores/user";
import { io } from "socket.io-client";
import { useRoute } from "vue-router";

const props = defineProps(["id"]);
const auctions = ref([]);
const userStore = useUserStore();
const dealAll = ref(null);
const fetchedUser = ref(null);
const userDeals = ref([]);

const socket = io("http://localhost:8080", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("✅ Сокет подключён:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("❌ Ошибка подключения к сокету:", err.message);
});

const fetchAuctions = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/auction/", {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
    });

    auctions.value = response.data;

    console.log("📦 Загружены аукционы:", auctions.value);

    // После загрузки подписываемся на каждый аукцион
    auctions.value.forEach((auction) => {
      console.log("📨 Отправка join_auction для:", auction._id);
      socket.emit("join_auction", auction._id);
    });
  } catch (error) {
    console.error("❌ Ошибка при загрузке аукционов:", error);
  }
};

const fetchUser = async (userId) => {
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
    dealAll.value = response.data;
    console.log("✅ Данные получены:", response.data);
    fetchUser();
  } catch (error) {
    console.error("❌ Ошибка при создании сделки:", error);
  }
};

// Подписка на событие ставок
onMounted(() => {
  socket.on("new_bid", (data) => {
    console.log("📬 Получено событие new_bid:", data);

    const index = auctions.value.findIndex((a) => a._id === data.auctionId);
    if (index !== -1) {
      auctions.value[index].currentPrice = data.amount;
      auctions.value[index].winner = data.userId;
    } else {
      console.warn("⚠️ Аукцион не найден в списке:", data.auctionId);
    }
  });
});

// Очистка событий
onUnmounted(() => {
  console.log("🧹 Отключение слушателя new_bid");
  socket.off("new_bid");
});

// Запуск загрузки после получения токена
watch(
  () => userStore.token,
  (newToken) => {
    if (newToken) {
      fetchAuctions();
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
    }
  },
  { immediate: true }
);
</script>

<style lang="stylus">
.deals
    display flex
    flex-direction column
    gap 20px
    margin-bottom 40px
    &__title
        margin-top 40px
        margin-bottom 20px
        font-size 48px
        text-transform uppercase
        font-family "PlayfairDisplaySC"
</style>
