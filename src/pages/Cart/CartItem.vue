<template>
  <div class="cart-table-row ">
    <div>
      <img src="http://via.placeholder.com/150x150" class="cart-img" />
    </div>
    <div class="cart-product-text">
      {{ cart_item.title }}: <br />{{ cart_item.weight }} gr
    </div>
    <div class="cart-table-quantity">
      <button @click="decrementItem" class="btnqty">-</button>
      {{ cart_item.quantity }}
      <button @click="incrementItem" class="btnqty">+</button>
    </div>
    <div class="cart-totalcost">{{ cart_item.price }} / {{ itemSubtotal }}</div>
    <div><button @click="removeFromCart" class="btn-cart">Remove</button></div>
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
<style>
.cart-table-row div {
  width: 20%;
}
.cart-table-row img {
  width: 35%;
  border: 2px solid black;
  border-radius: 4px;
}
.cart-table-row button {
  width: 30%;
  text-decoration: none;
  background: #e48900;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat";
  line-height: 25px;
  cursor: pointer;
}
.btnqty {
  width: 10% !important;
}
.cart-table-row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2%;
  text-align: center;
}
</style>
