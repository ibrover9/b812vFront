<template>
  <div class="form-profile-editing">
    <template v-for="(field, index) in editableFields" :key="index">
      <div class="form-profile-editing__string">
        <strong class="form-profile-editing__title">{{ field.label }}</strong>

        <!-- Двойной клик включает редактирование -->
        <div @dblclick="enableEdit(index)">
          <template v-if="field.editing">
            <input
              v-model="field.value"
              @blur="disableEdit(index)"
              @keyup.enter="disableEdit(index)"
              class="form-profile-editing__input"
              autofocus
            />
          </template>
          <template v-else>
            <p class="form-profile-editing__text">{{ field.value }}</p>
          </template>
        </div>
      </div>
      <hr class="main-hr" v-if="index < editableFields.length - 1" />
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

// Создаем реактивный массив полей с флагом `editing`
const editableFields = ref([]);

const initFields = () => {
  const baseFields =
    userStore.role === "company"
      ? [
          { label: "Роль", value: userStore.role },
          { label: "Email", value: userStore.email },
          { label: "Номер телефона", value: userStore.phone },
          { label: "ИНН", value: userStore.inn },
          {
            label: "ФИО представителя",
            value: userStore.representativeFullName,
          },
          {
            label: "Email подтверждён",
            value: userStore.emailVerified ? "Да" : "Нет",
          },
        ]
      : [
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

  // Добавим флаг editing: false
  editableFields.value = baseFields.map((field) => ({
    ...field,
    editing: false,
  }));
};

initFields();

// Включить/выключить редактирование
const enableEdit = (index) => {
  editableFields.value[index].editing = true;
};

const disableEdit = (index) => {
  editableFields.value[index].editing = false;
};
</script>

<style lang="stylus">

.form-profile-editing
  &__input
    font-size 28px
    width 100%
    padding 8px
    border 1px solid #ccc
    border-radius 4px
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
