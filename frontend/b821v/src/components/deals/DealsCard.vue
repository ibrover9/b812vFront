<template>
  <div class="deals-card">
    <div class="deals-card__header">
      <div class="deals-card__header-name">{{ auction.carName }}</div>
      <div class="deals-card__header-status">
        <span
          class="status-indicator"
          :class="{
            'status-processing': status === 'processing',
            'status-ended': status === 'ended',
            'status-no-ended': status === 'noEnded',
          }"
        ></span>
        <span>
          {{
            status === "processing"
              ? "В процессе"
              : status === "ended"
              ? "Оплачен"
              : status === "noEnded"
              ? "Неоплачен"
              : "Неизвестно"
          }}
        </span>
      </div>
    </div>
    <div class="deals-card__main">
      <div class="deals-card__slider">
        <AuctionSlider :images="auction.carImageUrls" />
      </div>
      <div class="deals-card__details">
        <div class="deals-card__info">
          <div class="deals-card__info-first-string">
            <div class="deals-card__info-first">
              <UiIcon name="year" class="deals-card__item-icon" /> Год
              {{ auction.year }}
            </div>
            <div class="deals-card__info-first">
              <UiIcon name="mileage" class="deals-card__item-icon" /> Пробег
              {{ auction.mileage }}
            </div>
            <div class="deals-card__info-first">
              <UiIcon name="steering-wheel" class="deals-card__item-icon" />
            </div>
          </div>
          <hr class="main-hr deals-card__hr" />
          <div class="deals-card__info-second-string">
            <div class="deals-card__info-second deals-card__info-second-left">
              Максимальная скорость: {{ auction.maxSpeed }}
            </div>
            <div class="deals-card__info-second deals-card__info-second-right">
              Количество цилиндров: {{ auction.cylinders }}
            </div>
          </div>
          <div class="deals-card__info-third-string">
            <div class="deals-card__info-third deals-card__info-third-left">
              Страна производства: {{ auction.originCountry }}
            </div>
            <div class="deals-card__info-third deals-card__info-third-right">
              Лошадиных сил: {{ auction.horsepower }}
            </div>
          </div>
        </div>
        <div v-if="status !== 'ended'" class="deals-card__payment">
          <span>Стоимость: 1000₽</span>
          <RouterLink
            :to="`/orders/${
              status === 'processing' ? 'documents' : 'payments'
            }/${auction.id}`"
            v-if="status === 'processing' || status === 'noEnded'"
          >
            <UiButton>
              {{
                status === "processing"
                  ? "Оформить договор"
                  : status === "noEnded"
                  ? "Оплатить"
                  : "Действие"
              }}
            </UiButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuctionSlider from "../sliders/AuctionSlider.vue";
import UiButton from "../ui/UiButton.vue";
import UiIcon from "../ui/UiIcon.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
const status = ref("processing");

defineProps({
  auction: Object,
});
</script>

<style lang="stylus">

.deals-card
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
    &__header-status
        display flex
        align-items center
        gap 10px
        font-size 20px
    &__payment
        display flex
        justify-content space-between
        align-items center
        padding 10px 0

    .status-indicator
        width 12px
        height 12px
        border-radius 50%
        display inline-block

    .status-processing
        background-color yellow

    .status-ended
        background-color green

    .status-no-ended
        background-color red
</style>
