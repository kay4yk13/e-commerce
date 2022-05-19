<template>
  <div class="cart-item">
    <h2>{{ cart_data.id }}</h2>
    <h2>{{ cart_data.title }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartItem",
  props: {
    cart_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>
