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
        placeholder="сompany-name"
        v-model="form.companyName"
        class="form-reg-copany__input"
        type="text"
        required
      />
    </div>

    <div class="form-reg-copany__field">
      <input
        placeholder="INN"
        v-model="form.taxId"
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
    <UiButton class="form-reg-copany__button" size="lg" @click="handleClick">
      Зарегистрироваться
    </UiButton>
    <!-- <button type="submit" class="modal-auth__submit">Зарегистрироваться</button> -->
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import UiButton from "/src/components/ui/UiButton.vue";

const props = defineProps({
  form: Object,
});

const emit = defineEmits(["submit"]);

function onSubmit() {
  // Прокидываем событие вверх
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
</style>
