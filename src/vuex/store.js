import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cart: []
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("PUSH_TO_CART", product);
    },
    CART_ITEM_REMOVE({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    }
  },
  mutations: {
    PUSH_TO_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function(cartItem) {
          if (cartItem.id === product.id) {
            isProductExists = true;
            return state.cart;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },

    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },
  getters: {
    CART(state) {
      return state.cart;
    }
  }
});

export default store;
