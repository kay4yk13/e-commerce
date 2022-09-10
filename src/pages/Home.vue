<template>
  <div class="content-container">
    <h1>Enjoy our products</h1>
    <div class="benefits">
      <div class="benefit-text" v-for="title in titles">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    titles() {
      return this.$store.getters["TITLES"];
    },
    text() {
      return this.$store.state.home.text;
    }
  }
};
</script>
<style>
.benefits {
  display: flex;
  justify-content: space-between;
}
.benefits-text {
  text-align: center;
  font-family: "Montserrat";
}
</style>
