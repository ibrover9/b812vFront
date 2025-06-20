<script setup lang="ts">
import DealsSlider from "@/components/sliders/DealsSlider.vue";
import DealsInfomationCar from "@/components/deals/DealsInfomationCar.vue";
import DealsInformationSalesman from "@/components/deals/DealsInformationSalesman.vue";
import DealsPrice from "@/components/deals/DealsPrice.vue";
import UiButton from "@/components/ui/UiButton.vue";
</script>

<template>
  <div class="documents main-wrapper">
    <h1 class="documents__title">Имя модели</h1>
    <DealsSlider />
    <DealsInfomationCar />
    <DealsInformationSalesman />
    <div class="documents__price">
      <DealsPrice />
      <div class="documents__price-button">
        <UiButton class="documents__price-uibutton" size="lg">
          ОФОРМИТЬ ДОКУМЕНТ
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.documents
    padding-top 40px
    padding-bottom 40px
    &__price
        display grid
        grid-template-columns: 1fr 1fr
    &__price-button
        display flex
        justify-content right
        margin-top 80px
        margin-bottom 0px
    &__price-uibutton
        font-size 22px !important
    &__title
        font-size 48px
        font-family "PlayfairDisplaySC"
        text-transform uppercaset
        text-align center
</style>
