<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
</script>
