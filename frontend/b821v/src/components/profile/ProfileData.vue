<template>
  <div class="profile-data main-wrapper">
    <FormProfile />
    <div class="profile-data__change-profile">
      <img
        class="profile-data__change-profile-img"
        :src="imageSrc"
        alt="Аватар"
      />
      <UiButton variant="ghost" size="lg" @click="triggerFileInput">
        Редактировать
      </UiButton>
      <UiButton variant="redGhost" size="lg" @click="handleLogout">
        Выйти
      </UiButton>
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        @change="onFileChange"
        style="display: none"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import FormProfile from "/src/components/form/FormProfile.vue";
import UiButton from "/src/components/ui/UiButton.vue";
import { useUserStore } from "@/stores/user.js";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const fileInput = ref(null);
const imageUrl = ref("");

// Загружаем из userStore
const imageSrc = computed(
  () => imageUrl.value || userStore.avatarUrl || "/public/icon_profile.png"
);

function handleLogout() {
  userStore.clearAvatar();
  userStore.logout();
  router.push("/news");
}

function triggerFileInput() {
  fileInput.value.click();
}

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    imageUrl.value = objectURL;
    userStore.setAvatar(objectURL);
  }
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
