<template>
  <div class="news-advices main-wrapper">
    <div class="news-advices__title">Советы по аукционам</div>
    <div class="news-advices__block">
      <hr class="main-hr" />
      <div class="news-advices__block-full">
        <div class="news-advices__block-full-text">
          <h3 class="news-advices__block-title">Советы по аукционам</h3>
          <p class="news-advices__block-text">
            Теперь еще удобнее участвовать в аукционах: новые фильтры, быстрый
            доступ к истории ставок и улучшенный интерфейс.
          </p>
        </div>
        <UiIcon name="arrowRightYellow" />
      </div>
      <hr class="main-hr" />
    </div>
  </div>
</template>

<script setup>
import UiButton from "/src/components/ui/UiButton.vue";
import UiIcon from "/src/components/ui/UiIcon.vue";
</script>

<style lang="stylus">
.news-advices
    &__title
        font-size 48px
        font-weight 400
        font-family  "PlayfairDisplaySC"
        margin-bottom 40px

    &__block-full
        display flex
        justify-content space-between
        align-items center
        gap 40px
        margin 40px 0
    &__block-title
        font-size 32px
        font-weight 400
        font-family  "PlayfairDisplaySC"
        padding-bottom 20px
    &__block-text
        font-size 24px
        font-family  "PlayfairDisplaySC"
</style>
