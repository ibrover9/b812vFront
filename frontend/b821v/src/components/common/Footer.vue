<template>
  <div class="footer main-wrapper">
    <hr class="main-hr" />
    <div class="footer__container">
      <UiIcon name="logo-white" class="footer__logo" />
      <ul class="footer__list">
        <li class="footer__list-item">
          <UiIcon name="phone" class="footer__item-icon" />
          <div class="footer__item-label">Многоканальный телефон:</div>
          <div>+7 (777) 777-77-77</div>
        </li>
        <li class="footer__list-item">
          <UiIcon name="mail" class="footer__item-icon" />
          <div class="footer__item-label">E-mail:</div>
          <div>artur.20166102@mail.ru</div>
        </li>
        <li class="footer__list-item">
          <UiIcon name="profile2" class="footer__item-icon" />
          <div class="footer__item-label">Кабинет клиента:</div>
          <div class="footer__item-link">войти в личный кабинет</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UiIcon from "../ui/UiIcon.vue";

export default {
  name: "Footer",
  components: {
    UiIcon,
  },
};
</script>

<style lang="stylus">
.footer
    background-color:$secondMainColor
    &__container
        height 20vh
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
        display flex
        flex-direction column
        gap 10px
    &__item-icon
        height 30px
        align-self flex-start
    &__item-link
        line-height 25px
</style>
