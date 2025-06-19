<template>
  <div class="autobet-toggle">
    <label class="label">Автоставка</label>
    <div class="switch" @click="toggleAutoBet" :class="{ active: autoBet }">
      <div class="knob"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const autoBet = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    autoBet.value = newVal;
  }
);

function toggleAutoBet() {
  autoBet.value = !autoBet.value;
  emit("update:modelValue", autoBet.value);
}
</script>

<style lang="stylus" scoped>
.autobet-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: sans-serif;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.switch {
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.switch.active {
  background-color: $firstMainColor;
}

.knob {
  width: 20px;
  height: 20px;
  background-color: $secondMainColor;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.switch.active .knob {
  transform: translateX(24px);
}
</style>
