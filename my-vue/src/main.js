import Vue from 'vue'
import App from './App.vue'

// import router from './router'
import router from './J-router'

// import store from './store'
import store from './J-store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
