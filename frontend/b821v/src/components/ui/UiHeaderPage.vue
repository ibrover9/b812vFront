<template>
  <div class="ui-header-page">
    <ul class="ui-header-page__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="ui-header-page__list-item"
        @click="scrollToSection(item.targetId)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style lang="stylus" scoped>
.ui-header-page
    background-color: $secondMainColor
    &__list
        list-style none
        display flex
        justify-content center
        gap 20px
        padding 20px 0
        margin 0

    &__list-item
        cursor pointer
        padding 10px 15px
        border-radius 5px
        transition background 0.3s
        color $thirdMainColor
    &__list-item:hover
        background-color $hoverBgBtnBlack
</style>
