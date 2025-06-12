<template>
  <div class="profile">
    <UiHeaderPage :items="headerItems" />
    <ProfileData />
  </div>
</template>

<script setup>
import ProfileData from "../components/profile/ProfileData.vue";
import UiHeaderPage from "../components/ui/UiHeaderPage.vue";

const headerItems = [
  { label: "История ставок", targetId: "historyBid" },
  { label: "Скачать договоры", targetId: "contracts" },
];
</script>
