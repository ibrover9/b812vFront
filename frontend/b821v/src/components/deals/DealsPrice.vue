<template>
  <div class="deals-price">
    <div class="deals-price__price">
      <div class="deals-price__price-item">без учёта комиссии:</div>
      <div class="deals-price__price-item">
        {{ userDeal.auctionId.currentPrice }}$
      </div>
    </div>
    <div class="deals-price__commission">
      <div class="deals-price__price-item">комиссия:</div>
      <div class="deals-price__price-item">1000$</div>
    </div>
    <hr class="main-hr deals-hr" />
    <div class="deals-price__full-price">
      <div class="deals-price__price-item">Итоговая сумма:</div>
      <div class="deals-price__price-item">
        {{ userDeal.auctionId.currentPrice + 1000 }}$
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["userDeal"]);
</script>
<style lang="stylus" scoped>
.deals-price
    &__price
        padding 10px 0
        display flex
        justify-content space-between
        font-family "PlayfairDisplaySC"
        font-size 22px
    &__commission
        padding 10px 0
        font-family "PlayfairDisplaySC"
        display flex
        font-size 22px
        justify-content space-between
    &__full-price
        padding 10px 0
        display flex
        justify-content space-between
        font-family "PlayfairDisplaySC"
        font-size 32px
</style>
