<template>
  <div class="form-authorization">
    <form class="form-authorization__form" @submit.prevent="submitForm">
      <div class="form-authorization__field">
        <label for="email" class="form-authorization__label">Email</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          required
          class="form-authorization__input"
          placeholder="example@mail.com"
        />
      </div>

      <div class="form-authorization__field">
        <label for="password" class="form-authorization__label">Пароль</label>
        <input
          id="password"
          type="password"
          v-model="form.password"
          required
          class="form-authorization__input"
          placeholder="••••••••"
        />
      </div>

      <div class="form-authorization__field">
        <label for="confirmPassword" class="form-authorization__label">
          Подтвердите пароль
        </label>
        <input
          id="confirmPassword"
          type="password"
          v-model="form.confirmPassword"
          required
          class="form-authorization__input"
          placeholder="••••••••"
        />
      </div>

      <button type="submit" class="form-authorization__submit">
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

function submitForm() {
  emit("submit");
}
</script>

<style lang="stylus" scoped>
.form-authorization
    &__form
        display flex
        flex-direction column

    &__field
        margin-bottom 16px

    &:last-child
        margin-bottom 24px

    &__label
        display block
        margin-bottom 6px
        font-size 24px
        color #333

    &__input
        width 100%
        padding 8px 12px
        font-size 1rem
        border 1px solid #ccc
        border-radius 4px
        outline none
        transition border-color 0.2s

    &__input:focus
        border-color #66afe9

    &__submit
        padding 10px 16px
        font-size 1rem
        font-weight 500
        background #42b983
        color #fff
        border none
        border-radius 4px
        cursor pointer
        transition background 0.2s

    &__submit:hover
        background #389e70
</style>
