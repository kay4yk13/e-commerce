<template>
  <div id="cart" class="header-childelement cart">
    <router-link :to="{ name: 'Cart' }">
      <div class="cart-logo">
        <img src="@/assets/cart.svg" width="45px" />
        <span class="header-cart-item-counter" v-if="CART.length">{{
          cartTotalItems
        }}</span>
        <span class="header-cart-price-counter" v-if="CART.length"
          >{{ cartTotalCost }} $</span
        >
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),

    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
    cartTotalItems() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.quantity);
        }

        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    }
  }
};
</script>
