<template>
  <div class="navbar">
    <router-link :to="{ name: 'Home' }" class="button index">home</router-link>
    <router-link :to="{ name: 'Catalog' }" class="button catalog"
      >catalog</router-link
    >
    <router-link :to="{ name: 'Contacts' }" class="button contact"
      >contacts</router-link
    >
    <router-link :to="{ name: 'Testimonials' }" class="button testimonials"
      >testimonials</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
