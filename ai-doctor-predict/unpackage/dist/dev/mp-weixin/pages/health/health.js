"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toList(id) {
      common_vendor.index.navigateTo({
        url: "/pages/hotSpot/hotSpot?id=" + id,
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toList(1)),
    b: common_vendor.o(($event) => $options.toList(2)),
    c: common_vendor.o(($event) => $options.toList(3)),
    d: common_vendor.o(($event) => $options.toList(4)),
    e: common_vendor.o(($event) => $options.toList(5)),
    f: common_vendor.o(($event) => $options.toList(6))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/health/health.vue"]]);
wx.createPage(MiniProgramPage);
