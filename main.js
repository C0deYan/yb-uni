import "./uni.promisify.adaptor";

import App from "./App";
// #ifndef VUE3
import Vue from "vue";
// #ifdef VUE3
import { createSSRApp } from "vue";
import uView from "uview-ui";

Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif

// 导入 uView UI框架
Vue.use(uView);

// uni.$u.setConfig({
//   config: {
//     unit: 'rpx'
//   },
// })
