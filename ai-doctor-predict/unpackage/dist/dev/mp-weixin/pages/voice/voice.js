"use strict";
const common_vendor = require("../../common/vendor.js");
var plugin = requirePlugin("WechatSI");
let manager = plugin.getRecordRecognitionManager();
const _sfc_main = {
  data() {
    return {
      currentText: ""
    };
  },
  onLoad() {
    this.initRecord();
  },
  methods: {
    streamRecord: function() {
      console.log("=======开始====");
      manager.start({
        lang: "zh_CN"
      });
    },
    endStreamRecord: function() {
      console.log("=======结束====");
      manager.stop();
    },
    initRecord: function() {
      manager.onRecognize = (res) => {
        let text = res.result;
        this.currentText = text;
      };
      manager.onStop = (res) => {
        let text = res.result;
        if (text == "") {
          console.log("没有说话");
          return;
        }
        this.currentText = text;
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.streamRecord && $options.streamRecord(...args)),
    b: common_vendor.o((...args) => $options.endStreamRecord && $options.endStreamRecord(...args)),
    c: common_vendor.t($data.currentText)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/voice/voice.vue"]]);
wx.createPage(MiniProgramPage);
