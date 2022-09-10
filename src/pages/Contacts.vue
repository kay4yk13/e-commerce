<template>
  <div>
    <div class="content-title">Contacts</div>
    <div class="adress">
      <h3>
        You can easily find all sorts of our finest goods by
        adress below. Our sells office is a natural peace of nutella! Enjoy<br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h3>
    </div>
    <div class="mapka">
      <gmap-map
        :center="{ lat: 40.757688, lng: -73.969381 }"
        :zoom="20"
        map-type-id="roadmap"
        style="width: 100%; height: 350px; border: 4px solid black"
      >
      </gmap-map>
      <div class="adress">
        <h3>53&3. NYC</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Map"
};
</script>

<!-- AIzaSyAu9feqBjDg_RlBdK7MXOI-o11oZH7BlLM -->
