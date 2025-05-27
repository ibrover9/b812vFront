<template class="header">
  <div class="header__container main-wrapper">
    <UiIcon name="logo-white" />
    <div class="header__list"></div>
    <img class="header__profile" src="" alt="" />
  </div>
</template>

<script>
import UiIcon from "../ui/UiIcon.vue";

export default {
  name: "Header",
  components: {
    UiIcon,
  },
};
</script>

<style lang="stylus">
.header
    &__container
        height: 70px
        background-color:$secondMainColor
        color:$thirdMainColor
</style>
