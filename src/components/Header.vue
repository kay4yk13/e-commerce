<template>
  <div class="header-container">
    <Logo />
    <Navigation />
    <CartWidget />
  </div>
</template>

<script>
import Logo from "./header/Logo.vue";
import Navigation from "./header/Navigation.vue";
import CartWidget from "./header/CartWidget.vue";
export default {
  components: {
    Logo,
    Navigation,
    CartWidget
  }
};
</script>
<style></style>
