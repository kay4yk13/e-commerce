<template>
  <div class="product-item">
    <div class="product-item-h1">
      {{ product.title }}
    </div>
    <img src="http://via.placeholder.com/150x150" />
    <div class="product-item-p">
      {{ product.description }}
    </div>
    <span class="weight">{{ product.weight }} gr</span>
    <span class="cost">{{ product.price }} $</span>
    <button class="to-cart-button" @click="addToCart">
      ADD TO CART
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
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
    addToCart() {
      this.$emit("addToCart", this.product.id);
    }
  }
};
</script>
