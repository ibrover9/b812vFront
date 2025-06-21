<template class="header">
  <div>
    <ModalAuth v-model="isModalVisible" />
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
          <span
            v-if="item.requiresAuth && !userStore.isLoggedIn"
            class="header__link header__link--disabled"
            @click="openModal"
          >
            {{ item.label }}
          </span>
          <router-link v-else :to="item.route" class="header__link">
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <div class="header__right-block">
        <component
          :is="userStore.isLoggedIn ? 'router-link' : 'div'"
          :to="userStore.isLoggedIn ? '/profile' : null"
        >
          <UiIcon
            name="profile"
            class="header__profile"
            @click="handleProfileClick"
          />
        </component>
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
import { useUserStore } from "@/stores/user"; // укажи актуальный путь

const userStore = useUserStore();
const isModalVisible = ref(false);

function openModal() {
  isModalVisible.value = true;
}

function handleProfileClick(event) {
  if (!userStore.isLoggedIn) {
    event.preventDefault(); // отменяет переход, если обёрнут в <router-link>
    openModal();
  }
}

const headerItems = ref([
  { label: "Новости", route: "/news", requiresAuth: false },
  { label: "Аукционы", route: "/auctions-categories", requiresAuth: true },
  { label: "Оформление заказа", route: "/orders", requiresAuth: true },
  { label: "Профиль", route: "/profile", requiresAuth: true },
]);
</script>

<style lang="stylus">
.header
  &__container
    height: 10vh
    background-color: $secondMainColor
    color: $thirdMainColor
    display: flex
    align-items: center
    justify-content: space-between

  &__logo
    height: 41px

  &__profile
    height: 49px
    cursor: pointer

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
    cursor: pointer

  &__link--disabled
    color: gray
    cursor: not-allowed
    pointer-events: none

  &__right-block
    display: flex
    align-items: center
    gap: 20px
</style>
