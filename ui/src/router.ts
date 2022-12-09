import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/stations",
    name: "stations",
    component: () => import("./components/StationList.vue"),
  },
  {
    path: "/stations/:id",
    name: "station-details",
    component: () => import("./components/StationDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
