// plugins/config.js
const configPlugin = {
    install(Vue) {
      Vue.prototype.$baseUrl = 'http://192.168.2.63:3000'
    },
  };
  
  export default  configPlugin