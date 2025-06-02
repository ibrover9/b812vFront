<template class="header">
  <div>
    <ModalAuth v-model="isModalVisible" @submit="handleRegister" />
    <div class="header__container main-wrapper">
      <router-link to="/" class="header__logo">
        <UiIcon name="logo-white" class="header__logo" />
      </router-link>
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
        <UiIcon name="profile" class="header__profile" @click="openModal" />
        <UiBurger />
      </div>
    </div>
    <hr class="main-hr" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import UiBurger from "../ui/UiBurger.vue";
import UiIcon from "../ui/UiIcon.vue";
import ModalAuth from "../modal/ModalAuth.vue";

const isModalVisible = ref(false);

function openModal() {
  isModalVisible.value = true;
}

function handleRegister(formData) {
  console.log("Данные для регистрации:", formData);
}

const headerItems = ref([
  { label: "Новости", route: "/news" },
  { label: "Аукционы", route: "/auctions" },
  { label: "Оформление заказа", route: "/orders" },
  { label: "Профиль", route: "/profile" },
]);
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
