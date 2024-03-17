const path = require('path');

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('routerPath', path.resolve(__dirname, 'src/router'))
      .set('views', path.resolve(__dirname, 'src/views'));
    // 可以根据需要继续添加其他别名
  }
};
