import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // Состояние
  const name = ref("");
  const email = ref("");
  const role = ref("");
  const token = ref("");
  const isLoggedIn = computed(() => !!token.value); // по токену

  // Геттер
  const userInfo = computed(() => ({
    name: name.value,
    email: email.value,
    token: token.value,
  }));

  // Действия
  function login(data) {
    role.value = data.user.role || "";
    email.value = data.user.email || "";
    token.value = data.token || "";
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
    role,
    isLoggedIn,
    userInfo,
    login,
    logout,
  };
});
