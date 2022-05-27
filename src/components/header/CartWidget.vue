<template>
  <div class="header-childelement-cart">
    <router-link :to="{ name: 'Cart' }">
      <span class="cart-logo">
        <img src="@/assets/cart.svg" width="45px" />
        <div class="header-cart-item-counter" v-if="CART.length">
          {{ cartTotalItems }}
        </div>
      </span>
      <span class="header-cart-price-counter" v-if="CART.length"
        >{{ cartTotalCost }} $</span
      >
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
<style>
.header-childelement-cart {
  width: 300px;
  text-align: right;
  text-decoration: none;
  color: black;
}
:active {
  color: black;
}
.cart-logo {
  position: relative;
  width: 45px;
  height: 45px;
}

.header-cart-item-counter {
  position: absolute;
  color: white;
  font-family: "Roboto";
  left: 32%;
  bottom: 86%;
  font-size: 26px;
}
.header-cart-price-counter {
  position: relative;
  margin-left: 20px;
  font-style: normal;
  font-family: "Montserrat";
  color: black;
  font-size: 24px;
  vertical-align: 50%;
}
</style>
