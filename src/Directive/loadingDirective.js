import loadingSvg from '@/assets/loading.png'; // 导入loading图标
// loadingDirective.js
// 使用的时候，要给store的loading设置值
let spinner
export default {
  install(Vue) {
    Vue.directive('loading', {
      bind(el, binding) {
        spinner = document.createElement('div');
        spinner.className = 'spinner';
        spinner.innerHTML = `
          <div class="bounce1" style="position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.3);transform:translate(-50%,-50%);top:50%;left:50%;">
          <div style="position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;">
          <img src = "${loadingSvg}" style="width:100px;height:100px;" />
          <div id="lodingText">1111</div>
          </div>
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
          // console.log(binding);
          spinner.querySelector("#lodingText").innerText = window.vLoadingText || "Loading...";
          spinner.style.display = "block";
        } else {
          spinner.style.display = "none";
          window.vLoadingText = null;
        }
        setTimeout(() => {
          spinner.style.display = "none";
          window.vLoadingText = null;
        }, 3000);
      }
      // }
    });
  }
};