import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import leftNavRouter from "routerPath/leftNavRouter"
Vue.use(VueRouter)
console.log(leftNavRouter);
console.log([...leftNavRouter]);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  ...leftNavRouter,
  {
    path: "/",
    name: "login",
    component: () => import("@/components/login.vue")

  },
  {
    path: "/rightTable",
    name: "rightTable",
    component: () => import("@/components/RightTable.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router