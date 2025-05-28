<template>
  <div class="news">
    <UiHeaderPage :items="headerItems" />
  </div>
</template>

<script setup>
import UiHeaderPage from "@/components/ui/UiHeaderPage.vue";

const headerItems = [
  { label: "Последние обновления", targetId: "updates" },
  { label: "Новые модели", targetId: "models" },
  { label: "Советы по аукционам", targetId: "tips" },
  { label: "Завершенные аукционы и интересные сделки", targetId: "auctions" },
];
</script>

<style lang="stylus"></style>
