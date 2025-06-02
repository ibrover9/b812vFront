<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-auth__overlay" @click.self="closeModal">
      <transition name="fade-scale">
        <div class="modal-auth__dialog" role="dialog" aria-modal="true">
          <header class="modal-auth__header">
            <div class="modal-auth__tabs">
              <button
                :class="[
                  'modal-auth__tab',
                  { active: activeTab === 'individual' },
                ]"
                @click="switchTab('individual')"
              >
                Физическое лицо
              </button>
              <button
                :class="['modal-auth__tab', { active: activeTab === 'legal' }]"
                @click="switchTab('legal')"
              >
                Юридическое лицо
              </button>
            </div>
          </header>

          <div class="modal-auth__body">
            <transition name="tab" mode="out-in">
              <FormRegistrationIndividual
                v-if="activeTab === 'individual'"
                key="individual"
                :form="formRegistration"
                @submit="submitForm"
              />
              <FormRegistrationLegal
                v-else
                key="legal"
                :form="formRegistration"
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
import { ref, reactive, defineProps, defineEmits } from "vue";
import FormRegistrationIndividual from "../form/FormRegistrationIndividual.vue";
import FormRegistrationLegal from "../form/FormRegistrationLegal.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "submit"]);

const formRegistration = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  taxId: "",
});

const activeTab = ref("individual");

function switchTab(tab) {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
}

function closeModal() {
  emit("update:modelValue", false);
}

function submitForm() {
  if (formRegistration.password !== formRegistration.confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }
  emit("submit", {
    type: activeTab.value,
    email: formRegistration.email,
    password: formRegistration.password,
    ...(activeTab.value === "legal"
      ? {
          companyName: formRegistration.companyName,
          taxId: formRegistration.taxId,
        }
      : {}),
  });

  formRegistration.email = "";
  formRegistration.password = "";
  formRegistration.confirmPassword = "";
  formRegistration.companyName = "";
  formRegistration.taxId = "";
  closeModal();
}
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
    background $thirdMainColor
    border-radius 10px
    width 600px
    max-width 90%
    box-shadow 0 2px 10px rgba(0, 0, 0, 0.1)
    overflow hidden

  &__header
    display flex
    flex-direction column
    border-bottom 1px solid #e5e5e5

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

    // Состояние при наведении
  &__tab:hover
    background $fourthMainColor

    // Активная вкладка
  &__tab.active
    border-bottom 2px solid $firstMainColor
    font-weight 600



  &__body
    padding 20px 80px

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
