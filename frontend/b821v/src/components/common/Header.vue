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
      <div class="header__right-block">
        <UiIcon name="profile" class="header__profile" />
        <UiBurger />
      </div>
    </div>
    <hr class="main-hr" />
  </div>
</template>

<script>
import UiBurger from "../ui/UiBurger.vue";
import UiIcon from "../ui/UiIcon.vue";

export default {
  name: "Header",
  components: {
    UiIcon,
    UiBurger,
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

    &__right-block
        display flex
        align-items center
        gap 20px
</style>
