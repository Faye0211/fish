// pages/03lesson/03lesson.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lessonData: [
      {
        path: "/img/goodLesson1.png",
        title: "创意DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isFull: false,
        name: "创意DIY"
      },
      {
        path: "/img/goodLesson2.png",
        title: "创意美食班",
        subTitle: "适宜2-3岁的宝宝",
        isFull: true,
        name: "创意美食"
      },
      {
        path: "/img/goodLesson3.png",
        title: "创意切图班",
        subTitle: "适宜12-13岁的宝宝",
        isFull: false,
        name: "创意切图"
      },
      {
        path: "/img/goodLesson4.png",
        title: "创意UI班",
        subTitle: "适宜22-33岁的宝宝",
        isFull: false,
        name: "创意UI"
      },
      {
        path: "/img/goodLesson5.png",
        title: "创意前端班",
        subTitle: "适宜42-43岁的宝宝",
        isFull: false,
        name: "创意前端"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  // 跳转到课程详情页
  toLessonDetail: function(event) {
    // console.log(event);
    // 获取数据
    var lessonName = event.currentTarget.dataset.name;

    // 跳转页面 带上数据
    wx.navigateTo({
      url: "/pages/03lesson/lessonInfo/lessonInfo?lessonName="+lessonName
    });
  }
});
