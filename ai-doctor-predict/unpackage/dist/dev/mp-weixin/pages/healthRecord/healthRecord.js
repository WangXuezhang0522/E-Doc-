"use strict";
const common_vendor = require("../../common/vendor.js");
const common_helper = require("../../common/helper.js");
const _sfc_main = {
  data() {
    return {
      userName: "",
      weight: "",
      height: "",
      bloodSugar: "",
      bloodPressure: "",
      heartRate: "",
      sleep: "",
      healthObject: {},
      conversation: [],
      ischeckName: false,
      ischeckWeight: false,
      ischeckHeight: false,
      ischeckBloodSugar: false,
      ischeckBloodPressure: false,
      ischeckHeartRate: false,
      ischeckSleep: false
    };
  },
  methods: {
    onSubmit(e) {
      if (this.userName === "" && this.weight === "" && this.height === "" && this.bloodSugar === "" && this.bloodPressure === "" && this.heartRate === "" && this.sleep === "") {
        common_vendor.index.showToast({
          title: "请输入点什么呗！",
          duration: 2e3,
          icon: "error"
        });
      } else {
        if (this.ischeckName || this.ischeckWeight || this.ischeckHeight || this.ischeckBloodSugar || this.ischeckBloodPressure || this.ischeckHeartRate || this.ischeckSleep) {
          common_vendor.index.showToast({
            title: "请检查输入格式",
            duration: 2e3,
            icon: "error"
          });
          return;
        }
        this.healthObject = {
          userName: this.userName,
          weight: this.weight,
          height: this.height,
          bloodSugar: this.bloodSugar,
          bloodPressure: this.bloodPressure,
          heartRate: this.heartRate,
          sleep: this.sleep
        };
        this.conversation.unshift(this.healthObject);
        console.log("健康档案数据保存成功");
        common_helper.helper.healthArr = this.conversation;
        common_vendor.index.request({
          url: "http://127.0.0.1:5000/insertuser",
          data: {
            name: this.userName,
            weight: this.weight,
            height: this.height,
            bloodSugar: this.bloodSugar,
            bloodPressure: this.bloodPressure,
            heartRate: this.heartRate,
            sleep: this.sleep
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          success: (response) => {
            console.log("发送成功");
            common_vendor.index.navigateBack({
              delta: 1
            });
          },
          fail: (error) => {
            console.error(error);
          }
        });
      }
    },
    // 检查姓名
    checkName() {
      this.ischeckName = false;
      if (!/^^[\u4e00-\u9fa5]{2,4}$/.test(this.userName)) {
        this.ischeckName = true;
      }
    },
    // 检查体重
    checkWeight() {
      this.ischeckWeight = false;
      if (!/^([1-9]{0,2}|[1-4][0-9]{0,2}|500)$/.test(this.weight)) {
        this.ischeckWeight = true;
      }
    },
    // 检查身高
    checkHeight() {
      this.ischeckHeight = false;
      if (!/^([5-9][0-9]|[5-9][0-9](\.\d{1})?|[1][0-9][0-9]|[1][0-9][0-9](\.\d{1})?|[2][0-2][0-9]|230)$/.test(this.height)) {
        this.ischeckHeight = true;
      }
    },
    // 检查血糖
    checkBloodSugar() {
      this.ischeckBloodSugar = false;
      if (!/^(([0-9]{0,2})|([0-9][0-9](\.\d{1})?)|([0-9](\.\d{1})?)|100)$/.test(this.bloodSugar)) {
        this.ischeckBloodSugar = true;
      }
    },
    // 检查血压
    checkBloodPressure() {
      this.ischeckBloodPressure = false;
      if (!/^([1-9][0-9](\.\d{1})?|[1-9][0-9]|[1-2][0-9][0-9](\.\d{1})?|[1-2][0-9][0-9]|300)$/.test(this.bloodPressure)) {
        this.ischeckBloodPressure = true;
      }
    },
    // 检查心率
    checkHeartRate() {
      this.ischeckHeartRate = false;
      if (!/^([1-9][0-9]|[1-9][0-9](\.\d{1})?|[1-2][0-9][0-9]|[1-2][0-9][0-9](\.\d{1})?|300)$/.test(this.heartRate)) {
        this.ischeckHeartRate = true;
      }
    },
    // 检查睡眠
    checkSleep() {
      this.ischeckSleep = false;
      if (!/^([0-9]|[0-9](\.\d{1})?|[1][0-9]|[1][0-9](\.\d{1})?|[2][0-4]|[2][0-4](\.\d{1})?)$/.test(this.sleep)) {
        this.ischeckSleep = true;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.checkName && $options.checkName(...args)),
    b: $data.userName,
    c: common_vendor.o(($event) => $data.userName = $event.detail.value),
    d: $data.ischeckName
  }, $data.ischeckName ? {} : {}, {
    e: common_vendor.o((...args) => $options.checkWeight && $options.checkWeight(...args)),
    f: $data.weight,
    g: common_vendor.o(($event) => $data.weight = $event.detail.value),
    h: $data.ischeckWeight
  }, $data.ischeckWeight ? {} : {}, {
    i: common_vendor.o((...args) => $options.checkHeight && $options.checkHeight(...args)),
    j: $data.height,
    k: common_vendor.o(($event) => $data.height = $event.detail.value),
    l: $data.ischeckHeight
  }, $data.ischeckHeight ? {} : {}, {
    m: common_vendor.o((...args) => $options.checkBloodSugar && $options.checkBloodSugar(...args)),
    n: $data.bloodSugar,
    o: common_vendor.o(($event) => $data.bloodSugar = $event.detail.value),
    p: $data.ischeckBloodSugar
  }, $data.ischeckBloodSugar ? {} : {}, {
    q: common_vendor.o((...args) => $options.checkBloodPressure && $options.checkBloodPressure(...args)),
    r: $data.bloodPressure,
    s: common_vendor.o(($event) => $data.bloodPressure = $event.detail.value),
    t: $data.ischeckBloodPressure
  }, $data.ischeckBloodPressure ? {} : {}, {
    v: common_vendor.o((...args) => $options.checkHeartRate && $options.checkHeartRate(...args)),
    w: $data.heartRate,
    x: common_vendor.o(($event) => $data.heartRate = $event.detail.value),
    y: $data.ischeckHeartRate
  }, $data.ischeckHeartRate ? {} : {}, {
    z: common_vendor.o((...args) => $options.checkSleep && $options.checkSleep(...args)),
    A: $data.sleep,
    B: common_vendor.o(($event) => $data.sleep = $event.detail.value),
    C: $data.ischeckSleep
  }, $data.ischeckSleep ? {} : {}, {
    D: common_vendor.o((...args) => $options.onSubmit && $options.onSubmit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/healthRecord/healthRecord.vue"]]);
wx.createPage(MiniProgramPage);
