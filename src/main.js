import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element.js';
import baseUrlPlugin from "@/plugins/baseUrlPlugin.js";
import debouncePlugin from "@/plugins/debouncePlugin.js";
import axiosPlugin from "@/plugins/axiosPlugin.js";
import testTel from "@/plugins/testTel.js";
import loading from "@/Directive/loadingDirective"
import "@/js/tool"

import EventBus from '@/bus/bus.js';
Vue.prototype.$bus = EventBus;

const {Message} = require("element-ui")
Vue.prototype.$Message = Message
Vue.config.productionTip = false
Vue.use(baseUrlPlugin);
Vue.use(axiosPlugin);
Vue.use(testTel);
Vue.use(debouncePlugin);
Vue.use(loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')