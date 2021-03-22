
import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
// import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({ storage: window.sessionStorage })
  ],
  state: {
    initialised: false
  },
  mutations: {
    setInitialised(state, status) {
      state.initialised = status;
    }
  },
  actions: {}
});