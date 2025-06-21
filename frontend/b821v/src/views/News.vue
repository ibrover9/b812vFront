<template>
  <div class="news">
    <UiHeaderPage :items="headerItems" />
    <MainSlider />
    <Updates />
    <Advices />
    <Interesting />
  </div>
</template>

<script setup>
import MainSlider from "@/components/news/MainSlider.vue";
import Updates from "@/components/news/Updates/Updates.vue";
import UiHeaderPage from "@/components/ui/UiHeaderPage.vue";
import Advices from "@/components/news/Advices.vue";
import Interesting from "@/components/news/Interesting.vue";

const headerItems = [
  { label: "Последние обновления", targetId: "news-updates" },
  { label: "Новые модели", targetId: "news-models" },
  { label: "Советы по аукционам", targetId: "news-tips" },
  {
    label: "Завершенные аукционы и интересные сделки",
    targetId: "news-auctions",
  },
];
</script>

<style lang="stylus"></style>
