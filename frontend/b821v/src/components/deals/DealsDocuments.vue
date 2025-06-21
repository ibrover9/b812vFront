<script setup>
import UiButtonDock from "../ui/UiButtonDock.vue";
import { jsPDF } from "jspdf";
import UiButtonPrice from "../ui/UiButtonPrice.vue";
defineProps(["userDeal"]);
</script>

<template>
  <div class="deals-documents">
    <div class="deals-documents__agreement">
      <div class="deals-documents__agreement-lable">Договор</div>
      <UiButtonDock
        :priceCar="userDeal.auctionId.currentPrice + 1000"
        :year="userDeal.auctionId.year"
        :carName="userDeal.auctionId.carName"
        :representativeFullName="userDeal.buyerId.representativeFullName"
      />
    </div>
    <hr class="main-hr deals-hr" />
    <div class="deals-documents__agreement">
      <div class="deals-documents__agreement-lable">Счет</div>
      <UiButtonPrice
        :priceCar="userDeal.auctionId.currentPrice + 1000"
        :year="userDeal.auctionId.year"
        :carName="userDeal.auctionId.carName"
        :representativeFullName="userDeal.buyerId.representativeFullName"
      />
    </div>
  </div>
</template>

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
