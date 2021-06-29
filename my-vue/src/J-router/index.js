import Vue from 'vue'
import VueRouter from './ J-vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/J-home/index')
  },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/J-about/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
