import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Join from "@/views/Join.vue";
import Strategy from "@/views/Strategy.vue";
import Simulation from "@/views/Simulation.vue";
import Error from "@/views/Error.vue";

/**
 * 중첩된 라우트 방식
 *
 * Component 구조가 다소 복잡해지고 관리하는 양이 많아진다.
 * 필요 시 적용할 예정이다.
 */
export default [
  {
    path: "/",
    redirect: "/oq",
  },
  // Error
  {
    path: "/:pathMatch(.*)*",
    redirect: "/NOT-FOUND",
  },
  {
    path: "/NOT-FOUND",
    name: "NotFound",
    component: Error,
  },
  {
    path: "/oq",
    // router-view 하위에 또 다른 router-view가 있는 방식이다.
    // 구조는 다음 .vue 파일을 확인하면 파악할 수 있다.
    component: () => import("@/views/HomeView.vue"),
    children: [
      {
        path: "",
        redirect: "/oq/main",
      },
      {
        // Error
        path: ":pathMatch(.*)*",
        redirect: "/NOT-FOUND",
      },
      {
        path: "main",
        name: "Home",
        component: Home,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "join",
        name: "Join",
        component: Join,
      },
      {
        path: "mypage",
        name: "MyPage",
        component: Login,
      },
      {
        path: "simulation",
        // 원리를 제대로 이해한다면 하위 라우터를 계속 생성할 수 있다.
        component: () => import("@/views/SimulationView.vue"),
        children: [
          {
            path: "",
            redirect: "/oq/simulation/list",
          },
          {
            path: "list",
            name: "Strategy",
            component: Strategy,
          },
          {
            path: ":id",
            name: "Simulation",
            component: Simulation,
          },
        ],
      },
    ],
  },
];
