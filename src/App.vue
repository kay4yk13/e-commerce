<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    "app-header": Header
  },
  data() {
    return {};
  },
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title;
      },
      immediate: true
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Monda|Montserrat|Roboto");
</style>
