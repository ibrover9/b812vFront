<template>
  <div class="profile-data main-wrapper">
    <FormProfile />
    <div class="profile-data__change-profile">
      <img
        class="profile-data__change-profile-img"
        src="/public/icon_profile.png"
        alt=""
      />
      <UiButton variant="ghost" size="lg"> Редактировать </UiButton>
      <UiButton variant="redGhost" size="lg" @click="handleLogout">
        Выйти
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import FormProfile from "/src/components/form/FormProfile.vue";
import UiButton from "/src/components/ui/UiButton.vue";
import { useUserStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
const router = useRouter();

const userStore = useUserStore();

function handleLogout() {
  console.log("logout");
  userStore.logout();
  router.push("/news");
}
</script>

<style lang="stylus">
.profile-data
    padding-top 40px !important
    padding-bottom 40px !important
    display grid
    align-items: center;
    grid-template-columns 1fr 1fr
    &__change-profile
        display flex
        flex-direction column
        justify-content center
        align-items flex-end
        gap 20px
    &__change-profile-img
        width 205px
        height 205px
        object-fit: cover;
        object-position: center;
        border-radius 70%
</style>
