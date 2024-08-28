"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/splashPage/splashPage.js";
  "./pages/index/index.js";
  "./pages/disease/disease.js";
  "./pages/center/center.js";
  "./pages/health/health.js";
  "./pages/predict/predict.js";
  "./pages/psychology/psychology.js";
  "./pages/hotSpot/hotSpot.js";
  "./pages/heart/heart.js";
  "./pages/voice/voice.js";
  "./pages/healthRecord/healthRecord.js";
  "./pages/heartHistory/heartHistory.js";
  "./pages/predictHistory/predictHistory.js";
  "./pages/search/search.js";
  "./pages/login/login.js";
  "./pages/aboutUs/aboutUs.js";
  "./pages/searchHistory/searchHistory.js";
  "./pages/webview/webview.js";
  "./pages/medicineRemind/medicineRemind.js";
  "./pages/healthHistory/healthHistory.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
