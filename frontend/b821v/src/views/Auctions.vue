<template>
  <div class="main-wrapper auctions">
    <h1 class="auctions__title">{{ categoryText }}</h1>
    <AuctionCard />
  </div>
</template>

<script setup>
import AuctionCard from "../components/auctions/AuctionCard.vue";
const props = defineProps(["id"]);

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
</script>

<style lang="stylus">
.auctions
    &__title
        font-size 48px
        text-transform uppercase
</style>
