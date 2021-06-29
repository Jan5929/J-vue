import Vue from 'vue'
import VueRouter from 'vue-router'

// 作为插件引入VueRouter
Vue.use(VueRouter)

// 路由表
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
