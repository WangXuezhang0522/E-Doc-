"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const wxcomponents_vant_dist_toast_toast = require("../../wxcomponents/vant/dist/toast/toast.js");
const wxcomponents_vant_dist_dialog_dialog = require("../../wxcomponents/vant/dist/dialog/dialog.js");
require("../../wxcomponents/vant/dist/common/validator.js");
const _sfc_main = {
  data() {
    return {
      userHeadShot: "",
      userName: "",
      // 登录相关数据
      buttonRect: {},
      // 判断是否完成登录
      // isLogin:true,
      isLogin: common_helper.helper.isLogin
    };
  },
  onShow() {
    this.userHeadShot = common_helper.helper.userHeadShot;
    this.userName = common_helper.helper.userName;
    this.isLogin = common_helper.helper.isLogin;
    this.$forceUpdate();
    console.log("用户头像" + this.userHeadShot);
  },
  // node.js测试
  onLoad() {
    wxcomponents_vant_dist_toast_toast.Toast("欢迎您! " + (this.userName === "" ? this.userName : ""));
  },
  methods: {
    toRecord() {
      common_vendor.index.navigateTo({
        url: "/pages/healthRecord/healthRecord",
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
    toHeartHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/heartHistory/heartHistory",
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
    toPredictHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/predictHistory/predictHistory",
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
    toHealthHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/healthHistory/healthHistory"
      });
    },
    makePhone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "10066668888",
        //手机号
        success: (res) => {
          console.log("调用成功!");
        },
        fail: (res) => {
          console.log(res);
          console.log("调用失败!");
        }
      });
    },
    toAboutUs() {
      common_vendor.index.navigateTo({
        url: "/pages/aboutUs/aboutUs"
      });
    },
    toSearchHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/searchHistory/searchHistory"
      });
    },
    toVoice() {
      wxcomponents_vant_dist_toast_toast.Toast("当前版本号为：0.1.2");
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
    }
  }
};
if (!Array) {
  const _component_van_toast = common_vendor.resolveComponent("van-toast");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  (_component_van_toast + _component_van_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.userHeadShot,
    b: common_vendor.o((...args) => $options.toPredictHistory && $options.toPredictHistory(...args)),
    c: common_vendor.o((...args) => $options.toHeartHistory && $options.toHeartHistory(...args)),
    d: common_vendor.o((...args) => $options.toHealthHistory && $options.toHealthHistory(...args)),
    e: common_vendor.o((...args) => $options.toSearchHistory && $options.toSearchHistory(...args)),
    f: common_vendor.o((...args) => $options.toRecord && $options.toRecord(...args)),
    g: common_vendor.o((...args) => $options.makePhone && $options.makePhone(...args)),
    h: common_vendor.o((...args) => $options.toAboutUs && $options.toAboutUs(...args)),
    i: common_vendor.o((...args) => $options.toVoice && $options.toVoice(...args)),
    j: $data.isLogin
  }, $data.isLogin ? {
    k: common_vendor.p({
      id: "van-toast"
    })
  } : {}, {
    l: common_vendor.p({
      id: "van-dialog"
    }),
    m: !$data.isLogin
  }, !$data.isLogin ? {
    n: common_vendor.o((...args) => $options.toLogin && $options.toLogin(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f122818"], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/center/center.vue"]]);
wx.createPage(MiniProgramPage);
