import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProfileDetails from "../components/ProfileDetails.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile/:id",
    name: "ProfileDetails",
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
    component: ProfileDetails,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
