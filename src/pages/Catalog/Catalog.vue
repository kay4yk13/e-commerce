<template>
  <div class="content-container">
    <div class="content-title">Best products</div>
    <div class="products-grid">
      <CatalogItem
        v-for="product in products"
        :key="product.id"
        :catalog_item="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogItem },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },
  computed: {
    products() {
      return this.$store.getters["PRODUCTS"];
    }
  }
};
</script>
