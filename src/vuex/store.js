import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    // products: [],
    cart: []
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    }
  },
  mutations: {
    SET_CART(state, product) {
      state.cart.push(product);
    }
  },
  getters: {
    CART(state) {
      return state.cart;
    }
  }
});

export default store;
