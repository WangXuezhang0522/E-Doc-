"use strict";
const common_helper = require("../../common/helper.js");
require("../../wxcomponents/vant/dist/dialog/dialog.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 实时计算BMI值
      BMI: 0,
      // 健康档案对象数据
      healthArray: [
        {}
      ]
    };
  },
  onLoad() {
  },
  onShow() {
    this.healthArray = common_helper.helper.healthArr || {
      userName: "用户",
      weight: 0,
      height: 0,
      bloodSugar: 0,
      bloodPressure: 0,
      heartRate: 0,
      sleep: 0
    };
  },
  methods: {}
};
if (!Array) {
  const _component_van_notice_bar = common_vendor.resolveComponent("van-notice-bar");
  const _component_van_tag = common_vendor.resolveComponent("van-tag");
  (_component_van_notice_bar + _component_van_tag)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      color: "#1989fa",
      background: "#ecf9ff",
      leftIcon: "info-o",
      speed: "20",
      text: "每日健康小贴士:晚上熬夜其实就是在折磨你的身体，会让你的血压和胆固醇升高，这些都会给你心脏带来健康风险。如果你不想情况更糟，就抓紧去睡个好觉。"
    }),
    b: common_vendor.f($data.healthArray, (item, index, i0) => {
      return {
        a: common_vendor.t(++index),
        b: common_vendor.t((1e4 * item.weight / (item.height * item.height)).toFixed(1)),
        c: "46765086-1-" + i0,
        d: common_vendor.t(item.weight),
        e: common_vendor.t(item.height),
        f: common_vendor.t(item.bloodSugar),
        g: common_vendor.t(item.bloodPressure),
        h: common_vendor.t(item.heartRate),
        i: common_vendor.t(item.sleep),
        j: item
      };
    }),
    c: common_vendor.p({
      mark: true,
      type: "primary",
      size: "medium",
      color: "rgba(255, 85, 0, 0.7)"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/healthHistory/healthHistory.vue"]]);
wx.createPage(MiniProgramPage);
