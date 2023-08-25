// module.exports = {
//   publicPath: './'
// }

module.exports = {
  configureWebpack: {},
  devServer: { // 环境配置
    hot: true,
    host: '0.0.0.0',
    public: 'yuetai-management.cantonfair.asia:34',
    port: '34',
    https: false,
    disableHostCheck: true,
    open: false // 配置自动启动浏览器
  }
}