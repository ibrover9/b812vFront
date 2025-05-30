<template>
  <div class="news-auction-conditions">
    <img src="/src/assets/img/newsUpdates/auctionCondition.jpg" alt="" />
    <div class="news-auction-conditions__state">
      <h2 class="news-auction-conditions__state-title">
        Обновленные условия аукционов
      </h2>
      <p class="news-auction-conditions__state-text">
        Внесены изменения в правила торгов ознакомьтесь, чтобы всегда быть на
        шаг впереди!
      </p>
      <UiButton
        class="news-auction-conditions__state-button"
        size="lg"
        icon="/icons/plus.svg"
        iconPosition="left"
        @click="handleClick"
      >
        узнать подробности
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import UiButton from "/src/components/ui/UiButton.vue";
</script>

<style lang="stylus">
.news-auction-conditions
  display flex
  justify-content space-between
  align-items center
  font-family "PlayfairDisplaySC"
  padding-right 80px
  padding-top 40px
  gap 80px
  &__state
    display flex
    flex-direction column
    gap 20px
  &__state-title
    text-align right
    font-size 32px
    font-weight 400
  &__state-text
    text-align right
    font-size 16px
    line-height 28px
  &__state-button
    width 65%
    margin-left auto
</style>
