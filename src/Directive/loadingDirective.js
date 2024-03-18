// loadingDirective.js

import Vue from 'vue';
// import loadingSvg from '@/assets/loading.svg'; // 导入loading图标

Vue.directive('loading', {
  bind(el, binding) {
    const isLoading = binding.value;
    if (isLoading) {
      // 创建一个 img 元素来显示 loading 图标
      const img = document.createElement('img');
      img.src = loadingSvg; // 设置图标源
      img.style.position = 'absolute'; // 设置为绝对定位
      img.style.top = '50%';
      img.style.left = '50%';
      img.style.transform = 'translate(-50%, -50%)'; // 居中显示
      img.style.zIndex = 9999; // 设置为最高层级
      img.setAttribute('id', 'loading-img'); // 添加 id，方便后续移除
      el.appendChild(img); // 将图标添加到元素中
    }
  },
  update(el, binding) {
    const isLoading = binding.value;
    if (isLoading) {
      // 显示 loading 图标
      const img = document.getElementById('loading-img');
      if (img) {
        img.style.display = 'block';
      }
    } else {
      // 隐藏 loading 图标
      const img = document.getElementById('loading-img');
      if (img) {
        img.style.display = 'none';
      }
    }
  },
  unbind(el) {
    // 移除 loading 图标
    const img = document.getElementById('loading-img');
    if (img) {
      img.remove();
    }
  }
});
