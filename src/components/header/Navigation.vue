<template>
  <div class="navbar">
    <router-link :to="{ name: 'Home' }" class="button index">home</router-link>
    <router-link :to="{ name: 'Catalog' }">catalog</router-link>
    <router-link :to="{ name: 'Contacts' }">contacts</router-link>
    <router-link :to="{ name: 'Testimonials' }">testimonials</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style>
.navbar a {
  font-family: "Monda";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  color: black;
  text-decoration: none;
  padding-left: 40px;
}
.navbar a:hover {
  text-decoration: underline;
  text-decoration-line: underline;
  text-decoration-style: double;
  color: white;
}
.navbar a:active {
  text-decoration: underline;
}
.button:first-child {
  padding-left: 0px;
}
</style>
