<template>
  <div class="input-group">
    <label v-if="label" class="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="['input', $attrs.class, { 'input--error': error }]"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  type: { type: String, default: "text" },
  error: String,
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 1rem;
  font-family: sans-serif;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #007bff;
}

.input--error {
  border-color: #e53935;
  background-color: #fff6f6;
}

.error {
  font-size: 12px;
  color: #e53935;
}
</style>
