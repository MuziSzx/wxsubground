//index.js
//获取应用实例
const app = getApp()

Page({
  //事件处理函数
  mask: function() {
    wx.navigateTo({
      url: '../mask/mask'
    })
  },
})
