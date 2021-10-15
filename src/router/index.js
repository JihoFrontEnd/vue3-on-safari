import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../api/user";
import routes from "./routes.js";

import ACCESSIBLE_ROUTE_LIST from "../data/accessibleRouteList.json";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => window.scrollTo(0, 0),
});

const findName = (list, name) => list.find((route) => route === name);

const isAccessible = (name, session) => {
  if (name === "Home" || name === "NotFound") {
    return true;
  }
  if (session) {
    return findName(ACCESSIBLE_ROUTE_LIST.no_session, name);
  } else {
    return findName(ACCESSIBLE_ROUTE_LIST.on_session, name);
  }
};

router.beforeEach(async (to, from, next) => {
  console.log(`${from.name} → ${to.name}`);
  const token = localStorage.getItem("accessToken");
  if (token) {
    const authResponse = await auth();
    if (authResponse.status === 200) {
      if (isAccessible(to.name, true)) {
        next();
      } else {
        alert("접근할 수 없는 페이지입니다.");
        next({ name: from.name });
      }
    } else {
      alert("세션이 만료되었습니다. 로그인 페이지로 이동합니다.");
      localStorage.removeItem("accessToken");
      location.replace(location.href);
      next({ name: "Login" });
    }
  } else {
    if (isAccessible(to.name, false)) {
      next();
    } else {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      next({ name: "Login" });
    }
  }
});

export default router;
