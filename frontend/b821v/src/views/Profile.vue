<template>
  <div class="profile-page">
    <UiHeaderPage :items="headerItems" />
    <ProfileData />

    <DealCards />
    <AuctionProfile />
    <div class="deals-documents main-wrapper">
      <h1 class="deals__title">Договора</h1>
      <div class="deals-documents__agreement">
        <div class="deals-documents__agreement-lable">Договор 1</div>
        <UibuttonDocProfile />
      </div>
      <div class="deals-documents__agreement">
        <div class="deals-documents__agreement-lable">Договор 1</div>
        <UibuttonDocProfile />
      </div>
      <hr class="main-hr deals-hr" />
      <h1 class="deals__title">Счета</h1>
      <div class="deals-documents__agreement">
        <div class="deals-documents__agreement-lable">Счет 1</div>
        <UiButtonPriceProfile />
      </div>
      <div class="deals-documents__agreement">
        <div class="deals-documents__agreement-lable">Счет 1</div>
        <UiButtonPriceProfile />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileData from "../components/profile/ProfileData.vue";
import UiHeaderPage from "../components/ui/UiHeaderPage.vue";
import ProfileHistoryAuction from "../components/profile/ProfileHistoryAuction.vue";
import ProfilwContract from "../components/profile/ProfileContract.vue";
import DealCards from "../components/deals/DealCards.vue";
import UibuttonDocProfile from "@/components/ui/UibuttonDocProfile.vue";
import UiButtonPriceProfile from "@/components/ui/UiButtonPriceProfile.vue";
import AuctionProfile from "@/components/auctions/AuctionProfile.vue";
const headerItems = [
  { label: "История ставок", targetId: "historyBid" },
  { label: "Скачать договоры", targetId: "contracts" },
];
</script>

<style lang="stylus" scoped>
.deals-documents
    &__agreement
        padding 10px 0
        display flex
        justify-content space-between
        font-family "PlayfairDisplaySC"
    &__agreement-lable
        font-size 22px
    &__agreement-link
        font-size 22px
</style>
