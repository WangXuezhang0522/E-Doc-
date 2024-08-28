"use strict";
const common_vendor = require("../../common/vendor.js");
const wxcomponents_vant_dist_dialog_dialog = require("../../wxcomponents/vant/dist/dialog/dialog.js");
const _sfc_main = {
  data() {
    return {
      logList: []
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://127.0.0.1:5000/getpsylogdata",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: (response) => {
        this.logList = JSON.parse(response.data.result);
        this.logList = this.logList.splice(1);
        console.log(this.logList);
      },
      fail: (error) => {
        console.error(error);
      }
    });
  },
  methods: {
    deleteHistory() {
      common_vendor.index.request({
        url: "http://127.0.0.1:5000/deletepsylogdata",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: (response) => {
          wxcomponents_vant_dist_dialog_dialog.Dialog.alert({
            confirmButtonText: "确认",
            context: this,
            title: "删除成功",
            overlay: "false",
            theme: "round-button"
          }).then(() => {
            this.$forceUpdate();
          });
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
    a: common_vendor.f($data.logList, (log, k0, i0) => {
      return common_vendor.e({
        a: log.humanin
      }, log.humanin ? {
        b: common_vendor.t(log.humanin)
      } : {}, {
        c: log.airesult
      }, log.airesult ? {
        d: common_vendor.t(log.airesult)
      } : {}, {
        e: log
      });
    }),
    b: common_vendor.o((...args) => $options.deleteHistory && $options.deleteHistory(...args)),
    c: common_vendor.p({
      id: "van-dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/heartHistory/heartHistory.vue"]]);
wx.createPage(MiniProgramPage);
