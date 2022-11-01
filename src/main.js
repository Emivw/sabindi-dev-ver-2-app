<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
=======
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9

new Vue({
  router,
  store,
  vuetify,
<<<<<<< HEAD
  render: h => h(App)
}).$mount('#app')
=======
  render: (h) => h(App),
}).$mount("#app");
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
