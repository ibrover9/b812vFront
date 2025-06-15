<template>
  <form class="form-reg-user" @submit.prevent="onSubmit">
    <div class="form-reg-user__field">
      <input
        placeholder="Введите код из письма"
        v-model="code"
        class="form-reg-user__input"
        type="text"
        maxlength="6"
        required
      />
    </div>

    <UiButton class="form-reg-user__button" size="lg" type="submit">
      Подтвердить
    </UiButton>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import UiButton from "../ui/UiButton.vue";

const emit = defineEmits(["confirm"]);
const code = ref("");

function onSubmit() {
  emit("confirm", code.value);
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

.form-reg-user__button
  margin-top 20px
  display flex
  justify-content center
</style>
