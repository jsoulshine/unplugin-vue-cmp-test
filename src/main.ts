import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from "@/router";
import "virtual:svg-icons-register";

// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";
createApp(App).use(router).use(createPinia()).mount("#app");
