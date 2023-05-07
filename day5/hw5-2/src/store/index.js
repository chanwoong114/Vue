import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    INCREASE: function(state) {
      return state.counter += 1
    },
    DECREASE: function(state) {
      return state.counter -= 1
    }
  },
  actions: {
    increase: function (context) {
      context.commit('INCREASE')
    },
    decrease: function (context) {
      context.commit('DECREASE')
    },
  },
  modules: {
  }
})
