"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    setTimeout(() => {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }, 1200);
  },
  methods: {}
};
if (!Array) {
  const _component_van_loading = common_vendor.resolveComponent("van-loading");
  _component_van_loading();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      color: "#00aaff",
      size: "40px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/splashPage/splashPage.vue"]]);
wx.createPage(MiniProgramPage);
