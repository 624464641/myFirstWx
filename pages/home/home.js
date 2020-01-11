// 只能是相对路径 不能是绝对路径
import { getMutilData } from '../../service/home.js'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //  开始发送请求
    getMutilData().then(res=>{
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setData({
        banners: banners,
        recommend: recommend
      })
    })
  },

 
  
})