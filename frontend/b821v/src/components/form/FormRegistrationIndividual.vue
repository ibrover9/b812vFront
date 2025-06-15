<template>
  <form class="form-reg-user" @submit.prevent="handleSubmit">
    <div class="form-reg-user__field">
      <input
        placeholder="First Name"
        v-model="form.firstName"
        class="form-reg-user__input"
        type="text"
      />
      <p v-if="errors.firstName" class="form-error">{{ errors.firstName }}</p>
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="Last Name"
        v-model="form.lastName"
        class="form-reg-user__input"
        type="text"
      />
      <p v-if="errors.lastName" class="form-error">{{ errors.lastName }}</p>
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="example@mail.com"
        v-model="form.email"
        class="form-reg-user__input"
      />
      <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="+7 (___) ___-__-__"
        class="form-reg-user__input"
        v-model="form.phone"
        v-mask="'+7 (###) ###-##-##'"
        type="tel"
      />
      <p v-if="errors.phone" class="form-error">{{ errors.phone }}</p>
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="Password"
        v-model="form.password"
        class="form-reg-user__input"
        type="password"
      />
      <p v-if="errors.password" class="form-error">{{ errors.password }}</p>
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="Confirm Password"
        v-model="form.confirmPassword"
        class="form-reg-user__input"
        type="password"
      />
      <p v-if="errors.confirmPassword" class="form-error">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <div class="form-reg-user__toggles">
      <label class="form-reg-user__toggle-switch">
        <input
          class="form-reg-user__toggle-checkbox"
          type="checkbox"
          v-model="form.termsAccepted"
        />
        <span class="form-reg-user__slider"></span>
        <span class="form-reg-user__label-text">Согласие с правилами</span>
      </label>
      <p v-if="errors.termsAccepted" class="form-error">
        {{ errors.termsAccepted }}
      </p>
    </div>

    <UiButton class="form-reg-user__button" size="lg" type="submit">
      Зарегистрироваться
    </UiButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import UiButton from "../ui/UiButton.vue";

const props = defineProps({ form: { type: Object, required: true } });
const emit = defineEmits(["submit"]);

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  termsAccepted: "",
});

function validateForm() {
  // email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasErrors = false;

  // reset errors
  Object.keys(errors.value).forEach((key) => (errors.value[key] = ""));

  if (!props.form.firstName) {
    errors.value.firstName = "Имя обязательно";
    hasErrors = true;
  }
  if (!props.form.lastName) {
    errors.value.lastName = "Фамилия обязательна";
    hasErrors = true;
  }
  if (!props.form.email) {
    errors.value.email = "Email обязателен";
    hasErrors = true;
  } else if (!emailPattern.test(props.form.email)) {
    errors.value.email = "Введите корректный email";
    hasErrors = true;
  }
  if (!props.form.phone) {
    errors.value.phone = "Телефон обязателен";
    hasErrors = true;
  } else if (props.form.phone.replace(/[^\d]/g, "").length !== 11) {
    errors.value.phone = "Введите полный номер телефона";
    hasErrors = true;
  }
  if (!props.form.password) {
    errors.value.password = "Пароль обязателен";
    hasErrors = true;
  } else if (props.form.password.length < 6) {
    errors.value.password = "Пароль должен содержать не менее 6 символов";
    hasErrors = true;
  }
  if (!props.form.confirmPassword) {
    errors.value.confirmPassword = "Нужно подтвердить пароль";
    hasErrors = true;
  } else if (props.form.confirmPassword !== props.form.password) {
    errors.value.confirmPassword = "Пароли не совпадают";
    hasErrors = true;
  }
  if (!props.form.termsAccepted) {
    errors.value.termsAccepted = "Необходимо согласие с правилами";
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
.form-reg-user
  display flex
  flex-direction column
  margin-top 20px

  &__field
    margin-bottom 20px

  &__input
    width 94%
    padding 8px 12px
    font-size 18px
    border 1px solid #ccc
    border-radius 8px
    outline none
    transition 0.2s

  &__input:focus
    border-color #66afe9

  &__toggles
    display flex
    flex-direction column
    gap 16px
    margin-bottom 20px

  &__toggle-switch
    position relative
    display flex
    align-items center
    cursor pointer
    user-select none

  &__toggle-checkbox
    position absolute
    opacity 0
    width 0
    height 0

  &__slider
    position relative
    width 40px
    height 20px
    background-color #ccc
    border-radius 34px
    margin-right 12px
    transition 0.3s

  &__slider::before
    content ''
    position absolute
    height 16px
    width 16px
    left 2px
    bottom 2px
    background-color $secondMainColor
    border-radius 50%
    transition 0.3s

  &__toggle-checkbox:checked + &__slider
    background-color $firstMainColor

  &__toggle-checkbox:checked + &__slider::before
    transform translateX(20px)

  &__label-text
    font-size 16px
    color #333

.form-reg-user__button
  margin-top 20px
  display flex
  justify-content center

.form-error
  color red
  font-size 13px
  margin-top 4px
</style>
