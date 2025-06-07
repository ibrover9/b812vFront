<template>
  <div class="auctions-category">
    <div class="first-string">
      <div class="image-wrapper first-string__one-left">
        <img
          src="/src/assets/img/auctionGallary/gallary1cut.png"
          alt="Left trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 1</div>
      </div>
      <div class="image-wrapper first-string__one-center">
        <img
          src="/src/assets/img/auctionGallary/gallary2cut.png"
          alt="Center parallelogram"
          class="first-string__layer"
        />
        <div class="image-text">Текст 2</div>
      </div>
      <div class="image-wrapper first-string__one-right">
        <img
          src="/src/assets/img/auctionGallary/gallary3cut.png"
          alt="Right trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 3</div>
      </div>
    </div>

    <div class="first-string">
      <div class="image-wrapper first-string__two-left">
        <img
          src="/src/assets/img/auctionGallary/gallary4cut.png"
          alt="Left trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 4</div>
      </div>
      <div class="image-wrapper first-string__two-center">
        <img
          src="/src/assets/img/auctionGallary/gallary5cut.png"
          alt="Center parallelogram"
          class="first-string__layer"
        />
        <div class="image-text">Текст 5</div>
      </div>
      <div class="image-wrapper first-string__two-right">
        <img
          src="/src/assets/img/auctionGallary/gallary6cut.png"
          alt="Right trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 6</div>
      </div>
    </div>

    <div class="first-string">
      <div class="image-wrapper first-string__three-left">
        <img
          src="/src/assets/img/auctionGallary/gallary7cut.png"
          alt="Left trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 7</div>
      </div>
      <div class="image-wrapper first-string__three-center">
        <img
          src="/src/assets/img/auctionGallary/gallary8cut.png"
          alt="Center parallelogram"
          class="first-string__layer"
        />
        <div class="image-text">Текст 8</div>
      </div>
      <div class="image-wrapper first-string__three-right">
        <img
          src="/src/assets/img/auctionGallary/gallary9cut.png"
          alt="Right trapezoid"
          class="first-string__layer"
        />
        <div class="image-text">Текст 9</div>
      </div>
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

.image-wrapper
  position absolute
  display inline-block
  height 150px
  width 20vw

  img
    width 100%
    height 100%
    display block
    transition filter 0.3s ease

  &:hover img
    filter brightness(50%)

.image-text
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  color white
  font-size 24px
  font-weight bold
  text-align center
  pointer-events none

// Позиции изображений
.first-string__one-left
  left 80px
  width 30vw
  top 0

.first-string__one-center
  left 24.5vw
  width 40vw
  top 0

.first-string__one-right
  right 80px
  width 40.65vw
  top 0

.first-string__two-left
  left 80px
  width 43vw
  top 0

.first-string__two-center
  left 37.5vw
  width 39vw
  top 0

.first-string__two-right
  right 80px
  width 28.65vw
  top 0

.first-string__three-left
  left 80px
  width 43vw
  top 0

.first-string__three-center
  left 37.5vw
  width 39vw
  top 0

.first-string__three-right
  right 80px
  width 28.65vw
  top 0
</style>
