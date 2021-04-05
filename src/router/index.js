import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "/",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/areaMenu",
    name: "areamenu",
    component: () => import(/* webpackChunkName: "about" */ "../views/areaMenu.vue"),
  },
  {
    path: "/songMenu",
    name: "songMenu",
    component: () => import(/* webpackChunkName: "about" */ "../views/songMenu.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pandemikollen",
    name: "Pandemikollen",
    component: () => import(/* webpackChunkName: "about" */ "../views/Pandemikollen.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
