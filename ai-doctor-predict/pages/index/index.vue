<template>
	<view class="overall">
		<!-- 搜索框 -->
		<view class="search">
			<view class="font">
				<image src="../../static/智能搜索.png"></image>
			</view>
			<input v-model="inputMessage" type="text" confirm-type="search" @focus="setShowTrue" @confirm="toSearch"
				shape="round" background="#f8f8f8" placeholder="请输入搜索关键词" />
				<!-- 扫码功能 -->
				<image @click="toScan" class="scan" src="../../static/扫码.png"></image>
		</view>
		<!-- 遮罩层 -->
		<view v-if="show" class="wrapper" @click="setShowFalse">
			<view class="block"
				:style="{transition:'all 1s linear',animation:'blockAm direction',backgroundImage:blockBackGroundColor}">
			</view>
		</view>
		<!-- 通知区域 -->
		<view class="notice">
			<van-notice-bar left-icon="volume-o" text="已有超过788名用户使用Ai问诊成功发现病情并得到及时治疗" background="#f8f8f8"
				color="#ffaa7f" speed=55 />
		</view>
		<!-- Ai问诊区域 -->
		<view class="ai">
			<!-- Ai问诊 -->
			<view class="Interrogation">
				<view class="box" type="default" @click="toPredict">
					<!-- 左侧文字区 -->
					<view class="left">
						<h1 class="h1">Ai问诊</h1>
						<p class="p">症状诊断病情</p>
						<van-tag mark type="success">智能</van-tag>
					</view>

					<!-- 右侧图标区 -->
					<view class="right">
						<img class="img" src="https://pic.imgdb.cn/item/65632e5fc458853aeff54de3.png">
					</view>
				</view>
			</view>
			<!-- Ai心理 -->
			<view class="psychology">
				<view class="box" type="default" @click="toHeart">
					<!-- 左侧文字区 -->
					<view class="left">
						<h1 class="h1">Ai心理</h1>
						<p class="p">智能心理咨询师</p>
						<van-tag mark type="danger">知心</van-tag>
					</view>
					<!-- 右侧图标区 -->
					<view class="right">
						<img class="img" src="https://pic.imgdb.cn/item/65632e64c458853aeff5609e.png">
					</view>
				</view>
			</view>
		</view>
		
		<!-- 轮播图 -->
		<swiper class="banner" indicator-dots :autoplay="true" circular interval="3000">
			<swiper-item v-for="item in pictures" :key="item.id">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<!-- 智能吃药提醒区域 -->
		<view class="medicine" @click="toMedicineRemind">
			<image class="left" src="../../static/药店.png"></image>
			<p class="p">智能用药提醒</p>
			<view class="tips">实时关注并提醒您服用药物的时间</view>
			<image class="toRight" src="../../static/向右双箭头.png"></image>
		</view>
		<!-- 健康+ -->
		<view class="health">
			<!-- 头部区域 -->
			<text class="top">健康+</text>
			<van-tag mark type="primary" size="medium" color="rgba(0, 170, 255, 0.7)">BMI
				{{BMI}}</van-tag>
			<ul class="ul">
				<li class="li">
					<view class="left">
						<text class="h1">体重</text>
						<text class="number">
							<text>{{healthArray.weight}}</text>
							kg</text>
						<text class="p">管理健康体重</text>
					</view>
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e47c458853aeff4fde1.png"></image>
					</view>
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">身高</text>
						<text class="number">
							<text>{{healthArray.height}}</text>
							cm</text>
						<text class="p">标准身高总览</text>
					</view>
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e38c458853aeff4c51a.png"></image>
					</view>
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">血糖</text>
						<text class="number">
							<text>{{healthArray.bloodSugar}}</text>
							mmol/l</text>
						<text class="p">维持血糖水平</text>
					</view>
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e22c458853aeff47d05.png"></image>
					</view>
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">血压</text>
						<text class="number">
							<text>{{healthArray.bloodPressure}}</text>
							mmhg</text>
						<text class="p">及时了解血压</text>
					</view>
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e53c458853aeff52690.png"></image>
					</view>
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">心率</text>
						<text class="number">
							<text>{{healthArray.heartRate}}</text>
							次/每分</text>
						<text class="p">心脏一分钟跳动</text>
					</view>
					<!-- 右 -->
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e47c458853aeff4fcf0.png"></image>
					</view>
				</li>
				<li class="li">
					<view class="left">
						<text class="h1">睡眠</text>
						<text class="number">
							<text>{{healthArray.sleep}}</text>
							小时</text>
						<text class="p">监控睡眠状况</text>
					</view>
					<view class="right">
						<image class="img" src="https://pic.imgdb.cn/item/65632e3cc458853aeff4d424.png"></image>
					</view>
				</li>
			</ul>
			<!-- 综合评价 -->
			<view class="evaluation">
				<view class="top">
					<view class="h1">Ai综合评价</view>
				</view>
				<view class="bottom">
					<van-loading v-if="(!appraise)&&healthArray.weight!==0"  class="load" color="#1989fa" text-size="13px"   size="30px"> Ai正在分析中...</van-loading >
					{{appraise||''}}
				</view>
			</view>
			<!-- 运动建议 -->
			<view class="sports">
				<view class="top">
					<view class="h1">Ai运动建议</view>
				</view>
				<view class="bottom">
					<van-loading v-if="(!sportAdvice)&&healthArray.weight!==0" class="load" color="#1989fa" text-size="13px"   size="30px"> Ai正在分析中...</van-loading >
					{{sportAdvice||''}}
				</view>
			</view>
			<!-- 饮食建议 -->
			<view class="food">
				<view class="top">
					<view class="h1">Ai饮食建议</view>
				</view>
				<view class="bottom">
                   <van-loading v-if="(!dietaryAdvice)&&healthArray.weight!==0" class="load" color="#1989fa" text-size="13px"   size="30px"> Ai正在分析中...</van-loading >
					{{dietaryAdvice||''}}
				</view>
			</view>
			<!-- 医疗建议 -->
			<view class="medical">
				<view class="top">
					<view class="h1">Ai作息建议</view>
				</view>
				<view class="bottom">
					<van-loading v-if="(!sleepAdvice)&&healthArray.weight!==0" class="load" color="#1989fa"  text-size="13px"  size="30px"> Ai正在分析中...</van-loading >
					{{sleepAdvice||''}}
				</view>
			</view>
		</view>

		<view class="more">
			<view class="p">没有更多内容了~</view>
		</view>
		<!-- 搜索框为空时弹窗 -->
		<van-dialog id="van-dialog" />

        <!-- 当用户初次登录时弹出注册选项 -->
        <!-- 未注册时禁止用户进行操作 -->
         <view v-if="!isLogin" @click="toLogin" class="banAction"></view>
		 <!-- 设置搜索加载 -->

        <van-loading class="searchLoad" v-if="searchLoad" color="#1989fa" size="40px" vertical>搜索中...</van-loading>
	</view>
</template>

<script>
	// 全局变量引入
	import helper from '../../common/helper.js';
	import Dialog from '../../wxcomponents/vant/dist/dialog/dialog'
	export default {
		data() {
			return {
				// 登录相关数据
				buttonRect: {},
				// 判断是否完成登录
				// isLogin:true,
				isLogin:false,
				searchLoad:false,
				// 轮播图数据
				pictures: [{
						id: '1',
						url: "https://pic.imgdb.cn/item/65632e64c458853aeff560da.jpg"
					},
					{
						id: '2',
						url: "https://pic.imgdb.cn/item/65632e0bc458853aeff43415.png"
					},
					{
						id: '3',
						url: "https://pic.imgdb.cn/item/65632e68c458853aeff56f0f.jpg"
					}
				],
				show: false,
				// 设置遮罩层颜色
				blockBackGroundColor: '',
				// 遮罩层显示
				displayShow: '',
				// 用户搜索
				inputMessage: '',
				// 健康档案对象数据
				healthArray: {
				
				},
				// 综合评价
				appraise: '',
				// 饮食建议
				dietaryAdvice: '',
				// 运动建议
				sportAdvice: '',
				// 作息建议
				sleepAdvice: '',
				// 实时计算BMI值
				BMI: 0.0
			}
		},
		onLoad() {

		},
		onShow() {
			this.isLogin = helper.isLogin;
			// 健康档案赋值
			this.healthArray = helper.healthArr[0] || { 
				userName: '用户',
				weight: 0,
				height: 0,
				bloodSugar: 0,
				bloodPressure: 0,
				heartRate:0,
				sleep: 0
			};
			if ((((10000.0 * this.healthArray.weight) / (this.healthArray.height * this.healthArray.height)).toFixed(1)) !=
				(((10000.0 * this.healthArray.weight) / (this.healthArray.height * this.healthArray.height)).toFixed(1))) {
				this.BMI = 0.0
			}else{
				this.BMI = ((10000.0 * this.healthArray.weight) / (this.healthArray.height * this.healthArray.height)).toFixed(1)
			}
			if (this.healthArray.userName !== '用户') {
				let _this = this
				// 综合评价接口
				uni.request({
					url: 'http://127.0.0.1:5000/comprehensives',
					data: {
						name: _this.healthArray.userName
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
					success: response => {
						_this.appraise = response.data
					},
					fail: error => {
						console.error(error);
					},
				});
				// 饮食建议接口
				setTimeout(function() {
					uni.request({
						url: 'http://127.0.0.1:5000/dietarys',
						data: {
							name: _this.healthArray.userName
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							_this.dietaryAdvice = response.data

						},
						fail: error => {
							console.error(error);
						},
					})
				}, 1000);
				// 运动建议接口
				setTimeout(function() {
					uni.request({
						url: 'http://127.0.0.1:5000/sport',
						data: {
							name: _this.healthArray.userName
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							_this.sportAdvice = response.data

						},
						fail: error => {
							console.error(error);
						},
					})
				}, 2000);
				// 作息建议接口
				setTimeout(function() {
					uni.request({
						url: 'http://127.0.0.1:5000/rest',
						data: {
							name: _this.healthArray.userName
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							_this.sleepAdvice = response.data

						},
						fail: error => {
							console.error(error);
						},
					});
				}, 3000)

			}
		},
		methods: {
		
			// ai预测路由跳转
			toPredict() {
				uni.navigateTo({
					url: '/pages/predict/predict',
						animationType: 'zoom-out',
						animationDuration: 200,
					// url:"../component/classdetails/classdetails?newsid="+ newsid,
					success: res => {
						console.log("调用成功")
					},
					fail: () => {
						console.log("调用失败")
					},
					complete: () => {
						console.log("调用完成")
					}
				});
			},
			// 心理路由跳转
			toHeart() {
				uni.navigateTo({
					url: '/pages/heart/heart',
					// url:"../component/classdetails/classdetails?newsid="+ newsid,
					success: res => {
						console.log("调用成功")
					},
					fail: () => {
						console.log("调用失败")
					},
					complete: () => {
						console.log("调用完成")
					}
				});
			},
           // 吃药提醒路由跳转
		   toMedicineRemind(){
			   uni.navigateTo({
			   	url:'/pages/medicineRemind/medicineRemind'
			   })
		   },
			// 遮罩层事件绑定
			toSearch() {
				let _this = this
				this.searchLoad = true
				if (this.inputMessage !== '') {
					uni.request({
						url: 'http://127.0.0.1:5000/ddgsearch',
						data: {
							text: this.inputMessage
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						success: response => {
							console.log(response.data);
							console.log('跳转到搜素页面');
							helper.searchResponse = response.data
							_this.searchLoad = false
							uni.navigateTo({
								url: '/pages/search/search'
							})

						},
						fail: error => {
							console.error(error);
						},
					});

				} else {
					// 弹窗
					Dialog.alert({
						confirmButtonText: '重新输入',
						context: this,
						title: '输入错误',
						overlay: 'false',
						message: '不能输入空的搜索词',
						theme: 'round-button',
					}).then(() => {});
				}
			},
			setShowTrue() {
				console.log('遮罩层展示');
				this.show = true
				this.blockBackGroundColor = 'linear-gradient(to bottom, rgba(7, 7, 7, 0.8), rgba(255, 255, 255, 1));'
			},
			setShowFalse() {
				console.log('遮罩层关闭');
				this.show = false
				// block.style.backgroundColor = 'rgba(22, 22, 22, 0)'
				this.blockBackGroundColor = 'rgba(22, 22, 22, 0);'
			},
			// 登录弹出弹窗相关
			actionSheetTap() {
					
					},
			// 禁止用户进行操作弹窗让用户去注册
			toLogin(){
				Dialog.alert({
				  title: '您还没有注册哟 ~',
				  message: '注册立享免费的疾病预测服务',
				  itemColor: '#117df4',
				}).then(() => {
				  const that = this;
				  uni.showActionSheet({
				  	title: '您还没有注册哦 ~',
				  	itemList: ['去注册'],
				  	itemColor:'#117df4',
				  	popover: {
				  		top: that.buttonRect.top * 2 + that.buttonRect.height,
				  		left: that.buttonRect.left + that.buttonRect.width / 2
				  	},
				  	success: e => {
				  	 uni.navigateTo({
				  	 	url:'/pages/login/login'
				  	 })
				  		
				  	}
				  });
				});
			},
			// 实现扫码功能
			toScan(){
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url:'/pages/webview/webview?url='+res.result
						})
					}
				});
			}
		}
	}
</script>

<style>
	/* 更改vant组件css样式 */
	page {
		--notice-bar-height: 16upx;
		--notice-bar-padding: 32upx;
		--notice-bar-font-size: 26upx;
	}
	
	/* 全局设置 */
	.overall {
		position: relative;
		background-color: #f8f8f8;
		height: 3100upx;
		width: 100%;
	    animation: overall 2s;
	}
	@keyframes overall{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
/* 当用户未登录时禁止用户进行操作 */
   .banAction{
	   top: 0;
	   left: 0;
	   background-color: rgba(0, 255, 127, 0.0);
       position: absolute;
	   width: 100%;
	   height: 100%;
	
   }
	/* 搜索框 */
	.search {
		height: 64upx;
		width: 90%;
		display: flex;
		margin: 0px auto;
	}
	.search .font image {
		margin-top: 6upx;
		width: 32upx;
		height: 32upx;
	}

	.search input {
		font-size: 28upx;
		margin-left: 12upx;
	}
    .search .scan{
		width: 38upx;
		height: 38upx;
		margin-left: 280upx;
		margin-top: 5upx;
	}
	/* 遮罩层样式设置 */
	.wrapper {
		display: none;
		position: fixed;
		top: 200upx;
		left: 0;
		z-index: 98;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2600upx;
	}

	.block {
		width: 730upx;
		height: 2900upx;
		transition: all 2s linear;

	}

	@keyframes blockAm {
		from {
			background-color: rgba(22, 22, 22, 0.4);
		}

		to {
			background-color: rgba(22, 22, 22, 0.9);
		}
	}


	/* Ai问诊区域 */
	.ai {
		display: flex;
		justify-content: space-between;
		height: 236upx;
		width: 708upx;
		margin: 20upx auto;

	}

	/* 设置盒子 */
	.ai .Interrogation .box,
	.ai .psychology .box {
		display: flex;
		margin-left: 20upx;
		margin-top: 32upx;
	}

	/* ai问诊*/
	.ai .Interrogation {
		width: 340upx;
		/* background-color: aqua; */
		/* rgba(0, 255, 127, 0.1) */
		background-image: linear-gradient(to bottom, rgba(0, 255, 127, 0.1), rgba(255, 255, 255, 1));
		border-radius: 16upx;
	}

	.ai .Interrogation .h1,
	.ai .psychology .h1 {
		font-size: 48upx;
		font-weight: 600;
		letter-spacing: 4upx
	}

	.ai .Interrogation .p,
	.ai .psychology .p {
		font-size: 24upx;
		color: #8c8c8c;
		margin-top: 6upx;
		margin-bottom: 8upx;
	}

	.ai .Interrogation .right .img {
		height: 108upx;
		width: 120upx;
		margin-left: 16upx;
		margin-top: 20upx;
	}

	/* ai心理 */
	.ai .psychology {
		width: 340upx;
		/* background-color: aqua; */
		background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 1));
		border-radius: 16upx;
	}

	.ai .psychology .right .img {
		height: 152upx;
		width: 140upx;
	}

	/* 轮播图 */
	.banner,
	.banner image {
		height: 320upx;
		width: 700upx;
		margin: auto;
		border-radius: 16upx;
		background-size: contain;
	}

	/* 健康+ */
	.health {
		width: 700upx;
		height: 2120upx;
		margin: 30upx auto;
		/* background-color: #ffffff; */
		border-radius: 12upx;
	}

	/* 头部区域 */
	.health .top {
		font-size: 32upx;
		font-weight: 550;
		margin-left: 12upx;
		margin-right: 10px;
	}

	.health .ul {
		display: flex;
		height: 600upx;
		flex-wrap: wrap;
		margin-top: -4upx;
		width: 100%;
	}

	.health .ul .li {
		display: flex;
		width: 340upx;
		height: 180upx;
		margin-top: 16upx;
		background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.1), rgba(255, 255, 255, 1));
		border-radius: 12upx;
	}

	.health .ul .li:nth-child(2n) {
		margin-left: 20upx;
	}

	.health .ul .li .h1 {
		font-size: 28upx;
		width: 100%;
		font-weight: 550;
		margin-top: 12upx;
		margin-left: 12upx;
	}

	.health .ul .li .number {
		font-weight: 560;
		margin-top: 12upx;
		margin-left: 12upx;
		width: 200upx;
	}

	.health .ul .li .p {
		font-size: 24upx;
		margin-left: 12upx;
		margin-top: 12upx;
		color: #888888;
	}

	.health .ul .li .right {
		width: 200upx;
	}

	.health .ul .li .left {
		display: flex;
		flex-wrap: wrap;
		width: 240upx;
		height: 80upx;
	}

	.health .ul .li .right image {
		height: 120upx;
		width: 120upx;
		margin-left: 18upx;
	}

	/* 综合评价区域 */
	.health .evaluation,
	.health .sports,
	.health .medical,
	.health .food {
		width: 100%;
		height: 320upx;
		margin-top: 40upx;
		border-radius: 36upx;
		box-shadow: 0 0 4upx #c1c1c1;
	}

	/* 综合评价 */
	.health .evaluation .top {
		font-size: 28upx;
		height: 16%;
		width: 100%;
		padding: 20upx 0 0 0;
		border-radius: 36upx 36upx 0% 0%;
		margin-left: -1.2upx;
		background-image: linear-gradient(to right, rgba(81, 255, 7, 1.0), rgba(35, 255, 193, 1.0));
		letter-spacing: 2upx;
		font-weight: 400;
		color: #ffffff;
	}

	.health .evaluation .top .h1 {
		margin-left: 24upx;
		font-weight: 550;
	}

	.health .evaluation .bottom,
	.health .sports .bottom,
	.health .food .bottom,
	.health .medical .bottom {
		height: 60%;
		width: 90%;
		margin: 20upx auto;
		font-size: 24upx;
		color: #4f4f4f;
		line-height: 1.6;
		font-weight: 550;
	}

	/* 运动建议 */
	.health .sports .top {
		font-size: 28upx;
		height: 16%;
		width: 100%;
		padding: 20upx 0 0 0;
		border-radius: 36upx 36upx 0% 0%;
		margin-left: -1.2upx;
		background-image: linear-gradient(to right, rgba(255, 179, 55, 1.0), rgba(220, 255, 44, 1.0));
		letter-spacing: 2upx;
		font-weight: 400;
		color: #ffffff;
	}

	.health .sports .top .h1 {
		margin-left: 24upx;
		font-weight: 550;
	}

	/* 饮食建议 */
	.health .food .top {
		font-size: 28upx;
		height: 16%;
		width: 100%;
		padding: 20upx 0 0 0;
		border-radius: 36upx 36upx 0% 0%;
		margin-left: -1.2upx;
		background-image: linear-gradient(to right, rgba(255, 170, 127, 1.0), rgba(255, 46, 19, 1.0));
		letter-spacing: 2upx;
		font-weight: 400;
		color: #ffffff;
	}

	.health .food .top .h1 {
		margin-left: 24upx;
		font-weight: 550;
	}

	/* 医疗建议 */
	.health .medical .top {
		font-size: 28upx;
		height: 16%;
		width: 100%;
		padding: 20upx 0 0 0;
		border-radius: 36upx 36upx 0% 0%;
		margin-left: -1.2upx;
		background-image: linear-gradient(to right, rgba(29, 255, 229, 1.0), rgba(24, 143, 255, 1.0));
		letter-spacing: 2upx;
		font-weight: 400;
		color: #ffffff;
	}

	.health .medical .top .h1 {
		margin-left: 24upx;
		font-weight: 550;
	}

	/* 更多内容 */
	.more {
		height: 32upx;
		width: 100%;
	}

	.more .p {
		width: 50%;
		margin: 20upx auto;
		text-align: center;
		font-size: 24upx;
	}
	/* 吃药提醒区域 */
	.medicine{
		position: relative;
		width: 94%;
		height: 120upx;
		border-radius: 20upx;
		margin: 0 auto;
	    margin-top: 12upx;
		
        background-image: linear-gradient(120deg, rgba(0, 170, 255, 0.2) 0%, rgba(0, 85, 255, 0.2) 100%);
	}
	.medicine .left{
		position: absolute;
		width: 120upx;
		height: 120upx;
	    left: 1%;
	}
	.medicine .p{
		position: absolute;
		color: #000000;
		top: 16%;
		left: 20%;
		font-size: 36upx;
		font-style:italic;
		letter-spacing: 2upx;
		font-family: WenQuanYi Micro Hei;
	}
	.medicine .tips{
		position: absolute;
		font-size: 24upx;
		color: #0000ff;
		font-style:italic;
		top: 58%;
		left: 20%;
	}
	.medicine .toRight{
		position: absolute;
		right: 0%;
		top: 14%;
		width: 120upx;
		height: 80upx;
	}
	
	/* 优化区域 */
	/* 搜索加载 */
    .searchLoad{
		position: absolute;
		z-index: 99;
		top: 14%;
		left: 43%;
	}
</style>