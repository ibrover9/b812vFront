<template>
  <div class="main-wrapper auctions">
    <h1 class="auctions__title">{{ categoryText }}</h1>
    <div class="auctions__main">
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
    </div>
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
