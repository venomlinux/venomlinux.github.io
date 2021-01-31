import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Download from "../views/Download.vue";
import Donate from "../views/Donate.vue";
import Team from "../views/Team.vue";
import Community from "../views/Community.vue";
import Stats from "../views/Stats.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/community",
    name: "Community",
    component: Community
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
