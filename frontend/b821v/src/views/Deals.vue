<template>
  <div class="main-wrapper deals">
    <h1 class="deals__title">Оформление заказов</h1>
    <DealsCard
      v-for="auction in auctions"
      :key="auction.id"
      :auction="auction"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import axios from "axios";
import DealsCard from "../components/deals/DealsCard.vue";
import { useUserStore } from "../stores/user";
import { io } from "socket.io-client";

const props = defineProps(["id"]);
const auctions = ref([]);
const userStore = useUserStore();

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
    }
  },
  { immediate: true }
);
</script>

<style lang="stylus">
.deals
    &__title
        margin-top 40px
        margin-bottom 20px
        font-size 48px
        text-transform uppercase
        font-family "PlayfairDisplaySC"
</style>
