<template>
  <div class="form-profile-editing">
    <template v-for="(field, index) in fields" :key="index">
      <div class="form-profile-editing__string">
        <strong class="form-profile-editing__title">{{ field.label }}</strong>
        <p class="form-profile-editing__text">{{ field.value }}</p>
      </div>
      <hr class="main-hr" v-if="index < fields.length - 1" />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const fields = computed(() => {
  if (userStore.role === "company") {
    return [
      { label: "Роль", value: userStore.role },
      { label: "Email", value: userStore.email },
      { label: "Номер телефона", value: userStore.phone },
      { label: "ИНН", value: userStore.inn },
      { label: "ФИО представителя", value: userStore.representativeFullName },
      {
        label: "Email подтверждён",
        value: userStore.emailVerified ? "Да" : "Нет",
      },
    ];
  } else {
    return [
      { label: "Роль", value: userStore.role },
      { label: "Имя", value: userStore.firstName },
      { label: "Фамилия", value: userStore.lastName },
      { label: "Email", value: userStore.email },
      { label: "Номер телефона", value: userStore.phone },
      {
        label: "Email подтверждён",
        value: userStore.emailVerified ? "Да" : "Нет",
      },
    ];
  }
});
</script>

<style lang="stylus">
.form-profile-editing
  &__string
    display grid
    grid-template-columns 1fr 1fr
    padding 20px 10px
    font-size 28px
    background-color white
    border-radius 6px
    transform-origin center center
    transition transform 0.3s ease, box-shadow 0.3s ease
    box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)

    &:hover
      transform scale(1.05)
      box-shadow 0 4px 8px rgba(0, 0, 0, 0.2)
</style>
