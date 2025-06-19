<script setup lang="ts">
import DealsSlider from "@/components/sliders/DealsSlider.vue";
</script>

<template>
  <div class="payment main-wrapper">
    <h1 class="payment__title">Имя модели</h1>
    <DealsSlider />
  </div>
</template>

<style lang="stylus">
.payment
    padding 40px 0
    &__title
        font-size 48px
        font-family "PlayfairDisplaySC"
        text-transform uppercaset
        text-align center
</style>
