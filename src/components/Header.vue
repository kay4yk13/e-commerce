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
<style>
.header-container {
  margin: 2% 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 6%;
}

.header-childelement {
  text-align: center;
}
</style>
