<template>
  <div class="content-container">
    <h1>Enjoy our poops</h1>
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
  data() {
    return {
      titles: ["ECO POOPERS", "POSREDSTVENNOE QUALITY", "NO REFUND"],
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
    };
  }
};
</script>
