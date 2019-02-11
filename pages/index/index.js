var app = getApp()
Page({
  data: {
    navbar: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
