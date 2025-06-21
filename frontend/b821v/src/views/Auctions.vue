<template>
  <div class="main-wrapper auctions">
    <h1 class="auctions__title">{{ categoryText }}</h1>
    <div class="auctions__main">
      <AuctionCard
        v-for="auction in activeAuctions"
        :key="auction.id"
        :auction="auction"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import axios from "axios";
import AuctionCard from "../components/auctions/AuctionCard.vue";
import { useUserStore } from "../stores/user";
import { io } from "socket.io-client";

const props = defineProps(["id"]);
const auctions = ref([]);
const userStore = useUserStore();

const activeAuctions = computed(() =>
  auctions.value.filter((a) => a.status !== "ended")
);

const socket = io("http://localhost:8080", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("✅ Сокет подключён:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("❌ Ошибка подключения к сокету:", err.message);
});

const categoryMap = {
  sport: "спорт",
  premium: "премиум",
  germans: "немцы",
  suv: "внедорожники",
  family: "для семьи",
  chinese: "китайцы",
  japanese: "японцы",
  russian: "русские",
  electric: "кары",
};

const categoryText = categoryMap[props.id] || "Категория не найдена";

const fetchAuctions = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/auction/", {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
    });

    auctions.value = response.data.filter((auction) =>
      auction.category.includes(props.id)
    );
    console.log(auctions.value);

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
      console.log("1");
      auctions.value[index].currentPrice = data.currentPrice;
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

let fetchInterval = null;

onMounted(() => {
  // Подписка на ставки уже есть, теперь интервал:
  fetchInterval = setInterval(() => {
    fetchAuctions();
  }, 5000);
});

onUnmounted(() => {
  if (fetchInterval) clearInterval(fetchInterval);
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
.auctions
    margin-bottom 40px
    min-height 65vh
    &__title
        margin-top 40px
        margin-bottom 20px
        font-size 48px
        text-transform uppercase
        font-family "PlayfairDisplaySC"
    &__main
        display flex
        flex-direction column
        gap 20px
</style>
