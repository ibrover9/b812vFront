<template>
  <form class="form-reg-user" @submit.prevent="onSubmit">
    <div class="form-reg-user__field">
      <input
        placeholder="example@mail.com"
        v-model="form.email"
        class="form-reg-user__input"
        type="email"
        required
      />
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="+7 (___) ___-__-__"
        class="form-reg-user__input"
        v-model="form.phone"
        v-mask="'+7 (###) ###-##-##'"
        type="tel"
        required
      />
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="password"
        v-model="form.password"
        class="form-reg-user__input"
        type="password"
        required
      />
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="confirm-password"
        v-model="form.confirmPassword"
        class="form-reg-user__input"
        type="password"
        required
      />
    </div>

    <div class="form-reg-user__field">
      <input
        placeholder="name"
        v-model="form.name"
        class="form-reg-user__input"
        type="text"
        required
      />
    </div>

    <!-- Новый стиль: переключатели -->
    <div class="form-reg-user__toggles">
      <label class="form-reg-user__toggle-switch">
        <input
          class="form-reg-user__toggle-checkbox"
          type="checkbox"
          v-model="agreeTerms"
        />
        <span class="form-reg-user__slider"></span>
        <span class="form-reg-user__label-text">Согласие с правилами</span>
      </label>
    </div>

    <UiButton class="form-reg-user__button" size="lg" type="submit">
      Зарегистрироваться
    </UiButton>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import UiButton from "../ui/UiButton.vue";

const props = defineProps({ form: Object });
const emit = defineEmits(["submit"]);

// Состояния переключателей
const agreeTerms = ref(false);

function onSubmit() {
  emit("submit", {
    agreeTerms: agreeTerms.value,
  });
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
    margin-bottom: 20px

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
</style>
