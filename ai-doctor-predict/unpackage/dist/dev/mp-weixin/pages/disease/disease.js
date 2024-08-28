"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [{
        list2: [{
          src: "https://pic.imgdb.cn/item/65632e1ac458853aeff46386.png",
          name: "肺结核"
        }, {
          src: "https://pic.imgdb.cn/item/65632e53c458853aeff5267f.png",
          name: "抑郁症"
        }, {
          src: "https://pic.imgdb.cn/item/65632e22c458853aeff47d34.png",
          name: "高血压"
        }, {
          src: "https://pic.imgdb.cn/item/65632e47c458853aeff4fd31.png",
          name: "糖尿病"
        }, {
          src: "https://pic.imgdb.cn/item/65632e34c458853aeff4b8f8.png",
          name: "白癜风"
        }, {
          src: "https://pic.imgdb.cn/item/65632e53c458853aeff5261b.png",
          name: "白内障"
        }, {
          src: "https://pic.imgdb.cn/item/65632e1ac458853aeff46313.png",
          name: "乙肝"
        }, {
          src: "https://pic.imgdb.cn/item/65632e53c458853aeff5262d.png",
          name: "心脏病"
        }, {
          src: "https://pic.imgdb.cn/item/65632e2ec458853aeff4a38e.png",
          name: "老年痴呆"
        }, {
          src: "https://pic.imgdb.cn/item/65632e22c458853aeff47d81.png",
          name: "骨质疏松"
        }]
      }, {
        list2: [{
          src: "https://pic.imgdb.cn/item/65632e64c458853aeff56080.png",
          name: "其他"
        }]
      }],
      contentList: [{}],
      specificList: [{}],
      // 疾病具体内容
      content: "",
      // 疾病标题
      title: "",
      // 当前列表索引
      listIndex: ""
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://127.0.0.1:5000/selectdisdata",
      // data: {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: (response) => {
        this.contentList = JSON.parse(response.data.result);
        console.log(this.contentList);
      },
      fail: (error) => {
        console.error(error);
      }
    });
  },
  methods: {
    getList(id) {
      console.log("图标被点击了");
      this.listIndex = id;
      this.content = this.contentList[id].overview;
      this.title = this.contentList[id].name;
    },
    reviseList(type) {
      if (type == "概述") {
        this.content = this.contentList[this.listIndex].overview;
      } else {
        type == "病因" ? this.content = this.contentList[this.listIndex].cause : this.content = this.contentList[this.listIndex].symptoms;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.list2, (item2, index2, i1) => {
          return {
            a: item2.src,
            b: common_vendor.o(($event) => $options.getList(index2), index2),
            c: common_vendor.t(item2.name),
            d: index2
          };
        }),
        b: index
      };
    }),
    b: common_vendor.o(($event) => $options.reviseList("概述")),
    c: common_vendor.o(($event) => $options.reviseList("病因")),
    d: common_vendor.o(($event) => $options.reviseList("症状")),
    e: common_vendor.t($data.title),
    f: common_vendor.t($data.content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/tabletop/项目/e-Doc辅助疾病预测及早期诊断/code/web-app.3.0/ai-doctor-predict/pages/disease/disease.vue"]]);
wx.createPage(MiniProgramPage);
