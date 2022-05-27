<template>
  <div class="cart-item">
    <img src="http://via.placeholder.com/150x150" />
    <div class="cart-product-text">{{ cart_item.title }}</div>
    <br />
    <div class="cart-weight">{{ cart_item.weight }} gr</div>
    <div class="cart-table-quantity">
      <span @click="decrementItem">-</span>
      {{ cart_item.quantity }}
      <span @click="incrementItem">+</span>
    </div>
    <div class="cart-cost">{{ cart_item.price }}</div>
    <div class="cart-totalcost">{{ itemSubtotal }}</div>
    <button @click="removeFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item: { required: true }
  },
  methods: {
    decrementItem() {
      if (this.cart_item.quantity > 1) {
        this.cart_item.quantity--;
      }
    },
    incrementItem() {
      this.cart_item.quantity++;
    },
    removeFromCart() {
      let index = this.$store.getters["CART"].indexOf(this.cart_item);
      if (index !== -1) {
        this.$store.getters["CART"].splice(index, 1);
      }
    }
  },
  computed: {
    itemSubtotal() {
      let subttl = this.cart_item.quantity * this.cart_item.price;
      return subttl;
    }
  }
};
</script>
