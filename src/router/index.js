import { createRouter, createWebHistory } from "vue-router";
import CalculatorView from "@/views/CalculatorView.vue";

const routes = [
  {
    path: "/",
    name: "calculator",
    component: CalculatorView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "catchall",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
