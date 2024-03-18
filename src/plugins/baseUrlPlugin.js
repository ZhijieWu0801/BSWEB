// plugins/config.js
const configPlugin = {
    install(Vue) {
      Vue.prototype.$baseUrl = 'http://127.0.0.1:3000'
    },
  };
  
  export default  configPlugin