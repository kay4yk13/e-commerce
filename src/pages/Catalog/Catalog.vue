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

  data() {
    return {
      products: [
        {
          id: 0,
          title: "Kal tvoey mamashi",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 20,
          price: 108
        },
        {
          id: 1,
          title: "Drisnya 9000",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 15,
          price: 69
        },
        {
          id: 2,
          title: "Podliva",
          description:
            "5656Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 50,
          price: 223
        },
        {
          id: 3,
          title: "Drisnya",
          description:
            "12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 75,
          price: 288
        },
        {
          id: 4,
          title: "Zhizha Zhizhi",
          description:
            "343Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 100,
          price: 1488
        },
        {
          id: 5,
          title: "Govna pyatno",
          description:
            "444Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "http://via.placeholder.com/150x150",
          weight: 20,
          price: 420
        }
      ]
    };
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },
  computed: {}
};
</script>
