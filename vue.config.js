const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./"),
      },
    },
  },
  devServer: {
    open: false,
    // host: 'localhost', //配置是否关闭本地域名访问
    port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: 'http://127.0.0.1:8080' // 配置跨域处理,只有一个代理
    proxy: {
      // 配置跨域
      "/cors": {
        //要访问的跨域的api的域名
        target: "https://www.100189.com",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/cors": "",
        },
      },
    },
    // before: app => { }
  },
};
