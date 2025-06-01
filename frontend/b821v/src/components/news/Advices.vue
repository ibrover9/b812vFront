<template>
  <div class="news-advices main-wrapper">
    <div class="news-advices__title">Советы по аукционам</div>
    <hr class="main-hr" />
    <div
      class="news-advices__block"
      v-for="(advice, index) in visibleAdvice"
      :key="advice.id || index"
    >
      <div class="news-advices__block-full">
        <div class="news-advices__block-full-text">
          <h3 class="news-advices__block-title">{{ advice.title }}</h3>
          <p class="news-advices__block-text">{{ advice.mainText }}</p>
        </div>
        <UiIcon name="arrowRightYellow" />
      </div>
      <hr class="main-hr" v-if="index < visibleAdvice.length - 1" />
    </div>
    <hr class="main-hr" />
    <div
      v-if="visibleCount < newsAdvice.length"
      class="news-advices__load-more"
    >
      <UiButton size="lg" @click="showMore">Показать ещё</UiButton>
    </div>
  </div>
</template>

<script setup>
import UiButton from "/src/components/ui/UiButton.vue";
import UiIcon from "/src/components/ui/UiIcon.vue";
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const newsAdvice = ref([]);
const visibleCount = ref(3);

const visibleAdvice = computed(() =>
  newsAdvice.value.slice(0, visibleCount.value)
);

const showMore = () => {
  visibleCount.value += 3;
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}api/news-advice`
    );
    newsAdvice.value = response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});
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

    &__load-more
        text-align center
        margin 40px 0

.main-hr
    border 0
    height 1px
    background-color #ccc
    margin 0
</style>
