<template>
  <swiper
    :modules="[EffectCoverflow, Navigation, Pagination]"
    effect="coverflow"
    centeredSlides
    slidesPerView="auto"
    :initialSlide="1"
    :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1.5,
      slideShadows: false,
    }"
    navigation
    pagination
    class="dealsSwiper"
  >
    <swiper-slide v-for="(item, idx) in items" :key="idx">
      <div class="slide-content">
        <img :src="item.img" :alt="item.title" />
        <h3>{{ item.title }}</h3>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = ref([
  { img: "https://i.postimg.cc/nVCNDdNT/auction-Bv3.png", title: "Deal 1" },
  { img: "https://i.postimg.cc/k5TKq55M/auction-Bv2.png", title: "Deal 2" },
  { img: "https://i.postimg.cc/853vfnWq/auction-Bv1.png", title: "Deal 3" },
]);
</script>

<style lang="stylus" scoped>
.dealsSwiper
  width: 100%
  padding 50px 0

.swiper-slide
  background #fff
  border-radius 10px
  width 300px
  display flex
  justify-content center
  align-items center
  overflow hidden

.slide-content
  text-align center

.slide-content img
  display block
  width 100%
  height auto

.slide-content h3
  margin-top 10px
  font-size 1.2rem

/* Глобальные селекторы с обхватом для scoped */
:deep(.swiper-button-next),
:deep(.swiper-button-prev)
  color #000 !important

:deep(.swiper-pagination-bullet)
  background #000 !important

:deep(.swiper-pagination-bullet-active)
  opacity 1
</style>
