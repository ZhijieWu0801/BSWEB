import loadingSvg from '@/assets/loading.png'; // 导入loading图标

// loadingDirective.js
let spinner
export default {
  install(Vue) {
    Vue.directive('loading', {
      bind(el, binding) {
        spinner = document.createElement('div');
        spinner.className = 'spinner';
        spinner.innerHTML = `
          <div class="bounce1" style="position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.3);transform:translate(-50%,-50%);top:50%;left:50%;">
          <img src = "${loadingSvg}" style="width:100px;height:100px;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;" />
          </div>
        `;
        spinner.style.width = "100%";
        spinner.style.height = "100%";
        spinner.style.display = "none";
        spinner.style.position = "fixed";
        spinner.style.top = "0";
        spinner.style.left = "0";
        el.appendChild(spinner);
        el.classList.add('loading-container');
        // 根据绑定的值来控制显示/隐藏加载动画
        if (binding.value) {
          el.classList.add('loading');
        } else {
          el.classList.remove('loading');
        }
      },
      update(el, binding) {
        // 在指令的值更新时，更新加载动画的显示状态
        console.log(binding, 564654);
        if (binding.value) {
          spinner.style.display = "block"
        } else {
          spinner.style.display = "none"
        }
      }
      // }
    });
  }
};