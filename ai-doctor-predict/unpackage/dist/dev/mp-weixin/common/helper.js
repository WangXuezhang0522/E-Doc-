"use strict";
let healthArr = [
  // userName: '缪大帅',
  // weight: '66',
  // height: '180',
  // bloodSugar: '6.7',
  // bloodPressure: '88',
  // heartRate: '72',
  // sleep: '6'
];
const now = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
const isArray = Array.isArray || function(obj) {
  return obj instanceof Array;
};
const helper = {
  healthArr,
  now,
  isArray
};
exports.helper = helper;
