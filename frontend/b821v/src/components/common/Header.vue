<template class="header">
  <div>
    <div class="header__container main-wrapper">
      <UiIcon name="logo-white" class="header__logo" />
      <ul class="header__list">
        <li class="header__list-item">Новости</li>
        <li class="header__list-item">Аукционы</li>
        <li class="header__list-item">Оформление заказа</li>
        <li class="header__list-item">Профиль</li>
      </ul>
      <UiIcon name="profile" class="header__profile" />
    </div>
    <hr class="main-hr" />
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
        display flex
        align-items: center
        justify-content space-between
    &__logo
        height 41px
    &__profile
        height 49px
    &__list
        display flex
        align-items center
        justify-content space-between
        gap 6vw
    &__list-item
      font-size 16px
      text-transform uppercase
      text-decoration none;
      list-style-type none;
</style>
