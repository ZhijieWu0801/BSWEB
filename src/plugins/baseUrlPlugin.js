// plugins/config.js
const configPlugin = {
    install(Vue) {
      Vue.prototype.$baseUrl = 'http://192.168.2.109:3000'
    },
  };
  
  export default  configPlugin