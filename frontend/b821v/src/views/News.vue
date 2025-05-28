<template>
  <div class="news">
    <UiHeaderPage :items="headerItems" />
    <MainSlider />
    <Updates />
  </div>
</template>

<script setup>
import MainSlider from "@/components/news/MainSlider.vue";
import Updates from "@/components/news/Updates/Updates.vue";
import UiHeaderPage from "@/components/ui/UiHeaderPage.vue";

const headerItems = [
  { label: "Последние обновления", targetId: "updates" },
  { label: "Новые модели", targetId: "models" },
  { label: "Советы по аукционам", targetId: "tips" },
  { label: "Завершенные аукционы и интересные сделки", targetId: "auctions" },
];
</script>

<style lang="stylus"></style>
