

// 搜索结果数据
let searchResponse = '';
// 是否登录判断
let isLogin =  false;
// 用户名字
let userName = '';
// 用户头像
let userHeadShot = '';
// 健康档案数据数组
let healthArr = [
	// userName: '缪大帅',
	// weight: '66',
	// height: '180',
	// bloodSugar: '6.7',
	// bloodPressure: '88',
	// heartRate: '72',
	// sleep: '6'
];
const  now = Date.now || function () {  
    return new Date().getTime();  
};  
const isArray = Array.isArray || function (obj) {  
    return obj instanceof Array;  
};  

export default {
	healthArr, 
    now,  
    isArray  
}