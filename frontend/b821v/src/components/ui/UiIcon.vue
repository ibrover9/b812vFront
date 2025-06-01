<template>
  <img
    ref="iconRef"
    :src="iconSrc"
    :alt="name"
    :class="['icon', sizeClass]"
    :style="{ color }"
    loading="lazy"
    @click="clickAnimation"
  />
</template>

<script setup>
import { computed, ref } from "vue";

const emit = defineEmits(["click"]);
const props = defineProps({
  name: { type: String, required: true },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "inherit",
  },
});

const iconRef = ref(null);

const iconSrc = computed(
  () => new URL(`/src/assets/icons/${props.name}.svg`, import.meta.url).href
);

const sizeClass = computed(
  () =>
    ({
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    }[props.size] || "w-6 h-6")
);

function clickAnimation(e) {
  const icon = iconRef.value;
  if (!icon) return;

  icon.classList.remove("clicked");
  void icon.offsetWidth; // перезапуск анимации
  icon.classList.add("clicked");

  emit("click", e);
}
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.clicked {
  animation: pulse 0.4s ease;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
