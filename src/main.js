import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMoment from "vue-moment";
import VueCompositionAPI from "@vue/composition-api";
import vuetify from "./plugins/vuetify";

Vue.use(VueCompositionAPI);
Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
