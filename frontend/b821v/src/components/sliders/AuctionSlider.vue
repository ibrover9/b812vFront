<template>
  <div class="slider-wrapper">
    <swiper
      :modules="[Pagination]"
      :pagination="{
        clickable: true,
        el: paginationRef,
      }"
      @swiper="onSwiper"
      class="custom-swiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index" class="slide">
        <div class="slide-wrapper">
          <img :src="image" alt="Slide" class="slide-image" />
        </div>
      </swiper-slide>
    </swiper>
    <div ref="paginationRef" class="custom-pagination"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

const images = [
  "/auction-slide-1.png",
  "/auction-slide-2.png",
  "/auction-slide-3.png",
];

const paginationRef = ref(null);

const onSwiper = (swiper) => {
  swiper.pagination.render();
  swiper.pagination.update();
};
</script>

<style scoped>
.slider-wrapper {
  max-width: 43vw;
  position: relative;
}

.custom-swiper {
  border-radius: 12px;
  overflow: hidden;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-pagination {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 1;
  transition: background 0.3s;
}

.swiper-pagination-bullet-active {
  background: white;
}
</style>
