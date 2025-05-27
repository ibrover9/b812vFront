<template>
  <img
    :src="iconSrc"
    :alt="name"
    :class="['icon', sizeClass]"
    :style="{ color }"
    loading="lazy"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  size: {
    type: String,
    default: "md", // 'sm', 'md', 'lg', 'xl'
  },
  color: {
    type: String,
    default: "inherit",
  },
});

// Путь к файлу из assets/icons/
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
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
