module.exports = {
  // request主域名， 已引入uview的vuex，页面中可直接使用
  baseUrl: "https://www.100189.com",
  staticUrl1: "https://data.100189.com",

  // static静态图片存放目录, 已引入uview的vuex，页面中可直接使用，小程序图片超包大小时用
  staticUrl: "https://data.100189.com/wx_img",

  // 微信oss存储地址
  wx: "https://100189.oss-cn-hangzhou.aliyuncs.com/wx_img",
  erpUrl: "https://erp.100189.com", //erp接口地址

  //项目缓存前缀，避免本地多个项目冲突，uni.$func.cache()
  prefix: "YB_",
};
