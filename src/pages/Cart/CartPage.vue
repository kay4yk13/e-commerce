<template>
  <div class="content-container">
    <div class="content-title">Your choise</div>
    <div class="cart-table">
      <div class="cart-table-header">
        <span>Photo</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Item Cost</span>
        <span>Cost total</span>
      </div>
      <CartItem
        class="cart-item"
        v-for="(item, index) in cart"
        :key="item.id"
        :cart_item="item"
        @removeFromCart="removeFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapActions } from "vuex";

export default {
  components: { CartItem },
  computed: {
    cart() {
      return this.$store.getters["CART"];
    }
  },
  methods: {
    ...mapActions([
      "CART_ITEM_REMOVE",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM"
    ]),
    removeFromCart(index) {
      this.CART_ITEM_REMOVE(index);
      console.log(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    }
  }
};
</script>
