function testTel(str){
    const chinaMobileRegex = /^1\d{10}$/;
    return chinaMobileRegex.test(str)
}

const comfuncs = {
    testTel
};
const comfunc = {
    install(Vue) {
      Vue.prototype.$comfunc = comfuncs;
    }
  };
  export default comfunc