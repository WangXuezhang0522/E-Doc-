"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInput: "",
      conversation: [],
      // 语音识别内容
      currentText: "",
      // 回答加载
      predictLoad: false
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://127.0.0.1:5000/AiPredictionsend",
      data: {
        // sendtype:'prediction',
        text: "你好"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: (response) => {
        const robotMessage = {
          id: (/* @__PURE__ */ new Date()).getTime(),
          type: "robot",
          text: response.data
        };
        this.conversation.push(robotMessage);
      },
      fail: (error) => {
        console.error(error);
      }
    });
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const userMessage = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        type: "prediction",
        text: this.userInput
      };
      if (this.userInput == "") {
        common_vendor.index.showToast({
          title: "请输入点什么呗！",
          //显示的文字
          duration: 2e3,
          //显示多少毫秒，默认1500毫秒，时间到自动隐藏
          icon: "error"
          //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
        });
      } else {
        let _this = this;
        this.conversation.push(userMessage);
        this.userInput = "";
        this.predictLoad = true;
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/AiPredictionsend",
          data: {
            text: userMessage.text
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            _this.predictLoad = false;
            const robotMessage = {
              id: (/* @__PURE__ */ new Date()).getTime(),
              type: "robot",
              text: response.data
            };
            this.conversation.push(robotMessage);
          },
          fail: (error) => {
            console.error(error);
          }
        });
      }
    },
    // 语音识别
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
        this.userInput = text;
        console.log(this.userInput);
      };
    }
  }
};
if (!Array) {
  const _component_van_loading = common_vendor.resolveComponent("van-loading");
  _component_van_loading();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.conversation, (message, k0, i0) => {
      return common_vendor.e({
        a: message.type === "prediction"
      }, message.type === "prediction" ? {
        b: common_vendor.t(message.text)
      } : {
        c: common_vendor.t(message.text)
      }, {
        d: message.id
      });
    }),
    b: $data.userInput,
    c: common_vendor.o(($event) => $data.userInput = $event.detail.value),
    d: common_vendor.o((...args) => $options.onSubmit && $options.onSubmit(...args)),
    e: $data.predictLoad
  }, $data.predictLoad ? {
    f: common_vendor.p({
      color: "#55ff00",
      size: "40px"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/predict/predict.vue"]]);
wx.createPage(MiniProgramPage);
