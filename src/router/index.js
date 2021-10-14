import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => window.scrollTo(0, 0),
  routes,
});

export default router;
