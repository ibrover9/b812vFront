<template>
  <div class="auctions-category">
    <div class="first-string">
      <!-- Левый «трапеция»-кусочек -->
      <img
        src="/src/assets/img/auctionGallary/gallary1cut.png"
        alt="Left trapezoid"
        class="first-string__layer first-string__one-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary2cut.png"
        alt="Center parallelogram"
        class="first-string__layer first-string__one-center"
      />

      <!-- Правый «трапеция»-кусочек (зеркально) -->
      <img
        src="/src/assets/img/auctionGallary/gallary3cut.png"
        alt="Right trapezoid"
        class="first-string__layer first-string__one-right"
      />
    </div>
    <div class="first-string">
      <!-- Левый «трапеция»-кусочек -->
      <img
        src="/src/assets/img/auctionGallary/gallary4cut.png"
        alt="Left trapezoid"
        class="first-string__layer first-string__two-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary5cut.png"
        alt="Center parallelogram"
        class="first-string__layer first-string__two-center"
      />

      <!-- Правый «трапеция»-кусочек (зеркально) -->
      <img
        src="/src/assets/img/auctionGallary/gallary6cut.png"
        alt="Right trapezoid"
        class="first-string__layer first-string__two-right"
      />
    </div>
    <div class="first-string">
      <!-- Левый «трапеция»-кусочек -->
      <img
        src="/src/assets/img/auctionGallary/gallary7cut.png"
        alt="Left trapezoid"
        class="first-string__layer first-string__three-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary8cut.png"
        alt="Center parallelogram"
        class="first-string__layer first-string__three-center"
      />

      <!-- Правый «трапеция»-кусочек (зеркально) -->
      <img
        src="/src/assets/img/auctionGallary/gallary9cut.png"
        alt="Right trapezoid"
        class="first-string__layer first-string__three-right"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  srcLeft: {
    type: String,
    required: true,
  },
  srcCenter: {
    type: String,
    required: true,
  },
  srcRight: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 540,
  },
  height: {
    type: Number,
    default: 300,
  },
});
</script>

<style lang="stylus" scoped>
.auctions-category
  padding 40px 0
  background-color $secondMainColor
.first-string
    position relative
    height 160px
    &__layer
        position absolute
        width 20vw
        height 150px
    &__one-left
        left 80px
        top 0
        width 30vw
    &__one-center
        width 40vw
        left 24.5vw
        top 0
    &__one-right
        width 40.65vw
        right 80px
        top 0
     &__two-left
        left 80px
        top 0
        width 43vw
    &__two-center
        width 39vw
        left 37.5vw
        top 0
    &__two-right
        width 28.65vw
        right 80px
        top 0
     &__three-left
        left 80px
        top 0
        width 43vw
    &__three-center
        width 39vw
        left 37.5vw
        top 0
    &__three-right
        width 28.65vw
        right 80px
        top 0
.first-string__layer
  transition filter 0.3s ease // Плавность анимации

.first-string__layer:hover
  filter brightness(50%) // Затемнение
</style>
