import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Form",
    component : () => import ('../views/forms')
  },
  {
    path: "/room/:id",
    name: "Room",
    component : () => import ('../views/mainChat')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
