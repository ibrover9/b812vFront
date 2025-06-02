<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="form-auth-company__group">
      <input
        class="form-auth-company__input"
        v-model="form.email"
        type="email"
        id="email"
        required
      />
    </div>

    <div class="form-auth-company__group">
      <input
        class="form-auth-company__input"
        v-model="form.password"
        type="password"
        id="password"
        required
      />
    </div>

    <UiButton class="form-auth-company__button" size="lg" @click="handleClick">
      Войти
    </UiButton>
  </form>
</template>

<script setup>
import UiButton from "../ui/UiButton.vue";

defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

function handleSubmit() {
  emit("submit");
}
</script>

<style lang="stylus" scoped>
.form-auth-company
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
</style>
