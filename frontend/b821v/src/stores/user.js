import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  const email = ref("");
  const role = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const inn = ref("");
  const representativeFullName = ref("");
  const phone = ref("");
  const emailVerified = ref(false);
  const updatedAt = ref("");
  const id = ref("");
  const avatarUrl = ref(localStorage.getItem("avatarUrl") || "");
  const token = ref("");
  const isLoggedIn = computed(() => !!token.value);

  const userInfo = computed(() => ({
    email: email.value,
    token: token.value,
  }));

  function login(data) {
    console.log(data);
    const user = data.user || {};
    role.value = user.role || "";
    email.value = user.email || "";
    token.value = data.token || "";
    phone.value = user.phone || "";
    id.value = user._id || "";
    console.log(id.value);
    emailVerified.value = user.emailVerified || false;
    updatedAt.value = user.updatedAt || "";

    if (role.value === "company") {
      inn.value = user.inn || "";
      representativeFullName.value = user.representativeFullName || "";
    } else if (role.value === "user") {
      firstName.value = user.firstName || "";
      lastName.value = user.lastName || "";
    }
  }

  function setAvatar(url) {
    avatarUrl.value = url;
    localStorage.setItem("avatarUrl", url);
  }

  function clearAvatar() {
    avatarUrl.value = "";
    localStorage.removeItem("avatarUrl");
  }

  function logout() {
    id.value = "";
    email.value = "";
    role.value = "";
    firstName.value = "";
    lastName.value = "";
    inn.value = "";
    representativeFullName.value = "";
    phone.value = "";
    emailVerified.value = false;
    updatedAt.value = "";
    token.value = "";
  }

  return {
    id,
    email,
    role,
    firstName,
    lastName,
    inn,
    representativeFullName,
    phone,
    emailVerified,
    updatedAt,
    token,
    isLoggedIn,
    userInfo,
    login,
    logout,
    avatarUrl,
    setAvatar,
    clearAvatar,
  };
});
