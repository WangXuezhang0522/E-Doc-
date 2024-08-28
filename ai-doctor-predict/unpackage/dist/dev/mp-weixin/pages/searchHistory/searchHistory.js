"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchHistoryList: []
    };
  },
  onShow() {
    common_vendor.index.request({
      url: "http://127.0.0.1:5000/getsearchlogdata",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: (response) => {
        this.searchHistoryList = JSON.parse(response.data.result);
      },
      fail: (error) => {
        console.error(error);
      }
    });
  },
  methods: {
    deleteHistory() {
      common_vendor.index.request({
        url: "http://127.0.0.1:5000/deletesearchdata",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: (response) => {
        },
        fail: (error) => {
          console.error(error);
        }
      });
    }
  }
};
if (!Array) {
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  _component_van_dialog();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.searchHistoryList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.humanin
      }, item.humanin ? {
        b: common_vendor.t(item.humanin)
      } : {}, {
        c: item.airesult
      }, item.airesult ? {
        d: common_vendor.t(item.airesult)
      } : {}, {
        e: item
      });
    }),
    b: common_vendor.o((...args) => $options.deleteHistory && $options.deleteHistory(...args)),
    c: common_vendor.p({
      id: "van-dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/searchHistory/searchHistory.vue"]]);
wx.createPage(MiniProgramPage);
