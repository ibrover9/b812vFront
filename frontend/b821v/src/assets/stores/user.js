import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // Состояние
  const name = ref("");
  const email = ref("");
  const token = ref("");
  const isLoggedIn = computed(() => !!token.value); // по токену

  // Геттер
  const userInfo = computed(() => ({
    name: name.value,
    email: email.value,
    token: token.value,
  }));

  // Действия
  function login({ name: userName, email: userEmail, token: userToken }) {
    name.value = userName;
    email.value = userEmail;
    token.value = userToken;
  }

  function logout() {
    name.value = "";
    email.value = "";
    token.value = "";
  }

  return {
    name,
    email,
    token,
    isLoggedIn,
    userInfo,
    login,
    logout,
  };
});
