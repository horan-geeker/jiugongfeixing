// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    stars: [{name:"贪狼星"}],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    let stars = [
      {index:1, chineseIndex: "一", name:"贪狼星", color:"白", position: "桃花位", features:["感情", "人缘"]},
      {index:2, chineseIndex: "二", name:"巨门星", color:"黑", position: "病符位", features:["疾病", "伤痛"]},
      {index:3, chineseIndex: "三", name:"禄存星", color:"碧", position: "是非位", features:["是非", "官灾"]},
      {index:4, chineseIndex: "四", name:"文曲星", color:"禄", position: "文昌位", features:["事业", "官位"]},
      {index:5, chineseIndex: "五", name:"廉贞星", color:"黄", position: "五黄煞", features:["凶灾", "祸患"]},
      {index:6, chineseIndex: "六", name:"武曲星", color:"白", position: "偏财位", features:["横财", "贵人"]},
      {index:7, chineseIndex: "七", name:"破军星", color:"赤", position: "破财位", features:["破财", "财运"]},
      {index:8, chineseIndex: "八", name:"左辅星", color:"白", position: "正财位", features:["财运", "置业"]},
      {index:9, chineseIndex: "九", name:"右弼星", color:"紫", position: "喜神位", features:["姻缘", "感情"]},
    ]
    this.setData({
      stars: stars
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
