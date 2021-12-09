import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import vClickOutside from "click-outside-vue3";

createApp(App).use(store).use(router).use(vClickOutside).mount("#app");
