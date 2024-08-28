"use strict";
const common_vendor = require("../../common/vendor.js");
const wxcomponents_vant_dist_dialog_dialog = require("../../wxcomponents/vant/dist/dialog/dialog.js");
const _sfc_main = {
  data() {
    return {
      medicine: "",
      dosage: "",
      manner: "",
      note: "",
      time: "",
      // 消息推送所需
      appid: "wxb0d7b6c8d17b6d9d",
      secret: "bc95d748cb89427778e0b871f88843fa",
      code: "",
      useropenId: "",
      access_token: "",
      ischeckName: false,
      ischeckWeight: false,
      ischeckHeight: false,
      ischeckBloodSugar: false,
      ischeckBloodPressure: false,
      ischeckHeartRate: false,
      ischeckSleep: false
    };
  },
  onLoad() {
    this.user_login();
  },
  methods: {
    // 消息推送
    Subscribe() {
      if (this.ischeckName || this.ischeckWeight || this.ischeckHeight || this.ischeckBloodSugar || this.ischeckBloodPressure || this.ischeckHeartRate || this.ischeckSleep) {
        common_vendor.index.showToast({
          title: "请检查输入格式",
          duration: 2e3,
          icon: "error"
        });
        return;
      }
      let self = this;
      console.log("消息推送被点击了");
      common_vendor.index.requestSubscribeMessage({
        //此处填写刚才申请模板的模板ID
        tmplIds: ["DxOajrggcFFYqSyEPhyu_bLQi_MUb7lHJavlmOxCBDE"],
        success(res) {
          console.log(res);
          self.notice();
        }
      });
    },
    get_wx_access_token() {
      let self = this;
      return common_vendor.index.request({
        method: "get",
        // appip和secret需要去小程序管理界面查看
        url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${self.appid}&secret=${self.secret}`,
        dataType: "json",
        timeout: 1e3
      }).then((res) => {
        console.log(res);
        console.log("access_taken  " + res.data.access_token);
        this.access_token = res.data.access_token;
        return res.data.access_token;
      });
    },
    // 消息推送获取用户id
    // 在onload中被调用
    async user_login() {
      let self = this;
      await common_vendor.index.login({
        success(res) {
          if (res.code) {
            console.log("用户id获取成功");
            self.code = res.code;
            console.log("res.code " + self.code);
            common_vendor.index.request({
              url: `https://api.weixin.qq.com/sns/jscode2session?appid=${self.appid}&secret=${self.secret}&js_code=${self.code}&grant_type=authorization_code`,
              success(data) {
                self.useropenId = data.data.openid;
                console.log("self.useropenId  " + self.useropenId);
              }
            });
          } else {
            console.log("获取失败！" + res.errMsg);
          }
        }
      });
    },
    // 发送订阅消息
    notice() {
      let self = this;
      let date = /* @__PURE__ */ new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      date.getSeconds();
      let timeArr = this.time.split("/");
      console.log(hour + "," + minute);
      console.log(timeArr[0] + "..." + timeArr[1]);
      console.log(hour == timeArr[0] && minute == timeArr[1]);
      if (hour == timeArr[0] && minute == timeArr[1]) {
        console.log("notice方法被触发");
        let pushmsg = {
          "page": "index",
          "miniprogram_state": "developer",
          "lang": "zh_CN",
          "touser": self.useropenId,
          "template_id": "DxOajrggcFFYqSyEPhyu_bLQi_MUb7lHJavlmOxCBDE",
          "data": {
            "thing1": {
              "value": self.medicine
            },
            "thing3": {
              "value": self.dosage
            },
            "thing4": {
              "value": self.manner
            },
            "thing5": {
              "value": self.note
            }
          }
        };
        this.get_wx_access_token();
        console.log("notice方法中的self.access_token: " + self.access_token);
        setTimeout(() => {
          console.log("定时器中的token" + self.access_token);
          common_vendor.index.request({
            url: "https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=" + self.access_token,
            data: JSON.stringify(pushmsg),
            method: "POST",
            success: function(res) {
              console.log("推送消息的res " + JSON.stringify(res));
              console.log("成功推送消息");
            }
          });
        }, 2e3);
        setTimeout(() => {
          wxcomponents_vant_dist_dialog_dialog.Dialog.confirm({
            message: "设置吃药提醒成功！"
          }).then(() => {
          }).catch(() => {
          });
        }, 1e3);
      }
    }
  },
  // 检查输入格式
  checkMedicine() {
    this.ischeckName = false;
    if (!/^^[\u4e00-\u9fa5]{1,20}$/.test(this.medicine)) {
      this.ischeckName = true;
    }
  },
  checkDosage() {
  },
  checkManner() {
    this.ischeckHeight = false;
    if (!/^^[\u4e00-\u9fa5]{1,20}$/.test(this.manner)) {
      this.ischeckHeight = true;
    }
  },
  checkNote() {
    this.ischeckBloodSugar = false;
    if (!/^^[\u4e00-\u9fa5]{1,50}$/.test(this.note)) {
      this.ischeckBloodSugar = true;
    }
  }
};
if (!Array) {
  const _component_van_notice_bar = common_vendor.resolveComponent("van-notice-bar");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  (_component_van_notice_bar + _component_van_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => _ctx.checkMedicine && _ctx.checkMedicine(...args)),
    b: $data.medicine,
    c: common_vendor.o(($event) => $data.medicine = $event.detail.value),
    d: $data.ischeckName
  }, $data.ischeckName ? {} : {}, {
    e: common_vendor.o((...args) => _ctx.checkDosage && _ctx.checkDosage(...args)),
    f: $data.dosage,
    g: common_vendor.o(($event) => $data.dosage = $event.detail.value),
    h: $data.ischeckWeight
  }, $data.ischeckWeight ? {} : {}, {
    i: common_vendor.o((...args) => _ctx.checkManner && _ctx.checkManner(...args)),
    j: $data.manner,
    k: common_vendor.o(($event) => $data.manner = $event.detail.value),
    l: $data.ischeckHeight
  }, $data.ischeckHeight ? {} : {}, {
    m: common_vendor.o((...args) => _ctx.checkNote && _ctx.checkNote(...args)),
    n: $data.note,
    o: common_vendor.o(($event) => $data.note = $event.detail.value),
    p: $data.ischeckBloodSugar
  }, $data.ischeckBloodSugar ? {} : {}, {
    q: common_vendor.o((...args) => _ctx.checkTime && _ctx.checkTime(...args)),
    r: $data.time,
    s: common_vendor.o(($event) => $data.time = $event.detail.value),
    t: $data.ischeckBloodPressure
  }, $data.ischeckBloodPressure ? {} : {}, {
    v: common_vendor.o((...args) => $options.Subscribe && $options.Subscribe(...args)),
    w: common_vendor.p({
      color: "#1989fa",
      background: "rgba(0, 170, 255, 0.00)",
      leftIcon: "info-o",
      text: "智能医生提醒您。"
    }),
    x: common_vendor.p({
      id: "van-dialog"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/medicineRemind/medicineRemind.vue"]]);
wx.createPage(MiniProgramPage);
