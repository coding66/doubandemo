// pages/main/main.js
var subjectUtils=require('../../utils/subjectutils.js')
Page({
  data: {
     'imgurl':[
       '../asset/img/001.jpg',
       '../asset/img/002.jpg',
       '../asset/img/003.jpg'
     ],
     'dots':true,
     'autoplay':true,
     'interval':2000,
     'duration':1000,
     info:{},
     hiddenLoading:false
  },

  onLoad: function (options) {
    var that=this;
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/in_theaters',
       header: {
         'content-type': 'application/xml' // 默认值
       },
       success:function(res){
         subjectUtils.proesseds(res.data.subjects)
         that.setData(
           {info:res.data.subjects,
             hiddenLoading:true
           }
           )
            console.log(res)
       }
     })
    
  },
  jumpdetail:function(e){
   getApp().jumpdetail(e);
  }
  
})