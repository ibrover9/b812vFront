<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-auth-user__group">
      <input
        class="form-auth-user__input"
        v-model="form.email"
        id="email"
        placeholder="Email"
      />
      <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
    </div>

    <div class="form-auth-user__group">
      <input
        class="form-auth-user__input"
        v-model="form.password"
        type="password"
        id="password"
        placeholder="Пароль"
      />
      <p v-if="errors.password" class="form-error">{{ errors.password }}</p>
    </div>

    <UiButton class="form-auth-user__button" size="lg"> Войти </UiButton>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import UiButton from "../ui/UiButton.vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

const errors = ref({
  email: "",
  password: "",
});

function validateForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasErrors = false;

  // сбрасываем ошибки
  errors.value.email = "";
  errors.value.password = "";

  // валидация email
  if (!props.form.email) {
    errors.value.email = "Email обязателен";
    hasErrors = true;
  } else if (!emailPattern.test(props.form.email)) {
    errors.value.email = "Введите корректный email";
    hasErrors = true;
  }

  // валидация пароля
  if (!props.form.password) {
    errors.value.password = "Пароль обязателен";
    hasErrors = true;
  } else if (props.form.password.length < 6) {
    errors.value.password = "Пароль должен быть не менее 6 символов";
    hasErrors = true;
  }

  return !hasErrors;
}

function handleSubmit() {
  if (validateForm()) {
    emit("submit");
  }
}
</script>

<style lang="stylus" scoped>
.form-auth-user
    display flex
    flex-direction column
    gap 15px

    &__group
        margin-bottom 20px
        display flex
        flex-direction column

    &__group:last-child
        margin-bottom 24px

    &__input
        padding 8px
        font-size 16px
        border 1px solid #ccc
        border-radius 4px
     &__button
        width 100%
        margin-top 40px
        display flex
        justify-content center
.form-error
  color red
  font-size 13px
  margin-top 4px
</style>
