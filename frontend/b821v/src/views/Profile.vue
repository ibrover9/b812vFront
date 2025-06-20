<template>
  <div class="profile-page">
    <UiHeaderPage :items="headerItems" />
    <ProfileData />
    <ProfileHistoryAuction />
    <ProfilwContract />
  </div>
</template>

<script setup>
import ProfileData from "../components/profile/ProfileData.vue";
import UiHeaderPage from "../components/ui/UiHeaderPage.vue";
import ProfileHistoryAuction from "../components/profile/ProfileHistoryAuction.vue";
import ProfilwContract from "../components/profile/ProfileContract.vue";
const headerItems = [
  { label: "История ставок", targetId: "historyBid" },
  { label: "Скачать договоры", targetId: "contracts" },
];
</script>
