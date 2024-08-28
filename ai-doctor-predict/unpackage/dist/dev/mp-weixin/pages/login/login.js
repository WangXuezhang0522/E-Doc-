"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const wxcomponents_vant_dist_dialog_dialog = require("../../wxcomponents/vant/dist/dialog/dialog.js");
const _sfc_main = {
  data() {
    return {
      avatarUrlValue: "",
      nickNameValue: ""
    };
  },
  methods: {
    // 微信登录并获取头像昵称
    onChooseAvatar(e) {
      this.avatarUrlValue = e.detail.avatarUrl;
      common_helper.helper.userHeadShot = e.detail.avatarUrl;
      this.$forceUpdate();
    },
    toIndex() {
      if (this.avatarUrlValue === "") {
        wxcomponents_vant_dist_dialog_dialog.Dialog.alert({
          confirmButtonText: "继续上传",
          context: this,
          title: "您还没有上传头像哟 ~",
          overlay: "false",
          theme: "round-button"
        }).then(() => {
        });
        return;
      }
      this.$forceUpdate();
      if (this.nickNameValue === "") {
        wxcomponents_vant_dist_dialog_dialog.Dialog.alert({
          confirmButtonText: "继续填写",
          context: this,
          title: "您还没有填写昵称哟 ~",
          overlay: "false",
          theme: "round-button"
        }).then(() => {
        });
        return;
      }
      common_helper.helper.userName = this.nickNameValue;
      common_helper.helper.isLogin = true;
      common_vendor.index.navigateBack({
        delta: 1
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
    a: $data.avatarUrlValue,
    b: common_vendor.o((...args) => $options.onChooseAvatar && $options.onChooseAvatar(...args)),
    c: $data.nickNameValue,
    d: common_vendor.o(($event) => $data.nickNameValue = $event.detail.value),
    e: common_vendor.o((...args) => $options.toIndex && $options.toIndex(...args)),
    f: common_vendor.p({
      id: "van-dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
