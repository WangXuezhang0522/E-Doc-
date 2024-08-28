"use strict";
const common_vendor = require("../../common/vendor.js");
const static_data_health = require("../../static/data/health.js");
const _sfc_main = {
  data() {
    return {
      newsList: []
    };
  },
  onLoad(id) {
    this.getList(id);
  },
  methods: {
    getList(id) {
      const realId = common_vendor.toRaw(id).id;
      switch (realId) {
        case "1": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.hotList);
          break;
        }
        case "2": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.lifeList);
          break;
        }
        case "3": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.foodList);
          break;
        }
        case "4": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.babyList);
          break;
        }
        case "5": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.diseaseList);
          break;
        }
        case "6": {
          this.newsList = common_vendor.toRaw(static_data_health.healthList.protectionList);
          break;
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.newsList, (item, k0, i0) => {
      return {
        a: item.image,
        b: item.id
      };
    }),
    b: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.data),
        d: item
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/hotSpot/hotSpot.vue"]]);
wx.createPage(MiniProgramPage);
