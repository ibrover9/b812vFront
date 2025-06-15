<template>
  <form class="form-reg-company" @submit.prevent="handleSubmit">
    <div class="form-reg-company__field">
      <input
        placeholder="example@mail.com"
        v-model="form.email"
        class="form-reg-company__input"
      />
      <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="ФИО представителя"
        v-model="form.representativeFullName"
        class="form-reg-company__input"
        type="text"
      />
      <p v-if="errors.representativeFullName" class="form-error">
        {{ errors.representativeFullName }}
      </p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="+7 (___) ___-__-__"
        class="form-reg-company__input"
        v-model="form.phone"
        v-mask="'+7 (###) ###-##-##'"
        type="tel"
      />
      <p v-if="errors.phone" class="form-error">{{ errors.phone }}</p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="Название компании"
        v-model="form.organizationName"
        class="form-reg-company__input"
        type="text"
      />
      <p v-if="errors.organizationName" class="form-error">
        {{ errors.organizationName }}
      </p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="ИНН"
        v-model="form.inn"
        class="form-reg-company__input"
        type="text"
      />
      <p v-if="errors.inn" class="form-error">{{ errors.inn }}</p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="Пароль"
        v-model="form.password"
        class="form-reg-company__input"
        type="password"
      />
      <p v-if="errors.password" class="form-error">{{ errors.password }}</p>
    </div>

    <div class="form-reg-company__field">
      <input
        placeholder="Подтвердите пароль"
        v-model="form.confirmPassword"
        class="form-reg-company__input"
        type="password"
      />
      <p v-if="errors.confirmPassword" class="form-error">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <div class="form-reg-company__toggles">
      <label class="form-reg-company__toggle-switch">
        <input
          type="checkbox"
          v-model="form.termsAccepted"
          class="form-reg-company__toggle-checkbox"
        />
        <span class="form-reg-company__slider"></span>
        <span class="form-reg-company__label-text">Согласие с условиями</span>
      </label>
      <p v-if="errors.termsAccepted" class="form-error">
        {{ errors.termsAccepted }}
      </p>

      <label class="form-reg-company__toggle-switch">
        <input
          type="checkbox"
          v-model="form.authorizedRepresentative"
          class="form-reg-company__toggle-checkbox"
        />
        <span class="form-reg-company__slider"></span>
        <span class="form-reg-company__label-text">Уполномоченное лицо</span>
      </label>
      <p v-if="errors.authorizedRepresentative" class="form-error">
        {{ errors.authorizedRepresentative }}
      </p>
    </div>

    <UiButton class="form-reg-company__button" size="lg" type="submit">
      Зарегистрироваться
    </UiButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import UiButton from "/src/components/ui/UiButton.vue";

const props = defineProps({ form: { type: Object, required: true } });
const emit = defineEmits(["submit"]);

const errors = ref({
  email: "",
  representativeFullName: "",
  phone: "",
  organizationName: "",
  inn: "",
  password: "",
  confirmPassword: "",
  termsAccepted: "",
  authorizedRepresentative: "",
});

function validateForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasErrors = false;

  // Clear previous errors
  Object.keys(errors.value).forEach((key) => (errors.value[key] = ""));

  if (!props.form.email) {
    errors.value.email = "Email обязателен";
    hasErrors = true;
  } else if (!emailPattern.test(props.form.email)) {
    errors.value.email = "Введите корректный email";
    hasErrors = true;
  }

  if (!props.form.representativeFullName) {
    errors.value.representativeFullName = "ФИО представителя обязательно";
    hasErrors = true;
  }

  if (!props.form.phone) {
    errors.value.phone = "Телефон обязателен";
    hasErrors = true;
  } else if (props.form.phone.replace(/[^\d]/g, "").length !== 11) {
    errors.value.phone = "Введите полный номер телефона";
    hasErrors = true;
  }

  if (!props.form.organizationName) {
    errors.value.organizationName = "Название компании обязательно";
    hasErrors = true;
  }

  if (!props.form.inn) {
    errors.value.inn = "ИНН обязателен";
    hasErrors = true;
  } else if (!/^\d{10,12}$/.test(props.form.inn)) {
    errors.value.inn = "ИНН должен содержать 10 или 12 цифр";
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
    errors.value.termsAccepted = "Необходимо согласие с условиями";
    hasErrors = true;
  }

  if (!props.form.authorizedRepresentative) {
    errors.value.authorizedRepresentative =
      "Необходимо отметить уполномоченное лицо";
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
.form-reg-company
  display flex
  flex-direction column
  margin-top 20px

  &__field
    margin-bottom 20px

  &__input
    width 95%
    padding 8px 12px
    font-size 18px
    border 1px solid #ccc
    border-radius 4px
    outline none
    transition border-color 0.2s

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

.form-reg-company__button
  margin-top 20px
  display flex
  justify-content center

.form-error
  color red
  font-size 13px
  margin-top 4px
</style>
