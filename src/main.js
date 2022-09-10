import Vue from "vue";
import App from "./App";
import "./assets/reset.css";
import "./assets/styles.css";
import VueRouter from "vue-router";
import store from "./vuex/store.js";
import Routes from "./router/index.js";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAu9feqBjDg_RlBdK7MXOI-o11oZH7BlLM"
  }
});

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>",
  data() {
    return {};
  },
  store
});
