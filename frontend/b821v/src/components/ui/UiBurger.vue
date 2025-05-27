<template>
  <button
    class="burger"
    @click="toggleStateBurger"
    :aria-expanded="isOpen.toString()"
    aria-label="Toggle menu"
  >
    <span
      class="burger__line"
      :class="{ 'burger__line--top': true, 'burger__line--open': isOpen }"
    ></span>
    <span
      class="burger__line"
      :class="{ 'burger__line--middle': true, 'burger__line--open': isOpen }"
    ></span>
    <span
      class="burger__line"
      :class="{ 'burger__line--bottom': true, 'burger__line--open': isOpen }"
    ></span>
  </button>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleStateBurger = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="stylus" scoped>
.burger
    position: relative
    width: 40px
    height: 40px
    display: flex
    align-items: center
    justify-content: center
    background: transparent
    border: none
    cursor: pointer
    padding: 0

    &__line
        position: absolute
        width: 100%
        height: 3px
        background-color: $thirdMainColor
        border-radius: 2px
        transition: transform 0.3s ease, opacity 0.3s ease

    &__line--top
        top: 6px

    &__line--middle
        top: 50%
        transform: translateY(-50%)

    &__line--bottom
        bottom: 6px

    &__line--open.burger__line--top
        transform: rotate(45deg)
        top: 50%
        transform-origin: center

    &__line--open.burger__line--middle
        opacity: 0

    &__line--open.burger__line--bottom
        transform: rotate(-45deg)
        bottom: auto
        top: 50%
        transform-origin: center
</style>
