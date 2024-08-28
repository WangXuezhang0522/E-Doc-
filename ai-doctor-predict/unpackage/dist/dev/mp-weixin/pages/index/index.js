"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const wxcomponents_vant_dist_dialog_dialog = require("../../wxcomponents/vant/dist/dialog/dialog.js");
const _sfc_main = {
  data() {
    return {
      // 登录相关数据
      buttonRect: {},
      // 判断是否完成登录
      // isLogin:true,
      isLogin: false,
      searchLoad: false,
      // 轮播图数据
      pictures: [
        {
          id: "1",
          url: "https://pic.imgdb.cn/item/65632e64c458853aeff560da.jpg"
        },
        {
          id: "2",
          url: "https://pic.imgdb.cn/item/65632e0bc458853aeff43415.png"
        },
        {
          id: "3",
          url: "https://pic.imgdb.cn/item/65632e68c458853aeff56f0f.jpg"
        }
      ],
      show: false,
      // 设置遮罩层颜色
      blockBackGroundColor: "",
      // 遮罩层显示
      displayShow: "",
      // 用户搜索
      inputMessage: "",
      // 健康档案对象数据
      healthArray: {},
      // 综合评价
      appraise: "",
      // 饮食建议
      dietaryAdvice: "",
      // 运动建议
      sportAdvice: "",
      // 作息建议
      sleepAdvice: "",
      // 实时计算BMI值
      BMI: 0
    };
  },
  onLoad() {
  },
  onShow() {
    this.isLogin = common_helper.helper.isLogin;
    this.healthArray = common_helper.helper.healthArr[0] || {
      userName: "用户",
      weight: 0,
      height: 0,
      bloodSugar: 0,
      bloodPressure: 0,
      heartRate: 0,
      sleep: 0
    };
    if ((1e4 * this.healthArray.weight / (this.healthArray.height * this.healthArray.height)).toFixed(1) != (1e4 * this.healthArray.weight / (this.healthArray.height * this.healthArray.height)).toFixed(1)) {
      this.BMI = 0;
    } else {
      this.BMI = (1e4 * this.healthArray.weight / (this.healthArray.height * this.healthArray.height)).toFixed(1);
    }
    if (this.healthArray.userName !== "用户") {
      let _this = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:5000/comprehensives",
        data: {
          name: _this.healthArray.userName
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: (response) => {
          _this.appraise = response.data;
        },
        fail: (error) => {
          console.error(error);
        }
      });
      setTimeout(function() {
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/dietarys",
          data: {
            name: _this.healthArray.userName
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            _this.dietaryAdvice = response.data;
          },
          fail: (error) => {
            console.error(error);
          }
        });
      }, 1e3);
      setTimeout(function() {
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/sport",
          data: {
            name: _this.healthArray.userName
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            _this.sportAdvice = response.data;
          },
          fail: (error) => {
            console.error(error);
          }
        });
      }, 2e3);
      setTimeout(function() {
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/rest",
          data: {
            name: _this.healthArray.userName
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            _this.sleepAdvice = response.data;
          },
          fail: (error) => {
            console.error(error);
          }
        });
      }, 3e3);
    }
  },
  methods: {
    // ai预测路由跳转
    toPredict() {
      common_vendor.index.navigateTo({
        url: "/pages/predict/predict",
        animationType: "zoom-out",
        animationDuration: 200,
        // url:"../component/classdetails/classdetails?newsid="+ newsid,
        success: (res) => {
          console.log("调用成功");
        },
        fail: () => {
          console.log("调用失败");
        },
        complete: () => {
          console.log("调用完成");
        }
      });
    },
    // 心理路由跳转
    toHeart() {
      common_vendor.index.navigateTo({
        url: "/pages/heart/heart",
        // url:"../component/classdetails/classdetails?newsid="+ newsid,
        success: (res) => {
          console.log("调用成功");
        },
        fail: () => {
          console.log("调用失败");
        },
        complete: () => {
          console.log("调用完成");
        }
      });
    },
    // 吃药提醒路由跳转
    toMedicineRemind() {
      common_vendor.index.navigateTo({
        url: "/pages/medicineRemind/medicineRemind"
      });
    },
    // 遮罩层事件绑定
    toSearch() {
      let _this = this;
      this.searchLoad = true;
      if (this.inputMessage !== "") {
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/ddgsearch",
          data: {
            text: this.inputMessage
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            console.log(response.data);
            console.log("跳转到搜素页面");
            common_helper.helper.searchResponse = response.data;
            _this.searchLoad = false;
            common_vendor.index.navigateTo({
              url: "/pages/search/search"
            });
          },
          fail: (error) => {
            console.error(error);
          }
        });
      } else {
        wxcomponents_vant_dist_dialog_dialog.Dialog.alert({
          confirmButtonText: "重新输入",
          context: this,
          title: "输入错误",
          overlay: "false",
          message: "不能输入空的搜索词",
          theme: "round-button"
        }).then(() => {
        });
      }
    },
    setShowTrue() {
      console.log("遮罩层展示");
      this.show = true;
      this.blockBackGroundColor = "linear-gradient(to bottom, rgba(7, 7, 7, 0.8), rgba(255, 255, 255, 1));";
    },
    setShowFalse() {
      console.log("遮罩层关闭");
      this.show = false;
      this.blockBackGroundColor = "rgba(22, 22, 22, 0);";
    },
    // 登录弹出弹窗相关
    actionSheetTap() {
    },
    // 禁止用户进行操作弹窗让用户去注册
    toLogin() {
      wxcomponents_vant_dist_dialog_dialog.Dialog.alert({
        title: "您还没有注册哟 ~",
        message: "注册立享免费的疾病预测服务",
        itemColor: "#117df4"
      }).then(() => {
        const that = this;
        common_vendor.index.showActionSheet({
          title: "您还没有注册哦 ~",
          itemList: ["去注册"],
          itemColor: "#117df4",
          popover: {
            top: that.buttonRect.top * 2 + that.buttonRect.height,
            left: that.buttonRect.left + that.buttonRect.width / 2
          },
          success: (e) => {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          }
        });
      });
    },
    // 实现扫码功能
    toScan() {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
          common_vendor.index.navigateTo({
            url: "/pages/webview/webview?url=" + res.result
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_van_notice_bar = common_vendor.resolveComponent("van-notice-bar");
  const _component_van_tag = common_vendor.resolveComponent("van-tag");
  const _component_van_loading = common_vendor.resolveComponent("van-loading");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  (_component_van_notice_bar + _component_van_tag + _component_van_loading + _component_van_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.setShowTrue && $options.setShowTrue(...args)),
    b: common_vendor.o((...args) => $options.toSearch && $options.toSearch(...args)),
    c: $data.inputMessage,
    d: common_vendor.o(($event) => $data.inputMessage = $event.detail.value),
    e: common_vendor.o((...args) => $options.toScan && $options.toScan(...args)),
    f: $data.show
  }, $data.show ? {
    g: $data.blockBackGroundColor,
    h: common_vendor.o((...args) => $options.setShowFalse && $options.setShowFalse(...args))
  } : {}, {
    i: common_vendor.p({
      leftIcon: "volume-o",
      text: "已有超过788名用户使用Ai问诊成功发现病情并得到及时治疗",
      background: "#f8f8f8",
      color: "#ffaa7f",
      speed: "55"
    }),
    j: common_vendor.p({
      mark: true,
      type: "success"
    }),
    k: common_vendor.o((...args) => $options.toPredict && $options.toPredict(...args)),
    l: common_vendor.p({
      mark: true,
      type: "danger"
    }),
    m: common_vendor.o((...args) => $options.toHeart && $options.toHeart(...args)),
    n: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: item.url,
        b: item.id
      };
    }),
    o: common_vendor.o((...args) => $options.toMedicineRemind && $options.toMedicineRemind(...args)),
    p: common_vendor.t($data.BMI),
    q: common_vendor.p({
      mark: true,
      type: "primary",
      size: "medium",
      color: "rgba(0, 170, 255, 0.7)"
    }),
    r: common_vendor.t($data.healthArray.weight),
    s: common_vendor.t($data.healthArray.height),
    t: common_vendor.t($data.healthArray.bloodSugar),
    v: common_vendor.t($data.healthArray.bloodPressure),
    w: common_vendor.t($data.healthArray.heartRate),
    x: common_vendor.t($data.healthArray.sleep),
    y: !$data.appraise && $data.healthArray.weight !== 0
  }, !$data.appraise && $data.healthArray.weight !== 0 ? {
    z: common_vendor.p({
      color: "#1989fa",
      textSize: "13px",
      size: "30px"
    })
  } : {}, {
    A: common_vendor.t($data.appraise || ""),
    B: !$data.sportAdvice && $data.healthArray.weight !== 0
  }, !$data.sportAdvice && $data.healthArray.weight !== 0 ? {
    C: common_vendor.p({
      color: "#1989fa",
      textSize: "13px",
      size: "30px"
    })
  } : {}, {
    D: common_vendor.t($data.sportAdvice || ""),
    E: !$data.dietaryAdvice && $data.healthArray.weight !== 0
  }, !$data.dietaryAdvice && $data.healthArray.weight !== 0 ? {
    F: common_vendor.p({
      color: "#1989fa",
      textSize: "13px",
      size: "30px"
    })
  } : {}, {
    G: common_vendor.t($data.dietaryAdvice || ""),
    H: !$data.sleepAdvice && $data.healthArray.weight !== 0
  }, !$data.sleepAdvice && $data.healthArray.weight !== 0 ? {
    I: common_vendor.p({
      color: "#1989fa",
      textSize: "13px",
      size: "30px"
    })
  } : {}, {
    J: common_vendor.t($data.sleepAdvice || ""),
    K: common_vendor.p({
      id: "van-dialog"
    }),
    L: !$data.isLogin
  }, !$data.isLogin ? {
    M: common_vendor.o((...args) => $options.toLogin && $options.toLogin(...args))
  } : {}, {
    N: $data.searchLoad
  }, $data.searchLoad ? {
    O: common_vendor.p({
      color: "#1989fa",
      size: "40px",
      vertical: true
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
