<script setup lang="ts">
import UiIcon from "../ui/UiIcon.vue";
</script>

<template>
  <div class="main-slider">
    <img
      class="main-slider__img"
      src="/src/assets/img/newsMainSlider/slide1.png"
      alt=""
    />
    <div class="main-slider__title">
      <h1 class="main-slider__title-text">Новости платформы</h1>
      <UiIcon name="logo-white" class="main-slider__title-icon" />
    </div>
  </div>
</template>

<style lang="stylus">
.main-slider
    position relative
    width 100vw
    &__img
        width 100%
        filter: brightness(50%);
    &__title
        position absolute
        display flex
        justify-content:space-between
        align-items center
        top 20%
        left 80px
        right 80px

        text-align center
    &__title-text
        font-family "PlayfairDisplaySC"
        font-weight: 400
        font-size 90px
        color $thirdMainColor
    &__title-icon
        height 55px
        padding-top:20px
</style>
