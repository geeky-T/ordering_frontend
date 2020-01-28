import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Booking from "../views/ManageBooking.vue";
import User from "../views/User.vue";
import Register from "../components/RegisterUser.vue";
import Login from "../components/LoginUser.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/register",
    name: "register",
    component: Register

  },
  {
    path: "/login",
    name: "login",
    component: Login

  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
