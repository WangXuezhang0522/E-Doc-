"use strict";
const hotList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e58c458853aeff53906.png",
    "title": "医保码用户超10亿人",
    "data": "11月26日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e1ac458853aeff46377.jpg",
    "title": "肺结核免费治疗",
    "data": "11月26日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e2ec458853aeff4a4ca.jpg",
    "title": "开发专属普惠险产品",
    "data": "11月25日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e5fc458853aeff54ee6.jpg",
    "title": "支持保险企业投资兴办医疗机构",
    "data": "11月24日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e2ec458853aeff4a44b.jpg",
    "title": "建议支持本土企业优先上市融资",
    "data": "11月23日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e2ec458853aeff4a4b7.jpg",
    "title": "将肺癌筛查纳入医保报销",
    "data": "11月23日"
  }
];
const lifeList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e27c458853aeff48ca8.jpg",
    "title": "喝粥能养胃吗？",
    "data": "11月27日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e13c458853aeff44bd7.jpg",
    "title": "反复烧开的水不能喝？",
    "data": "11月27日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e3cc458853aeff4d518.webp",
    "title": "转基因大豆油是不健康的？",
    "data": "11月26日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e38c458853aeff4c572.jpg",
    "title": "葡萄汁送服降压药效果好！",
    "data": "11月25日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e34c458853aeff4ba8e.jpg",
    "title": "每天十杯水,膀胱癌不会来",
    "data": "11月24日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e27c458853aeff48c35.png",
    "title": "喝水太多会增加肾脏负担？",
    "data": "10月20日"
  }
];
const foodList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e13c458853aeff44c3d.jpg",
    "title": "饭后吃水果是错误的观念",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e34c458853aeff4ba8e.jpg",
    "title": "每天十杯水，膀胱癌不会来",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e38c458853aeff4c5fd.jpg",
    "title": "少吃多油脂的食物",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e58c458853aeff538b0.jpg",
    "title": "一天一苹果让自己有个健康的肺",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e34c458853aeff4b94b.jpg",
    "title": "每天摄取富含高纤维的五谷",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e27c458853aeff48b9d.jpg",
    "title": "减少食用盐腌、烟熏的食物",
    "data": "11月22日"
  }
];
const babyList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e5fc458853aeff54f96.png",
    "title": "准爸爸也会有妊娠反应？",
    "data": "10月6日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e0bc458853aeff43443.jpg",
    "title": "爸爸情绪坏，婴儿易哭闹",
    "data": "9月28日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e64c458853aeff56040.jpg",
    "title": "补充益生菌，提高免疫力",
    "data": "9月21日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e38c458853aeff4c62d.jpg",
    "title": "舌头会说话",
    "data": "9月12日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e13c458853aeff44b80.jpg",
    "title": "冲奶粉不能上下摇",
    "data": "7月29日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e53c458853aeff5263d.jpg",
    "title": "新生儿盖脚印，而不是手印？",
    "data": "7月22日"
  }
];
const diseaseList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e58c458853aeff53864.png",
    "title": "正常体温：36.3℃-37.2℃",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e34c458853aeff4b8d9.jpg",
    "title": "尿量：1000~2000毫升/24小时",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e60c458853aeff5517a.jpg",
    "title": "最佳减肥速度：每月减重1~2公斤",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e1ac458853aeff4634d.jpg",
    "title": "肥胖信号：一个月增重1.5公斤",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e47c458853aeff4fdce.png",
    "title": "糖尿病:空腹血糖> 7.0毫摩/升",
    "data": "11月22日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e22c458853aeff47cd5.png",
    "title": "骨密度最高的时期：30~40岁",
    "data": "11月22日"
  }
];
const protectionList = [
  {
    "image": "https://pic.imgdb.cn/item/65632e0bc458853aeff43468.jpg",
    "title": "不要共享个人物品",
    "data": "12月9日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e27c458853aeff48bdf.jpg",
    "title": "咳嗽和打喷嚏时掩住嘴",
    "data": "11月29日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e5fc458853aeff54f2e.jpg",
    "title": "注射流感疫苗",
    "data": "10月12日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e0bc458853aeff434b5.jpg",
    "title": "不要抠鼻子(或嘴和眼睛)",
    "data": "9月17日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e64c458853aeff56068.jpg",
    "title": "安全性行为",
    "data": "9月16日"
  },
  {
    "image": "https://pic.imgdb.cn/item/65632e3cc458853aeff4d518.webp",
    "title": "使用安全烹饪方法",
    "data": "9月12日"
  }
];
const healthList = { hotList, lifeList, foodList, babyList, diseaseList, protectionList };
exports.healthList = healthList;
