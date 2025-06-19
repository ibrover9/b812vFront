<template>
  <div class="main-wrapper auctions">
    <h1 class="auctions__title">{{ categoryText }}</h1>
    <div class="auctions__main">
      <AuctionCard
        v-for="auction in auctions"
        :key="auction.id"
        :auction="auction"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import AuctionCard from "../components/auctions/AuctionCard.vue";
import { useUserStore } from "../stores/user";

const props = defineProps(["id"]);
const auctions = ref([]);
const userStore = useUserStore();

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
    // Фильтруем аукционы по категории:
    auctions.value = response.data.filter((auction) =>
      auction.category.includes(props.id)
    );
  } catch (error) {
    console.error("Ошибка при загрузке аукционов:", error);
  }
};

watch(
  () => userStore.token,
  (newToken) => {
    if (newToken) {
      fetchAuctions();
    }
  },
  { immediate: true } // ← сработает сразу, если токен уже есть
);
</script>

<style lang="stylus">
.auctions
    margin-bottom 40px
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
