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
    cart_item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    removeFromCart() {
      this.$emit("removeFromCart");
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
