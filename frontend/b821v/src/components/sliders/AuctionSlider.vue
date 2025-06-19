<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(img, idx) in images" :key="img" class="slide">
        <div class="slide-wrapper">
          <img :src="img" alt="Slide" class="slide-image" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { onMounted } from "vue";

import "swiper/css";
import "swiper/css/pagination";

const { images } = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  console.log("images (spread):", [...images]);
});
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
