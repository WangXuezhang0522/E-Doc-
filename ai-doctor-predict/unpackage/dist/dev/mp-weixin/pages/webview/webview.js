"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: ""
    };
  },
  onLoad(item) {
    this.url = decodeURIComponent(item.url);
    console.log(this.url);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/webview/webview.vue"]]);
wx.createPage(MiniProgramPage);
