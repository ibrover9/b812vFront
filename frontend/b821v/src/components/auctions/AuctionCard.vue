<script setup lang="ts">
import AuctionSlider from "../sliders/AuctionSlider.vue";
import UiIcon from "../ui/UiIcon.vue";
import AuctionAddBid from "./AuctionAddBid.vue";

defineProps({
  auction: Object,
});
</script>

<template>
  <div class="auction-card">
    <div class="auction-card__header">
      <div class="auction-card__header-name">{{ auction.carName }}</div>
      <div class="auction-card__header-lot">{{ auction.lotNumber }}</div>
    </div>
    <div class="auction-card__main">
      <div class="auction-card__slider">
        <AuctionSlider :images="auction.carImageUrls" />
      </div>
      <div class="auction-card__details">
        <div class="auction-card__info">
          <div class="auction-card__info-first-string">
            <div class="auction-card__info-first">
              <UiIcon name="year" class="auction-card__item-icon" /> Год
              {{ auction.year }}
            </div>
            <div class="auction-card__info-first">
              <UiIcon name="mileage" class="auction-card__item-icon" /> Пробег
              {{ auction.mileage }}
            </div>
            <div class="auction-card__info-first">
              <UiIcon name="steering-wheel" class="auction-card__item-icon" />
            </div>
          </div>
          <hr class="main-hr auction-card__hr" />
          <div class="auction-card__info-second-string">
            <div
              class="auction-card__info-second auction-card__info-second-left"
            >
              Максимальная скорость: {{ auction.maxSpeed }}
            </div>
            <div
              class="auction-card__info-second auction-card__info-second-right"
            >
              Количество цилиндров: {{ auction.cylinders }}
            </div>
          </div>
          <div class="auction-card__info-third-string">
            <div class="auction-card__info-third auction-card__info-third-left">
              Страна производства: {{ auction.originCountry }}
            </div>
            <div
              class="auction-card__info-third auction-card__info-third-right"
            >
              Лошадиных сил: {{ auction.horsepower }}
            </div>
          </div>
        </div>
        <AuctionAddBid :auction="auction" />
      </div>
    </div>
  </div>
</template>

<style lang="stylus">

.auction-card
    width 100%
    border 1px solid $secondMainColor
    border-radius 14px
    &__header
        background-color $secondMainColor
        color $thirdMainColor
        padding 10px 20px
        border-radius 9px
        display flex
        justify-content space-between
        font-family "PlayfairDisplaySC"
    &__header-name
        font-size 32px
    &__header-lot
        font-size 32px
    &__main
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10px;

    &__info-first-string
        padding 10px 0
        display flex
        justify-content space-between
    &__info-first
        color $inconspicuousColor
        display flex
        align-items center
        gap 5px
        font-size 20px
    &__item-icon
        height 18px
        width 18px
    &__hr
        margin 10px 0
        background-color $hrCard !important
    &__details
        display flex
        flex-direction column
        height 100%
        justify-content: space-between;
    &__info-second-string
        border-top 1px solid $hrCard
        border-bottom 1px solid $hrCard
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding 10px 0
    &__info-second
        font-size 16px
    &__info-second-left
        border-right 1px solid $hrCard
    &__info-second-right
        padding-left 10px
    &__info-third-string
        padding 10px 0
        border-bottom 1px solid $hrCard
        display: grid;
        grid-template-columns: 1fr 1fr;
    &__info-third-left
        border-right 1px solid $hrCard
    &__info-third-right
        padding-left 10px
</style>
