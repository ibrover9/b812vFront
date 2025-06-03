<template>
  <div class="auctions-category">
    <div class="auctions-category__string">
      <img
        src="/src/assets/img/auctionGallary/gallary1cut.png"
        alt="Left trapezoid"
        class="auctions-category__layer auctions-category__one-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary2cut.png"
        alt="Center parallelogram"
        class="auctions-category__layer auctions-category__one-center"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary3cut.png"
        alt="Right trapezoid"
        class="auctions-category__layer auctions-category__one-right"
      />
    </div>
    <div class="auctions-category__string">
      <img
        src="/src/assets/img/auctionGallary/gallary4cut.png"
        alt="Left trapezoid"
        class="auctions-category__layer auctions-category__two-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary5cut.png"
        alt="Center parallelogram"
        class="auctions-category__layer auctions-category__two-center"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary6cut.png"
        alt="Right trapezoid"
        class="auctions-category__layer auctions-category__two-right"
      />
    </div>
    <div class="auctions-category__string">
      <img
        src="/src/assets/img/auctionGallary/gallary7cut.png"
        alt="Left trapezoid"
        class="auctions-category__layer auctions-category__three-left"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary8cut.png"
        alt="Center parallelogram"
        class="auctions-category__layer auctions-category__three-center"
      />

      <img
        src="/src/assets/img/auctionGallary/gallary9cut.png"
        alt="Right trapezoid"
        class="auctions-category__layer auctions-category__three-right"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="stylus" scoped>
.auctions-category
    padding 40px 0
    background-color $secondMainColor
    &__string
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
