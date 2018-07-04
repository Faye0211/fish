// pages/01.login/01.login.js
// 获取 app对象
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择','你所在的','区域'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // 绑定change事件
  bindRegionChange:function(event){
    console.log(event);
    this.setData({
      region:event.detail.value
    })
  },
  // 数据提交事件
  doRegister:function(event){
    console.log(event);
    // 弹出loading框
    wx.showLoading({
      title: '注册中...',
      mask: true,
    });
    // ajax提交数据
    // success
    setTimeout(function(){
      wx.hideLoading();
      // 关闭loading
      //提示用户成功
      wx.showToast({
        title: '欢迎你',
        icon: 'success',
        duration: 1500,
        mask: true,
        success:function(){
          // 提示之后 跳转首页
          console.log('成功啦 去首页啦');
          // 保存用户数据
          app.globalData.userInfo = event.detail.value;

          // 去首页
          wx.switchTab({
            url: '/pages/02index/02index'
          });
        }
      });
    },1000)
  }
})