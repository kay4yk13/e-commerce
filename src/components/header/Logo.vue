<template>
  <div class="header-childelement logo">
    <router-link :to="{ name: 'Home' }" class="header-logo">
      <div class="header-logo-icon-wrapper">
        <div class="header-logo-icon-text">SK</div>
      </div>
      <div class="header-logo-text">SuperKal</div>
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
