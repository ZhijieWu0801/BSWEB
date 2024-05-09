import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import leftNavRouter from "routerPath/leftNavRouter"
Vue.use(VueRouter)
// console.log(leftNavRouter);
// console.log([...leftNavRouter]);
const yonghu = [{
  path: "/index",
  name: "idnex",
  component: () => import("@/components/user/index.vue"),
  props: true
}, {
  path: "/myInfo",
  name: "myInfo",
  component: () => import("@/components/admin/MyInfo.vue"),
  props: true
}, {
  path: "/browse",
  name: "browse",
  component: () => import("@/components/user/Browse.vue"),
  props: true
},  {
  path: "/petInfo",
  name: "petInfo",
  component: () => import("@/components/petInfo/petInfo.vue"),
  props: true
}, ]
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  ...yonghu,
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
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to.path, from.path);
  if (to.path === from.path) {
    return
  }
  next()
})
export default router