<template>
  <div class="content-container">
    <div class="content-title">Best products</div>
    <div class="products-grid">
      <CatalogItem
        v-for="product in products"
        :key="product.id"
        :catalog_item="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog/CatalogItem.vue";

export default {
  name: "Catalog",
  components: { CatalogItem },
  computed: {
    products() {
      return this.$store.getters["PRODUCTS"];
    }
  }
};
</script>
