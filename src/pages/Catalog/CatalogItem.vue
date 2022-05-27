<template>
  <div class="product-item">
    <div class="product-item-h1">
      {{ catalog_item.title }}
    </div>
    <img src="http://via.placeholder.com/150x150" />
    <div class="product-item-p">
      {{ catalog_item.description }}
    </div>
    <span class="weight">{{ catalog_item.weight }} gr</span>
    <span class="cost">{{ catalog_item.price }} $</span>
    <button class="to-cart-button" @click="addToCart">
      ADD TO CART
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CatalogItem",
  props: {
    catalog_item: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart() {
      this.ADD_TO_CART(this.catalog_item),
        this.$set(this.catalog_item, "quantity", 1);
    }
  }
};
</script>
