<template>
  <div class="auctions-category">
    <div class="auctions-category__string">
      <div
        class="image-wrapper auctions-category__one-left"
        @click="navigateToCategory('sport')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary1cut.png"
          alt="Left trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">спорт</div>
      </div>
      <div
        class="image-wrapper auctions-category__one-center"
        @click="navigateToCategory('premium')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary2cut.png"
          alt="Center parallelogram"
          class="auctions-category__layer"
        />
        <div class="image-text">премиум</div>
      </div>
      <div
        class="image-wrapper auctions-category__one-right"
        @click="navigateToCategory('germans')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary3cut.png"
          alt="Right trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">немцы</div>
      </div>
    </div>

    <div class="auctions-category__string">
      <div
        class="image-wrapper auctions-category__two-left"
        @click="navigateToCategory('suv')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary4cut.png"
          alt="Left trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">внедорожники</div>
      </div>
      <div
        class="image-wrapper auctions-category__two-center"
        @click="navigateToCategory('family')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary5cut.png"
          alt="Center parallelogram"
          class="auctions-category__layer"
        />
        <div class="image-text">для семьи</div>
      </div>
      <div
        class="image-wrapper auctions-category__two-right"
        @click="navigateToCategory('chinese')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary6cut.png"
          alt="Right trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">китайцы</div>
      </div>
    </div>

    <div class="auctions-category__string">
      <div
        class="image-wrapper auctions-category__three-left"
        @click="navigateToCategory('japanese')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary7cut.png"
          alt="Left trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">японцы</div>
      </div>
      <div
        class="image-wrapper auctions-category__three-center"
        @click="navigateToCategory('russian')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary8cut.png"
          alt="Center parallelogram"
          class="auctions-category__layer"
        />
        <div class="image-text">русские</div>
      </div>
      <div
        class="image-wrapper auctions-category__three-right"
        @click="navigateToCategory('electric')"
      >
        <img
          src="/src/assets/img/auctionGallary/gallary9cut.png"
          alt="Right trapezoid"
          class="auctions-category__layer"
        />
        <div class="image-text">кары</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToCategory(category) {
  router.push(`/auctions/${category}`);
}
</script>

<style lang="stylus" scoped>
.auctions-category
  display flex
  flex-direction column
  justify-content center
  min-height 65vh
  padding 40px 0
  background-color $secondMainColor

  &__string
    position relative
    height 160px

  &__layer
    width 100%
    height 100%
    display block
    transition filter 0.3s ease

  &__layer:hover
    filter brightness(50%)

.image-wrapper
  position absolute
  height 150px
  width 20vw
  overflow hidden
  cursor pointer

  &:hover .image-text
    opacity 1

.image-text
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  color white
  font-size 40px
  font-weight 700
  text-align center
  text-transform uppercase
  pointer-events none
  opacity 0
  transition opacity 0.3s ease

// Позиции для каждого блока
.auctions-category
  &__one-left
    left 80px
    top 0
    width 30vw

  &__one-center
    left 24.5vw
    top 0
    width 40vw

  &__one-right
    right 80px
    top 0
    width 40.65vw

  &__two-left
    left 80px
    top 0
    width 43vw

  &__two-center
    left 37.5vw
    top 0
    width 39vw

  &__two-right
    right 80px
    top 0
    width 28.65vw

  &__three-left
    left 80px
    top 0
    width 43vw

  &__three-center
    left 37.5vw
    top 0
    width 39vw

  &__three-right
    right 80px
    top 0
    width 28.65vw
</style>
