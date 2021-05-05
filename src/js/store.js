import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex'

// Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'message from vue'
  },
  mutations: {

  }
})
export default store;

