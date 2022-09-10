<template>
  <div class="content-container">
    <div class="content-title">Your choise</div>
    <div class="cart-table">
      <div class="cart-table-header">
        <span>Photo</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Item Cost <br />one/total</span>
        <span>Actions</span>
      </div>
      <p v-if="!cart.length">Go and buy smth plz</p>
      <CartItem v-for="item in cart" :key="item.id" :cart_item="item" />
    </div>
  </div>
</template>

<script>
import CartItem from "./Cart/CartItem.vue";

export default {
  components: { CartItem },
  computed: {
    cart() {
      return this.$store.getters["CART"];
    }
  }
};
</script>
<style>
.cart-table {
  margin-top: 5%;
  font-family: "Montserrat";
  width: 100%;
}
.cart-table-header > span {
  width: 20%;
  text-align: center;
  font-weight: bold;
}
.cart-table-header {
  font-family: "Montserrat";
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
