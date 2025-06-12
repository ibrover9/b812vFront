<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-auth__overlay" @click.self="closeModal">
      <transition name="fade-scale">
        <div
          class="modal-auth__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <header class="modal-auth__header">
            <!-- Первая строка: переключатель Физическое / Юридическое -->
            <div class="modal-auth__tabs">
              <button
                :class="[
                  'modal-auth__tab',
                  { active: activeTab === 'individual' },
                ]"
                @click="switchTab('individual')"
                id="tabIndividual"
                aria-controls="contentIndividual"
              >
                Физическое лицо
              </button>
              <button
                :class="['modal-auth__tab', { active: activeTab === 'legal' }]"
                @click="switchTab('legal')"
                id="tabLegal"
                aria-controls="contentLegal"
              >
                Юридическое лицо
              </button>
            </div>

            <!-- Вторая строка: переключатель Авторизация / Регистрация -->
            <div class="modal-auth__modes">
              <button
                :class="[
                  'modal-auth__mode-btn',
                  { active: authMode === 'login' },
                ]"
                @click="switchMode('login')"
                id="modeLogin"
                aria-controls="formLogin"
              >
                Авторизация
              </button>
              <button
                :class="[
                  'modal-auth__mode-btn',
                  { active: authMode === 'register' },
                ]"
                @click="switchMode('register')"
                id="modeRegister"
                aria-controls="formRegister"
              >
                Регистрация
              </button>
            </div>
          </header>

          <div class="modal-auth__body">
            <transition name="tab" mode="out-in">
              <!-- 4 возможных варианта форм -->
              <!-- Физическое лицо / Авторизация -->
              <FormAuthIndividual
                v-if="activeTab === 'individual' && authMode === 'login'"
                key="auth-individual"
                :form="formIndividual"
                @submit="submitForm"
              />

              <!-- Физическое лицо / Регистрация -->
              <FormRegistrationIndividual
                v-else-if="
                  activeTab === 'individual' && authMode === 'register'
                "
                key="reg-individual"
                :form="formIndividual"
                @submit="submitForm"
              />

              <!-- Юридическое лицо / Авторизация -->
              <FormAuthLegal
                v-else-if="activeTab === 'legal' && authMode === 'login'"
                key="auth-legal"
                :form="formLegal"
                @submit="submitForm"
              />

              <!-- Юридическое лицо / Регистрация -->
              <FormRegistrationLegal
                v-else
                key="reg-legal"
                :form="formLegal"
                @submit="submitForm"
              />
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import {
  ref,
  reactive,
  defineProps,
  defineEmits,
  onMounted,
  onBeforeUnmount,
} from "vue";

import FormAuthIndividual from "/src/components/form/FormAuthIndividual.vue";
import FormRegistrationIndividual from "../form/FormRegistrationIndividual.vue";
import FormAuthLegal from "../form/FormAuthLegal.vue";
import FormRegistrationLegal from "../form/FormRegistrationLegal.vue";
import axios from "axios";
import { useUserStore } from "@/stores/user.js";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "submit"]);

const isSubmitting = ref(false);

// Состояние, отвечающее за вкладки «Физическое / Юридическое»
const activeTab = ref("individual");

// Состояние, отвечающее за режим «Авторизация / Регистрация»
const authMode = ref("login");

const userStore = useUserStore();

// Разделяем данные форм для физического и юридического лиц
const formIndividual = reactive({
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const formLegal = reactive({
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  taxId: "",
});

// Переключение вкладок
function switchTab(tab) {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
  // Сброс режима на «Регистрация» при смене вкладки (опционально)
  authMode.value = "login";
}

// Переключение между Авторизацией и Регистрацией
function switchMode(mode) {
  if (authMode.value === mode) return;
  authMode.value = mode;
}

// Закрытие модалки
function closeModal() {
  emit("update:modelValue", false);
}

// Обработчик сабмита — в зависимости от таба и режима берем нужные поля
async function submitForm() {
  if (isSubmitting.value) return; // блок повторного нажатия
  isSubmitting.value = true;

  const currentForm = activeTab.value === "legal" ? formLegal : formIndividual;

  if (
    authMode.value === "register" &&
    currentForm.password !== currentForm.confirmPassword
  ) {
    alert("Пароли не совпадают");
    isSubmitting.value = false;
    return;
  }

  const payload = {
    role: activeTab.value === "legal" ? "company" : "user",
    email: currentForm.email,
    password: currentForm.password,
  };

  if (activeTab.value === "legal" && authMode.value === "register") {
    payload.companyName = formLegal.companyName;
    payload.taxId = formLegal.taxId;
  }

  try {
    let response;
    if (authMode.value === "register") {
      response = await registerUser(payload);
    } else {
      response = await loginUser(payload);
    }
    userStore.login(response);
    resetForms();
    closeModal();
  } catch (error) {
    if (error.response?.status === 429) {
      alert("Слишком много попыток. Подождите немного и попробуйте снова.");
    } else {
      alert("Произошла ошибка. Проверьте данные и повторите попытку.");
    }
  } finally {
    isSubmitting.value = false;
  }
}

function resetForms() {
  Object.assign(formIndividual, {
    email: "",
    password: "",
    confirmPassword: "",
  });
  Object.assign(formLegal, {
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    taxId: "",
  });
}

// Чтобы закрывать модалку по Escape
function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

const dataUser = ref([]);

async function registerUser(payload) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}api/auth/register`, // замените на реальный endpoint
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Регистрация успешна:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    throw error;
  }
}

async function loginUser(payload) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}api/auth/login`, // замените на реальный endpoint
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Авторизация успешна:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
    throw error;
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style lang="stylus" scoped>
.modal-auth
  &__overlay
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.5)
    display flex
    align-items center
    justify-content center
    z-index 1000

  &__dialog
    background #fff
    border-radius 10px
    width 600px
    max-width 90%
    box-shadow 0 2px 10px rgba(0, 0, 0, 0.1)
    overflow hidden

  &__header
    display flex
    flex-direction column
    border-bottom 1px solid #e5e5e5

  /* Вкладки «Физическое / Юридическое» */
  &__tabs
    display flex

  &__tab
    flex 1
    padding 10px 20px
    background none
    border none
    border-bottom 2px solid transparent
    font-size 20px
    cursor pointer
    text-align center
    transition all 0.2s

    &:hover
      background rgba(0, 0, 0, 0.03)

    &.active
      border-bottom 2px solid $firstMainColor
      font-weight 600

  /* Переключатель «Авторизация / Регистрация» */
  &__modes
    display flex
    margin-top 10px

  &__mode-btn
    flex 1
    padding 8px 0
    background none
    border none
    font-size 18px
    cursor pointer
    text-align center
    transition all 0.2s

    &:hover
      background rgba(0, 0, 0, 0.02)

    &.active
      border-bottom 2px solid $firstMainColor
      font-weight 500

  &__body
    padding 20px 60px

/* Анимации (оставляем ваши переходы) */
.fade-enter-active,
.fade-leave-active
  transition opacity 0.3s ease

.fade-enter-from,
.fade-leave-to
  opacity 0

.fade-scale-enter-active,
.fade-scale-leave-active
  transition transform 0.3s ease, opacity 0.3s ease

.fade-scale-enter-from
  transform scale(0.9)
  opacity 0

.fade-scale-leave-to
  transform scale(0.9)
  opacity 0

.tab-enter-active,
.tab-leave-active
  transition opacity 0.3s ease, transform 0.3s ease

.tab-enter-from
  opacity 0
  transform translateX(20px)

.tab-enter-to
  opacity 1
  transform translateX(0)

.tab-leave-from
  opacity 1
  transform translateX(0)

.tab-leave-to
  opacity 0
  transform translateX(-20px)
</style>
