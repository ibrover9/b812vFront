<template>
  <Swiper
    class="interesting-swiper main-wrapper"
    :slides-per-view="3.5"
    :space-between="10"
  >
    <SwiperSlide v-for="item in newsInteresting" :key="item._id">
      <div class="interesting-swiper__slide" id="news-auctions">
        <img
          class="interesting-swiper__slide-img"
          v-if="item.images.length"
          :src="item.images[0]"
          alt="Preview"
        />
        <h3 class="interesting-swiper__slide-header">{{ item.header }}</h3>
        <p class="interesting-swiper__slide-text">{{ item.preview }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import axios from "axios";

const newsInteresting = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}api/news-interesting`
    );
    newsInteresting.value = response.data;
    console.log(newsInteresting.value);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});
</script>

<style lang="stylus">
.interesting-swiper
    height 400px
    margin-bottom 80px

    &__slide
        display flex
        flex-direction column
        justify-content flex-start
        padding 10px 20px
        margin-top 20px
        transition transform 0.3s ease, background-color 0.3s ease
        position relative
        z-index 1
        border-radius 20px
        height 85%


    &__slide:hover
        transform scale(1.05)
        background-color $firstMainColor
        z-index 10

    &__slide-img
        width 100%
        height 200px
        object-fit cover
        margin 10px 0
        border-radius 20px

    &__slide-header
        font-size 24px
        font-weight 400
        margin-top 10px
        margin-bottom 10px
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        overflow hidden

    &__slide-text
        font-size 18px
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        overflow hidden
</style>
