<template>
  <div class="news-functionality">
    <div class="news-functionality__state">
      <h2 class="news-functionality__state-title">Обновления функционала</h2>
      <p class="news-functionality__state-text">
        Теперь еще удобнее участвовать в аукционах: новые фильтры, быстрый
        доступ к истории ставок и улучшенный интерфейс.
      </p>
      <UiButton
        class="news-functionality__state-button"
        size="lg"
        icon="/icons/arrowRight.svg"
        iconPosition="right"
        @click="handleClick"
      >
        узнать подробности
      </UiButton>
    </div>
    <img src="/src/assets/img/newsUpdates/functionality.png" alt="" />
  </div>
</template>

<script setup>
import UiButton from "/src/components/ui/UiButton.vue";
</script>

<style lang="stylus">
.news-functionality
  display flex
  justify-content space-between
  align-items center
  font-family "PlayfairDisplaySC"
  padding-left 80px
  gap 40px
  &__state
    display flex
    flex-direction column
    gap 20px
  &__state-title
    font-size 32px
    font-weight 400
  &__state-text
    line-height 28px
    font-size 16px
  &__state-button
    width 60%
</style>
