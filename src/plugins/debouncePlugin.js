// debouncePlugin.js
//防抖函数

const debouncePlugin = {
  install(Vue) {
    Vue.prototype.$debounce = function (func, delay,callBack) {
      let timeoutId;

      return function (...args) {
        const context = this;
        console.log(222);
        if (timeoutId) {
          clearTimeout(timeoutId);
          return
        }

        timeoutId = setTimeout(() => {
          console.log(333);
          func.apply(context, args);
          callBack && callBack()
        }, delay);
      };
    };
  }
};

export default debouncePlugin;