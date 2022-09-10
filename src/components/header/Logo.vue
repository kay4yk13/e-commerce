<template>
  <div class="header-childelement logo">
    <router-link :to="{ name: 'Home' }" class="header-logo">
      <div class="header-logo-icon-wrapper">
        <div class="header-logo-icon-text">SK</div>
      </div>
      <div class="header-logo-text">SuperKatalog</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.header-logo {
  width: 200px;
  position: relative;
  display: flex;
  align-content: left;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
}
.header-logo-icon-wrapper {
  position: relative;
  width: 45px;
  height: 45px;
  background: black;
}
.header-logo-icon-text {
  position: relative;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  text-decoration: none;
  margin-top: 22%;
}
.header-logo-text {
  position: relative;
  margin-left: 7px;
  text-decoration: none;
  font-style: normal;
  font-family: "Montserrat";
  color: black;
}
</style>
