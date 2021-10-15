import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../views/Chart.vue"),
  },
  {
    path: "/nested",
    name: "Nested",
    component: () => import("../views/Nested.vue"),
    children: [
      {
        path: "",
        redirect: "/nested/daughter"
      },
      {
        path: "daughter",
        name: "Daughter",
        component: () => import("../views/Daughter.vue"),
      },
      {
        path: "son",
        name: "Son",
        component: () => import("../views/Son.vue"),
      },
    ]
  },
];
