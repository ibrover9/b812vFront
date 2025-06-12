import "./assets/style/main.styl";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { mask } from "vue-the-mask";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);
app.directive("mask", mask);
app.mount("#app");
