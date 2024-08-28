"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const _sfc_main = {
  data() {
    return {
      searchResults: "",
      inputMessage: ""
    };
  },
  methods: {
    getSearchMessage() {
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
            this.searchResults = response.data;
          },
          fail: (error) => {
            console.error(error);
          }
        });
      } else {
        Dialog.alert({
          confirmButtonText: "重新输入",
          context: this,
          title: "输入错误",
          overlay: "false",
          message: "不能输入空的搜索词",
          theme: "round-button"
        }).then(() => {
        });
      }
    }
  },
  onLoad() {
    this.searchResults = common_helper.helper.searchResponse;
  }
};
if (!Array) {
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  _component_van_dialog();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.getSearchMessage && $options.getSearchMessage(...args)),
    b: $data.inputMessage,
    c: common_vendor.o(($event) => $data.inputMessage = $event.detail.value),
    d: common_vendor.t($data.searchResults),
    e: common_vendor.p({
      id: "van-dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
