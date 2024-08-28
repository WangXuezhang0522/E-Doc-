<template>
	<view class="wrapper">
		<!-- 个人资料 -->
		<view>
			<view class="top">
				<view class="center">
					<view class="center_top">
						<!-- 可以放置静态图片当做头像 -->
						<view class=".center_img">
							<image :src="userHeadShot"></image>
 
						</view>

						<!-- <view class=".rank_text">{{userName}}</view> -->
						<view class=".rank_text"></view>  
					</view>
  
				</view> 
				
				<!-- 底部水波纹图片 -->
				<image src='https://img-blog.csdnimg.cn/026303b7d0c0491981cecee78d81ec9f.gif' mode='scaleToFill'
					class='gif-wave'></image>
			</view>   
		</view> 
		<!-- 个人信息 -->
		<view class="count">
			<view class="cell" @click="toPredictHistory">
				<image src="../../static/历史记录.png"></image> <text style="color: #AAAAAA;">预测历史</text>
			</view>
			<view class="cell" @click="toHeartHistory">
				<image src="../../static/历史分析.png"></image><text style="color: #AAAAAA;">咨询历史</text>
			</view>
			<view class="cell" @click="toHealthHistory">
				<image src="../../static/历史事件.png"></image><text style="color: #AAAAAA;">健康记录</text>
			</view>
			<view class="cell" @click="toSearchHistory">
				<image src="../../static/足迹.png"></image> <text style="color: #AAAAAA;">搜索足迹</text>
			</view>
		</view>

		<view class="healthy">
			<view class="item icon-arrow" type="default" @click="toRecord">健康档案</view>
		</view>



		<!-- 其它 -->
		<view class="extra">
			<view @click="makePhone" class="item icon-arrow">联系客服</view>
			<button open-type="feedback" class="item icon-arrow">意见反馈</button>
		</view>

		<view @click="toAboutUs" class="extra">
			<button class="item icon-arrow">关于我们</button>
		</view>
		<view class="healthy">
			<view @click="toVoice" class="item icon-arrow">当前版本</view>
		</view>
		<!-- 欢迎用户动画弹出 -->

		<van-toast v-if="isLogin" id="van-toast" />
	</view>
	<!-- 推送消息测试 -->
	<!-- <view class="content">
	         <view class="msg">
	             <button type="primary" @click="Subscribe">发送消息</button>
	         </view>
	     </view>
	<button class="notice"  @click="notice">发送消息</button> -->

	<!-- 当用户初次登录时弹出注册选项 -->
	<!-- 未注册时禁止用户进行操作 -->
	<van-dialog id="van-dialog" />
	<view v-if="!isLogin" @click="toLogin" class="banAction"></view>
</template>

<script>
	import helper from '../../common/helper.js';
	import Toast from '/wxcomponents/vant/dist/toast/toast.js';
	import Dialog from '../../wxcomponents/vant/dist/dialog/dialog'
	export default {
		data() {
			return {
				userHeadShot: '',
				userName: '',
				// 登录相关数据
				buttonRect: {},
				// 判断是否完成登录
				// isLogin:true,
				isLogin: helper.isLogin,
			}
		},
		onShow() {
			this.userHeadShot = helper.userHeadShot
			this.userName = helper.userName

            this.isLogin = helper.isLogin
			// 强制刷新
			this.$forceUpdate();
			console.log('用户头像' + this.userHeadShot);
		},
		// node.js测试
		onLoad() {
			Toast('欢迎您! ' + (this.userName === '' ? this.userName : ''));
			// uni.request({
			//      url: 'http://localhost:666/user/findAll',
			//   method:'GET',
			//      success: (result) => {
			// 	  console.log('请求node.js数据成功');
			//          console.log(result.data);  // 用于在开发者工具中调试器检测接口是否能正确返回数据

			//      },
			//    });
		},
		methods: {
			toRecord() {
				uni.navigateTo({
					url: '/pages/healthRecord/healthRecord',
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
			toHeartHistory() {
				uni.navigateTo({
					url: '/pages/heartHistory/heartHistory',
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
			toPredictHistory() {
				uni.navigateTo({
					url: '/pages/predictHistory/predictHistory',
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
			toHealthHistory() {
				uni.navigateTo({
					url: '/pages/healthHistory/healthHistory'
				})
			},
			makePhone() {
				uni.makePhoneCall({
					phoneNumber: '10066668888', //手机号
					success: (res) => {
						console.log('调用成功!')
					},
					fail: (res) => {
						console.log(res);
						console.log('调用失败!')
					}

				});
			},
			toAboutUs() {
				uni.navigateTo({
					url: '/pages/aboutUs/aboutUs'
				})
			},
			toSearchHistory() {
				uni.navigateTo({
					url: '/pages/searchHistory/searchHistory',
				})
			},
			toVoice() {
				Toast('当前版本号为：0.1.2');
			},
			// 禁止用户进行操作弹窗让用户去注册
			toLogin() {
				Dialog.alert({
					title: '您还没有注册哟 ~',
					message: '注册立享免费的疾病预测服务',
					itemColor: '#117df4',
				}).then(() => {
					const that = this;
					uni.showActionSheet({
						title: '您还没有注册哦 ~',
						itemList: ['去注册'],
						itemColor: '#117df4',
						popover: {
							top: that.buttonRect.top * 2 + that.buttonRect.height,
							left: that.buttonRect.left + that.buttonRect.width / 2
						},
						success: e => {
							uni.navigateTo({
								url: '/pages/login/login'
							})

						}
					});
				});
			},
		}
	}
</script>


<style scoped lang="scss">
	Page {
		font-size: 28upx;
	}

	.top {
		width: 100%;
		height: 260upx;
		// background: #23EBB9;
		background: rgba(0, 170, 255, 0.7);
		padding-top: 30upx;
		position: relative;
	}

	.center {
		width: 95%;
		height: 200upx;
		background: white;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		border-radius: 10upx;
	}

	.center_top {
		position: relative;
		display: flex;
		flex-direction: row;
		// width: 80%;
		height: 160upx;
		margin: 0 auto;
		margin-top: 20rpx;
		border-bottom: 2upx solid #EEEEEE;
	}

	.center_img {
		width: 132upx;
		height: 132upx;
		border-radius: 50%;
		overflow: hidden;
	}

	.center_img image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.center_info {
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		margin-left: 30px;
	}

	.center_name {
		font-size: 40upx;
	}

	// .rank_text {
	// 	bottom: -2px;
	// 	right: 46px;
	// 	position: relative;
	// 	font-size: 12px;
	// 	margin-right: 30px;
	// 	margin-top: 60px;
	// 	color: #0055ff;
	// }

	.gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	.wrapper {
		position: absolute;
		top: 0;
		bottom: 0;

		width: 100%;
		background-color: #F4F4F4;
	}

	.profile {
		height: 375rpx;
		background-color: #ea4451;
		display: flex;
		justify-content: center;
		align-items: center;

		.meta {
			.avatar {
				display: block;
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
				border: 2rpx solid #fff;
				overflow: hidden;
			}

			.nickname {
				display: block;
				text-align: center;
				margin-top: 20rpx;
				font-size: 30rpx;
				color: #fff;
			}
		}
	}

	.count {
		display: flex;
		margin: 0 20rpx;
		height: 120rpx;
		text-align: center;
		border-radius: 4rpx;
		background-color: #fff;

		position: relative;
		top: 10rpx;

		.cell {
			margin-top: 10rpx;
			flex: 1;
			padding-top: 20rpx;
			font-size: 27rpx;
			color: #333;
		}

		text {
			display: block;
			font-size: 24rpx;
		}
	}

	.count image {
		width: 40upx;
		height: 40upx;
	}

	.orders {
		margin: 20rpx 20rpx 0 20rpx;
		padding: 40rpx 0;
		background-color: #fff;
		border-radius: 4rpx;

		.title {
			padding-left: 20rpx;
			font-size: 30rpx;
			color: #333;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #eee;
			margin-top: -30rpx;
		}

		.sorts {
			padding-top: 30rpx;
			text-align: center;
			display: flex;
		}

		[class*="icon-"] {
			flex: 1;
			font-size: 24rpx;

			&::before {
				display: block;
				font-size: 48rpx;
				margin-bottom: 8rpx;
				color: #ea4451;
			}
		}
	}


	.healthy {
		margin: 0 20rpx;
		background-color: #fff;
		border-radius: 4rpx;
		line-height: 1;
		padding: 25rpx 0 25rpx 20rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 30rpx;
		color: #333;
		margin-top: 15px;
	}


	.extra {
		margin: 0 20rpx;
		background-color: #fff;
		border-radius: 4rpx;
		margin-top: 10px;

		.item {
			line-height: 1;
			padding: 25rpx 0 25rpx 20rpx;
			border-bottom: 1rpx solid #eee;
			font-size: 30rpx;
			color: #333;
		}

		button {
			text-align: left;
			background-color: #fff;

			&::after {
				border: none;
				border-radius: 0;
			}
		}
	}

	.icon-arrow {
		position: relative;

		&::before {
			position: absolute;
			top: 50%;
			right: 20rpx;
			transform: translateY(-50%);
		}
	}

	.notice {
		width: 400upx;
		height: 400upx;
		background-color: #ea4451;
	}

	/* 当用户未登录时禁止用户进行操作 */
	.banAction {
		top: 0;
		left: 0;
		background-color: rgba(0, 255, 127, 0.0);
		position: absolute;
		width: 100%;
		height: 100%;

	}
</style>