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
    </div>
    <CartItem in v-if="CART.length" />
  </div>
</template>
<script>
import CartItem from "../components/CartItem.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: { CartItem },
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>
