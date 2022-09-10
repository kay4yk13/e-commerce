import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem("LS_cart")) || [],
    products: [
      {
        id: 0,
        title: "HappyMaker 9000",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 20,
        price: 108
      },
      {
        id: 1,
        title: "Rainbow stuff",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 15,
        price: 69
      },
      {
        id: 2,
        title: "Kittens paws",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 50,
        price: 223
      },
      {
        id: 3,
        title: "smth cool(secret)",
        description:
          "12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 75,
        price: 288
      },
      {
        id: 4,
        title: "Smiles&Hugs",
        description:
          "343Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 100,
        price: 42
      },
      {
        id: 5,
        title: "Gods bless",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "http://via.placeholder.com/150x150",
        weight: 20,
        price: 420
      }
    ],
    home: {
      titles: ["ECO PRODUCTS", "HIGHEST QUALITY", "INSTANT REFUND"],
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.`
    }
  },

  getters: {
    CART(state) {
      return state.cart;
    },
    PRODUCTS(state) {
      return state.products;
    },
    TITLES(state) {
      return state.home.titles;
    }
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("PUSH_TO_CART", product);
      commit("UPDATE_LS");
    },
    INCREMENT({ commit }, cart_item) {
      commit("INCREMENT_QTY", cart_item);
      commit("UPDATE_LS");
    },
    DECREMENT({ commit }, cart_item) {
      commit("DECREMENT_QTY", cart_item);
      commit("UPDATE_LS");
    },
    REMOVE({ commit }, cart_item) {
      commit("REMOVE_ITEM", cart_item);
      commit("UPDATE_LS");
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
          state.cart.unshift(product);
        }
      } else {
        state.cart.unshift(product);
      }
    },

    INCREMENT_QTY: (state, cart_item) => {
      cart_item.quantity++;
    },
    DECREMENT_QTY: (state, cart_item) => {
      if (cart_item.quantity > 1) {
        cart_item.quantity--;
      }
    },
    REMOVE_ITEM: (state, cart_item) => {
      let index = state.cart.indexOf(cart_item);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    UPDATE_LS: (state, cart) => {
      localStorage.setItem("LS_cart", JSON.stringify(state.cart));
    }
  }
});
export default store;
