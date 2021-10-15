import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Join from "@/views/Join.vue";
import MyPageView from "@/views/MyPageView.vue";
import MyPageMain from "@/views/MyPageMain.vue";
import Strategy from "@/views/Strategy.vue";
import Simulation from "@/views/Simulation.vue";
import Error from "@/views/Error.vue";

export default [
  {
    path: "/",
    redirect: "/oq",
  },
  {
    path: "/oq",
    name: "Home",
    component: Home,
  },
  {
    path: "/oq/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/oq/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/oq/mypage/:user_id",
    name: "MyPageView",
    component: MyPageView,
    children: [
      {
        path: "",
        name: "MyPageMain",
        component: MyPageMain,
      },
      {
        path: "update",
        name: "MyPageUpdate",
        component: "",
      },
      {
        path: "delete",
        name: "MyPageUpdate",
        component: "",
      },
    ],
  },
  {
    path: "/oq/simulation/list",
    name: "Strategy",
    component: Strategy,
  },
  {
    path: "/oq/simulation/:id",
    name: "Simulation",
    component: Simulation,
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
];
