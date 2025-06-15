<template>
  <form class="form-reg-copany" @submit.prevent="onSubmit">
    <div class="form-reg-copany__field">
      <input
        placeholder="example@mail.com"
        v-model="form.email"
        class="form-reg-copany__input"
        type="email"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="представитель ФИО"
        v-model="form.representativeFullName"
        class="form-reg-copany__input"
        type="representativeFullName"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="+7 (___) ___-__-__"
        v-model="form.phone"
        v-mask="'+7 (###) ###-##-##'"
        class="form-reg-copany__input"
        type="phone"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="сompany-name"
        v-model="form.organizationName"
        class="form-reg-copany__input"
        type="text"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="INN"
        v-model="form.inn"
        class="form-reg-copany__input"
        type="text"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="password"
        v-model="form.password"
        class="form-reg-copany__input"
        type="password"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="confirm-password"
        v-model="form.confirmPassword"
        class="form-reg-copany__input"
        type="password"
        required
      />
    </div>

    <!-- Добавленные переключатели -->
    <div class="form-reg-copany__toggles">
      <label class="form-reg-copany__toggle-switch">
        <input
          type="checkbox"
          v-model="form.termsAccepted"
          class="form-reg-copany__toggle-checkbox"
        />
        <span class="form-reg-copany__slider"></span>
        <span class="form-reg-copany__label-text">Согласие с условиями</span>
      </label>

      <label class="form-reg-copany__toggle-switch">
        <input
          type="checkbox"
          v-model="form.authorizedRepresentative"
          class="form-reg-copany__toggle-checkbox"
        />
        <span class="form-reg-copany__slider"></span>
        <span class="form-reg-copany__label-text">Уполномоченное лицо</span>
      </label>
    </div>

    <UiButton class="form-reg-copany__button" size="lg" @click="onSubmit">
      Зарегистрироваться
    </UiButton>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import UiButton from "/src/components/ui/UiButton.vue";

const props = defineProps({
  form: Object,
});

const emit = defineEmits(["submit"]);

function onSubmit() {
  if (props.form.password !== props.form.confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }

  emit("submit");
}
</script>

<style lang="stylus" scoped>
.form-reg-copany
  display flex
  flex-direction column
  margin-top 20px

  &__field
    margin-bottom 20px

  &__field:last-child
    margin-bottom 24px

  &__label
    display block
    margin-bottom 6px
    font-size 0.875rem
    color #333

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

  &__button
    margin-top 20px
    display flex
    justify-content center

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

    &::before
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

    &::before
      transform translateX(20px)

  &__label-text
    font-size 16px
    color #333
</style>
