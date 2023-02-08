import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProfileDetails from "../components/ProfileDetails.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
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
