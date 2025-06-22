<template>
  <div class="form-profile-editing">
    <template v-for="(field, index) in editableFields" :key="index">
      <div class="form-profile-editing__string">
        <strong class="form-profile-editing__title">{{ field.label }}</strong>

        <div @dblclick="enableEdit(index)">
          <template v-if="field.editing">
            <!-- Специальный select для emailVerified -->
            <template v-if="field.key === 'emailVerified'">
              <select
                v-model="field.value"
                @blur="disableEdit(index)"
                @change="disableEdit(index)"
                class="form-profile-editing__input"
                autofocus
              >
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
              </select>
            </template>
            <template v-else>
              <input
                v-model="field.value"
                @blur="disableEdit(index)"
                @keyup.enter="disableEdit(index)"
                class="form-profile-editing__input"
                autofocus
              />
            </template>
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
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const editableFields = ref([]);

const initFields = () => {
  const baseFields =
    userStore.role === "company"
      ? [
          { key: "role", label: "Роль", value: userStore.role },
          { key: "email", label: "Email", value: userStore.email },
          { key: "phone", label: "Номер телефона", value: userStore.phone },
          { key: "inn", label: "ИНН", value: userStore.inn },
          {
            key: "representativeFullName",
            label: "ФИО представителя",
            value: userStore.representativeFullName,
          },
          {
            key: "emailVerified",
            label: "Email подтверждён",
            value: userStore.emailVerified ? "Да" : "Нет",
          },
        ]
      : [
          { key: "role", label: "Роль", value: userStore.role },
          { key: "firstName", label: "Имя", value: userStore.firstName },
          { key: "lastName", label: "Фамилия", value: userStore.lastName },
          { key: "email", label: "Email", value: userStore.email },
          { key: "phone", label: "Номер телефона", value: userStore.phone },
          {
            key: "emailVerified",
            label: "Email подтверждён",
            value: userStore.emailVerified ? "Да" : "Нет",
          },
        ];

  editableFields.value = baseFields.map((field) => ({
    ...field,
    editing: false,
  }));
};

initFields();

const enableEdit = (index) => {
  editableFields.value[index].editing = true;
};

const disableEdit = (index) => {
  const field = editableFields.value[index];
  field.editing = false;

  const key = field.key;
  const newValue = field.value;

  // Обновляем данные в userStore
  if (key in userStore) {
    if (key === "emailVerified") {
      userStore[key] = newValue.toLowerCase() === "да";
    } else {
      userStore[key] = newValue;
    }
  }
};
</script>

<style lang="stylus">
.form-profile-editing
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

  &__text
    cursor pointer

  &__input
    font-size 28px
    width 100%
    padding 8px
    border 1px solid #ccc
    border-radius 4px
</style>
