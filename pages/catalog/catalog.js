// pages/catalog/catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    noSelect: '../../images/submit.png',
    hasSelect: '../../images/check.png',
    countryContent: [{
        country: '中国'
      },
      {
        country: '美国'
      },
      {
        country: '澳大利亚'
      },
      {
        country: '英国'
      },
      {
        country: '欧元'
      },
      {
        country: '日本'
      },
      {
        country: '印度'
      }
    ],
    selectIndex: [{
        sureid: false
      },
      {
        sureid: false
      },
      {
        sureid: false
      },
      {
        sureid: false
      },
      {
        sureid: false
      },
      {
        sureid: false
      },
      {
        sureid: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this

    wx.request({
      url: 'https://www.mycurrency.net/US.json',

      header: {
        'content-type': 'application/json'
      },

      success: function(res) {
        console.log(res.data);
        var rates = res.data.rates;
        console.log(rates);

        var selected = rates.filter(item =>{ return item['selected']});
        console.log(selected);

        that.setData({
          countryRates: res.data.rates,
        })
      }
    })




  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  selectCountry: function(e) {

    let index = e.currentTarget.dataset.selectindex;
    let selectIndex = this.data.selectIndex;
    selectIndex[index].sureid = !selectIndex[index].sureid;
    this.setData({
      selectIndex: selectIndex
    })

  }
})