const app = getApp();
Page({
  data:{
    showInfo: false, //遮罩层
  },
  onLoad: function () {
    this.setData({
      showInfo: true
    });
  },
  hideMask() {
    this.setData({
      showInfo: false
    })
  }
});