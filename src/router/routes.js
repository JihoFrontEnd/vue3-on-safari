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
    component: () => import("../views/Nested/Nested.vue"),
    children: [
      {
        path: "",
        redirect: "/nested/daughter",
      },
      {
        path: "daughter",
        name: "Daughter",
        component: () => import("../views/Nested/Daughter.vue"),
      },
      {
        path: "son",
        name: "Son",
        component: () => import("../views/Nested/Son.vue"),
      },
    ],
  },
  {
    path: "/protocol",
    name: "Protocol",
    component: () => import("../views/Protocol/Protocol.vue"),
    children: [
      {
        path: "",
        redirect: "/protocol/http",
      },
      {
        path: "http",
        name: "HTTP",
        component: () => import("../views/Protocol/HTTP.vue"),
      },
      {
        path: "https",
        name: "HTTPS",
        component: () => import("../views/Protocol/HTTPS.vue"),
      },
    ],
  },
  {
    path: "/route",
    name: "Route",
    component: () => import("../views/Route/Route.vue"),
    children: [
      {
        path: "",
        redirect: "/route/location",
      },
      {
        path: "location",
        name: "Location",
        component: () => import("../views/Route/Location.vue"),
      },
      {
        path: "router-go",
        name: "RouterGo",
        component: () => import("../views/Route/RouterGo.vue"),
      },
    ],
  },
];
