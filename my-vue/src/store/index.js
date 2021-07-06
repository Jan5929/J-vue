import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    // state 哪里来的
    add (state) {
      state.counter++
    }
  },
  actions: {
    add (ctx) {
      setTimeout(() => {
        ctx.commit('add')
      }, 1000)
    }
  }
})
