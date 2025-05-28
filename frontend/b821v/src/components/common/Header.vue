<template class="header">
  <div>
    <div class="header__container main-wrapper">
      <UiIcon name="logo-white" class="header__logo" />
      <ul class="header__list">
        <li
          v-for="item in headerItems"
          :key="item.route"
          class="header__list-item"
        >
          <router-link :to="item.route" class="header__link">
            {{ item.label }}
          </router-link>
        </li>
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
  data() {
    return {
      headerItems: [
        { label: "Новости", route: "/news" },
        { label: "Аукционы", route: "/auctions" },
        { label: "Оформление заказа", route: "/orders" },
        { label: "Профиль", route: "/profile" },
      ],
    };
  },
};
</script>

<style lang="stylus">
.header
    &__container
        height: 70px
        background-color: $secondMainColor
        color: $thirdMainColor
        display: flex
        align-items: center
        justify-content: space-between

    &__logo
        height: 41px

    &__profile
        height: 49px

    &__list
        display: flex
        align-items: center
        justify-content: space-between
        gap: 6vw
        padding: 0
        margin: 0

    &__list-item
        list-style-type: none

    &__link
        font-size: 16px
        text-transform: uppercase
        text-decoration: none
        color: inherit

    &__right-block
        display: flex
        align-items: center
        gap: 20px
</style>
