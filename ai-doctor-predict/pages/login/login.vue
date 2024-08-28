<template>
	<view>
		<!--登录-->
		<view class="top">点击添加头像</view>
		<view class="form-wrap">
			<view class="avatar-wrap">
				<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
					<image class="avatar" :src="avatarUrlValue"></image>
				</button>
			</view>
			<view class="nickname-wrap">
				<view class="title">昵称</view>
				<input type="nickname" class="weui-input" v-model="nickNameValue" placeholder="请输入昵称" />
			</view>
		</view>
		<button @click="toIndex" class="sumbit"><text class="text">注册</text></button>
		<!-- 未上传头像及昵称时弹窗 -->
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	// 全局变量引入
	import helper from '../../common/helper.js';
	import Dialog from '../../wxcomponents/vant/dist/dialog/dialog';
	export default {
		data() {
			return {
				avatarUrlValue: '',
				nickNameValue: ''
			}
		},
		methods: { 
			// 微信登录并获取头像昵称
			onChooseAvatar(e) {
				this.avatarUrlValue = e.detail.avatarUrl
				// 注意:这里拿到的头像url是个临时的路径,需要自行对头像进行上传处理,参考uni.upload()
				helper.userHeadShot = e.detail.avatarUrl
				// 强制刷新
				this.$forceUpdate();
			},
	
			toIndex() {
				if (this.avatarUrlValue === '') {
					Dialog.alert({
						confirmButtonText: '继续上传',
						context: this,
						title: '您还没有上传头像哟 ~',
						overlay: 'false',
						theme: 'round-button',
					}).then(()=>{
					});
					
		        return;
				}
				this.$forceUpdate();
				// 在开发者工具中会出现获取不到自动填入昵称nickname值的问题，真机测试无问题
				if (this.nickNameValue === '') {
					Dialog.alert({
						confirmButtonText: '继续填写',
						context: this,
						title: '您还没有填写昵称哟 ~',
						overlay: 'false',
						theme: 'round-button',
					}).then(()=>{
					});
				return;
				}
				helper.userName = this.nickNameValue
				helper.isLogin = true;
				uni.navigateBack({
					delta: 1
				})

			}
		}
	}
</script>

<style>
	.top {
		font-size: 24upx;
		width: 200upx;
		margin-left: 304upx;
		color: rgba(47, 47, 47, 0.5);
		margin-top: 40upx;
		margin-bottom: -100upx;
	}


	/* 	.avatar-wrapper {
		height: 100px;
		margin: auto;
	    background-size: 20px;
		width: 120px;
		border: 10px soild black;
		border-radius: 12px;
	} */
	.avatar-wrapper {
		margin-top: 120upx;
	}

	.nickname-wrap {
		display: flex;
		width: 400upx;
		margin-left: 56upx;
		margin-top: 40upx;
	}

	.title {
		width: 120upx;
	}

	.sumbit {
		margin-top: 80upx;
		width: 160upx;
		height: 80upx;
		line-height: 200upx;
		text-align: center;

		font-size: 48upx;
		color: #fff;
		/* 渐变背景 */
		background: linear-gradient(to right, rgba(0, 85, 255, 0.7), rgba(255, 255, 255, 0.1));
		/* 背景渐变色大小 */
		background-size: 400%;
		/* 圆角 */
		border-radius: 20upx;

	}

	.text {
		display: block;
		margin-top: -60upx;
		color: #000000;
		font-size: 28upx;
	}
</style>