//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
 
  onLoad: function () {
    
  },
  enter:function(){
    wx.switchTab({
         url: '../shouye/shouye',
       })

  }
})
