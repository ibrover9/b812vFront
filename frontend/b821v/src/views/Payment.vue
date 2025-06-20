<script setup lang="ts">
import DealsSlider from "@/components/sliders/DealsSlider.vue";
import DealsInfomationCar from "@/components/deals/DealsInfomationCar.vue";
import DealsInformationSalesman from "@/components/deals/DealsInformationSalesman.vue";
import DealsPrice from "@/components/deals/DealsPrice.vue";
import UiButton from "@/components/ui/UiButton.vue";
</script>

<template>
  <div class="payment main-wrapper">
    <h1 class="payment__title">Имя модели</h1>
    <DealsSlider />
    <DealsInfomationCar />
    <DealsInformationSalesman />
    <div><DealsPrice /><UiButton size="lg"> Сделать ставку </UiButton></div>
  </div>
</template>

<style lang="stylus" scoped>
.payment
    padding-top 40px !important
    padding-bottom 40px !important
    &__title
        font-size 48px
        font-family "PlayfairDisplaySC"
        text-transform uppercaset
        text-align center
</style>
