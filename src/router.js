import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Works from "./views/Works.vue";
import About from "./views/About.vue";
import SkyCollector from './views/SkyCollector.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/works",
      name: "works",
      component: Works
    },
    {
      path: '/sky-collector',
      name: 'sky-collector',
      component: SkyCollector
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
});
