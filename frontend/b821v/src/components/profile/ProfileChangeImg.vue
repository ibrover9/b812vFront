<template>
  <div class="container">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Выбранное изображение"
      class="preview"
    />
    <button @click="triggerFileInput">Выбрать изображение</button>
    <input
      type="file"
      ref="fileInput"
      accept="image/*"
      @change="onFileChange"
      style="display: none"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageUrl = ref(null);
const fileInput = ref(null);

function triggerFileInput() {
  fileInput.value.click();
}

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.preview {
  width: 300px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
