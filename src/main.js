import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element.js';
import baseUrlPlugin from "@/plugins/baseUrlPlugin.js";
import debouncePlugin from "@/plugins/debouncePlugin.js";
import axiosPlugin from "@/plugins/axiosPlugin.js";
Vue.config.productionTip = false
Vue.use(baseUrlPlugin);
Vue.use(axiosPlugin);
Vue.use(debouncePlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')