import Vue from 'vue'
import Vuex from './J-vuex.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 1,
    dounter: 2
  },
  mutations: {
    // state 哪里来的
    add (state) {
      state.counter++
    }
  },
  actions: {
    add ({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    doubleDounter: state => {
      return state.dounter * 2
    }
  }
})
